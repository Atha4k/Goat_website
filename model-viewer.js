import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

const mount = document.querySelector("[data-machine-viewer]");

if (mount) {
  let gsap = null;
  let ScrollTrigger = null;

  try {
    const timeout = new Promise((_, reject) => {
      window.setTimeout(() => reject(new Error("GSAP import timeout")), 1400);
    });
    const [gsapModule, scrollModule] = await Promise.race([
      Promise.all([
        import("https://esm.sh/gsap@3.12.5"),
        import("https://esm.sh/gsap@3.12.5/ScrollTrigger"),
      ]),
      timeout,
    ]);
    gsap = gsapModule.default;
    ScrollTrigger = scrollModule.ScrollTrigger;
  } catch {
    mount.dataset.gsapFallback = "true";
  }

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(36, 1, 0.1, 100);
  const renderer = new THREE.WebGLRenderer({
    alpha: true,
    antialias: true,
    powerPreference: "high-performance",
  });

  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setClearColor(0x000000, 0);
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.18;
  mount.append(renderer.domElement);
  window.__exportMachineCanvas = () => renderer.domElement.toDataURL("image/png");

  const modelGroup = new THREE.Group();
  const modelFrame = new THREE.Group();
  scene.add(modelGroup);
  modelGroup.add(modelFrame);
  modelGroup.position.y = -0.02;

  scene.add(new THREE.HemisphereLight(0xfff7ec, 0x120405, 1.35));

  const topLight = new THREE.SpotLight(0xfff1dc, 15, 24, Math.PI * 0.18, 0.58, 0.82);
  topLight.position.set(0.4, 6.2, 1.8);
  scene.add(topLight);
  scene.add(topLight.target);

  const redRim = new THREE.DirectionalLight(0xff2430, 3.4);
  redRim.position.set(-4.2, 1.6, -2.8);
  scene.add(redRim);

  const softFront = new THREE.DirectionalLight(0xffffff, 1.6);
  softFront.position.set(2.8, 1.7, 3.6);
  scene.add(softFront);

  const loader = new GLTFLoader();
  let modelReady = false;
  let loadedModel = null;
  const scrollTarget = { y: 0, fade: 1, spin: 0 };
  let isDragging = false;
  let lastPointerX = 0;
  let spinVelocity = 0.006;
  const pointer = { x: 0, y: 0 };
  const dragSurface = document.querySelector(".hero") || mount;
  const cameraHome = { z: 5.95 };
  const modelBaseX = 0;
  const modelBaseY = 0;

  function scrollDistance() {
    const hero = document.querySelector(".hero");
    const work = document.querySelector("#work");
    if (!hero || !work) return window.innerHeight;
    const heroTop = hero.getBoundingClientRect().top + window.scrollY;
    const workBottom = work.getBoundingClientRect().bottom + window.scrollY;
    return Math.max(window.innerHeight, workBottom - heroTop - window.innerHeight * 0.35);
  }

  function scrollMoveDistance() {
    return Math.min(window.innerHeight * 0.82, Math.max(window.innerHeight * 0.48, scrollDistance() * 0.36));
  }

  function sectionBounds() {
    const work = document.querySelector("#work");
    if (!work) {
      return { start: window.innerHeight, end: window.innerHeight * 2 };
    }
    const start = work.getBoundingClientRect().top + window.scrollY;
    const end = work.getBoundingClientRect().bottom + window.scrollY - window.innerHeight;
    return { start, end: Math.max(start + 1, end) };
  }

  function updateScrollMotion() {
    const { start, end } = sectionBounds();
    const travelEnd = Math.max(window.innerHeight, end);
    const travelProgress = Math.min(1, Math.max(0, window.scrollY / travelEnd));
    const fade = Math.min(1, Math.max(0, (window.scrollY - start) / (end - start)));

    scrollTarget.y = travelProgress;
    scrollTarget.fade = 1 - fade;
    scrollTarget.spin = travelProgress;
    mount.style.opacity = String(1 - fade);
    mount.style.setProperty("--machine-y", `${travelProgress * scrollMoveDistance()}px`);
  }

  function resize() {
    const width = Math.max(1, mount.clientWidth);
    const height = Math.max(1, mount.clientHeight);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height, false);
  }

  function frameModel(object) {
    modelFrame.clear();
    object.updateMatrixWorld(true);

    const box = new THREE.Box3().setFromObject(object);
    const size = box.getSize(new THREE.Vector3());
    const center = box.getCenter(new THREE.Vector3());
    const maxAxis = Math.max(size.x, size.y, size.z) || 1;

    object.position.set(-center.x, -center.y, -center.z);
    modelFrame.position.set(0, 0, 0);
    modelFrame.scale.setScalar(3.5 / maxAxis);
    modelFrame.rotation.set(0, -0.58, 0);
    modelFrame.add(object);

    camera.position.set(0, 0.08, cameraHome.z);
    camera.lookAt(0, 0, 0);
    topLight.target.position.set(0, 0, 0);
  }

  loader.load(
    mount.dataset.modelSrc,
    (gltf) => {
      const model = gltf.scene;

      model.traverse((child) => {
        if (child.isMesh) {
          child.castShadow = true;
          child.receiveShadow = true;
          if (child.material) {
            child.material.envMapIntensity = 1.35;
            child.material.needsUpdate = true;
          }
        }
      });

      frameModel(model);
      loadedModel = modelFrame;
      modelReady = true;
      mount.classList.add("is-loaded");
    },
    (event) => {
      if (event.total) {
        mount.dataset.loadProgress = String(Math.round((event.loaded / event.total) * 100));
      }
    },
    (error) => {
      console.error("Tattoo machine model failed to load:", {
        src: mount.dataset.modelSrc,
        error,
      });
      mount.classList.add("is-error");
    },
  );

  function animate() {
    const elapsed = performance.now() * 0.001;
    if (modelReady) {
      modelGroup.rotation.y += spinVelocity + scrollTarget.spin * 0.018;
      spinVelocity *= 0.94;
      if (!isDragging) {
        spinVelocity += (0.0045 - spinVelocity) * 0.02;
      }
      modelGroup.position.x += (modelBaseX - modelGroup.position.x) * 0.045;
      modelGroup.position.y += (modelBaseY + pointer.y * 0.055 + Math.sin(elapsed * 1.35) * 0.055 - modelGroup.position.y) * 0.05;
      modelGroup.rotation.x += (pointer.y * 0.055 - modelGroup.rotation.x) * 0.04;
      modelGroup.rotation.z += (pointer.x * -0.04 - modelGroup.rotation.z) * 0.04;
      camera.position.x += (pointer.x * 0.06 - camera.position.x) * 0.04;
      camera.position.z += (cameraHome.z - camera.position.z) * 0.06;
      if (loadedModel) {
        const pulse = 1 + Math.sin(elapsed * 1.1) * 0.01;
        loadedModel.scale.multiplyScalar(pulse / (loadedModel.userData.lastPulse || 1));
        loadedModel.userData.lastPulse = pulse;
      }
    }
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
  }

  window.addEventListener("resize", resize);
  window.addEventListener("pointermove", (event) => {
    pointer.x = (event.clientX / Math.max(1, window.innerWidth) - 0.5) * 2;
    pointer.y = (event.clientY / Math.max(1, window.innerHeight) - 0.5) * -2;
    pointer.x = Math.max(-1, Math.min(1, pointer.x));
    pointer.y = Math.max(-1, Math.min(1, pointer.y));
  });
  dragSurface.addEventListener("pointerdown", (event) => {
    isDragging = true;
    lastPointerX = event.clientX;
    if (dragSurface.setPointerCapture) {
      dragSurface.setPointerCapture(event.pointerId);
    }
  });
  dragSurface.addEventListener("pointermove", (event) => {
    if (!isDragging) return;
    const deltaX = event.clientX - lastPointerX;
    lastPointerX = event.clientX;
    spinVelocity = deltaX * 0.006;
  });
  dragSurface.addEventListener("pointerup", (event) => {
    isDragging = false;
    if (dragSurface.releasePointerCapture) {
      dragSurface.releasePointerCapture(event.pointerId);
    }
  });
  dragSurface.addEventListener("pointercancel", () => {
    isDragging = false;
  });

  if (gsap && ScrollTrigger) {
    mount.dataset.motion = "gsap";
    gsap.set(mount, { opacity: 1 });
  } else {
    mount.dataset.motion = "fallback";
  }

  window.addEventListener("scroll", updateScrollMotion, { passive: true });
  window.addEventListener("resize", updateScrollMotion);

  resize();
  updateScrollMotion();
  animate();
}
