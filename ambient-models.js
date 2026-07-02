import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

const mounts = [...document.querySelectorAll("[data-ambient-model]")];

if (mounts.length) {
  const loader = new GLTFLoader();

  mounts.forEach((mount, index) => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(35, 1, 0.1, 100);
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    const group = new THREE.Group();
    const home = {
      x: 0,
      y: 0,
      spin: 0.0028 + index * 0.0004,
    };

    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.6));
    renderer.setClearColor(0x000000, 0);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.12;
    mount.append(renderer.domElement);

    scene.add(group);
    scene.add(new THREE.HemisphereLight(0xfff7ec, 0x21120d, 1.7));

    const key = new THREE.DirectionalLight(0xfff1dc, 4.2);
    key.position.set(-3.4, 4.6, 4.2);
    scene.add(key);

    const redFill = new THREE.DirectionalLight(0xd01924, 1.15);
    redFill.position.set(4, -0.5, 2);
    scene.add(redFill);

    const shade = new THREE.DirectionalLight(0x1b120e, 1.2);
    shade.position.set(3, -2, -3);
    scene.add(shade);

    camera.position.set(0, 0.05, 5.4);
    camera.lookAt(0, 0, 0);

    function resize() {
      const width = Math.max(1, mount.clientWidth);
      const height = Math.max(1, mount.clientHeight);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height, false);
    }

    function frame(object) {
      const box = new THREE.Box3().setFromObject(object);
      const size = box.getSize(new THREE.Vector3());
      const center = box.getCenter(new THREE.Vector3());
      const maxAxis = Math.max(size.x, size.y, size.z) || 1;

      object.position.sub(center);
      object.scale.setScalar(2.65 / maxAxis);
      object.rotation.set(-0.16, 0.52 + index * 0.42, 0.08);
    }

    loader.load(
      mount.dataset.modelSrc,
      (gltf) => {
        const model = gltf.scene;

        model.traverse((child) => {
          if (child.isMesh && child.material) {
            child.material.envMapIntensity = 0.9;
            child.material.needsUpdate = true;
          }
        });

        frame(model);
        group.add(model);
        mount.classList.add("is-loaded");
      },
      undefined,
      (error) => {
        console.error("Ambient model failed to load:", {
          src: mount.dataset.modelSrc,
          error,
        });
        mount.classList.add("is-error");
      },
    );

    mount.addEventListener("pointerenter", () => {
      home.x = 0.28;
      home.y = -0.12;
    });

    mount.addEventListener("pointerleave", () => {
      home.x = 0;
      home.y = 0;
    });

    function animate() {
      const elapsed = performance.now() * 0.001;
      group.rotation.y += home.spin;
      group.position.x += (home.x + Math.sin(elapsed * 0.58 + index) * 0.045 - group.position.x) * 0.035;
      group.position.y += (home.y + Math.sin(elapsed * 0.72 + index * 1.8) * 0.055 - group.position.y) * 0.035;
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    }

    window.addEventListener("resize", resize);
    resize();
    animate();
  });
}
