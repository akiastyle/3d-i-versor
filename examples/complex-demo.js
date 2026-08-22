import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.179.1/+esm';
import { OrbitControls } from 'https://cdn.jsdelivr.net/npm/three@0.179.1/examples/jsm/controls/OrbitControls.js/+esm';

export function createComplexDemo(config) {
  const root = document.getElementById('viewer');
  const slider = document.getElementById('xpos');
  const info = document.getElementById('info');

  const XMIN = config.xmin;
  const XMAX = config.xmax;
  const STEPS = config.steps || 2600;

  slider.min = XMIN;
  slider.max = XMAX;
  slider.step = config.step || (XMAX - XMIN) / 2000;
  slider.value = config.initial ?? XMIN;

  document.getElementById('formula').textContent = config.formula;
  document.getElementById('curve').textContent = config.curve;
  document.getElementById('description').textContent = config.description;

  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0x111111);

  const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  root.appendChild(renderer.domElement);

  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enablePan = false;
  controls.enableDamping = true;
  controls.dampingFactor = 0.07;
  controls.minDistance = 3;
  controls.maxDistance = 300;

  scene.add(new THREE.AmbientLight(0xffffff, 2));
  const light = new THREE.DirectionalLight(0xffffff, 2);
  light.position.set(10, 12, 16);
  scene.add(light);

  function line(a, b, color, opacity = 1) {
    const obj = new THREE.Line(
      new THREE.BufferGeometry().setFromPoints([a, b]),
      new THREE.LineBasicMaterial({ color, transparent: opacity < 1, opacity })
    );
    scene.add(obj);
    return obj;
  }

  const values = [];
  let radialMax = 1;

  for (let n = 0; n <= STEPS; n++) {
    const x = XMIN + (XMAX - XMIN) * n / STEPS;
    const re = config.re(x);
    const im = config.im(x);
    radialMax = Math.max(radialMax, Math.hypot(re, im));
    values.push(new THREE.Vector3(x, re, im));
  }

  const axisX = Math.max(Math.abs(XMIN), Math.abs(XMAX)) * 1.08;
  const axisR = radialMax * 1.35;

  line(new THREE.Vector3(-axisX, 0, 0), new THREE.Vector3(axisX, 0, 0), 0xcc5555);
  line(new THREE.Vector3(0, -axisR, 0), new THREE.Vector3(0, axisR, 0), 0x55aa66);
  line(new THREE.Vector3(0, 0, -axisR), new THREE.Vector3(0, 0, axisR), 0x5577dd);

  const geometry = new THREE.BufferGeometry().setFromPoints(values);
  const curve = new THREE.Line(
    geometry,
    new THREE.LineBasicMaterial({ color: 0x2f80ed })
  );
  scene.add(curve);

  const markerGeometry = new THREE.SphereGeometry(Math.max(radialMax * 0.025, 0.04), 20, 20);
  const axisMarker = new THREE.Mesh(
    markerGeometry,
    new THREE.MeshStandardMaterial({ color: 0xdd8844 })
  );
  scene.add(axisMarker);

  const curveMarker = new THREE.Mesh(
    markerGeometry,
    new THREE.MeshStandardMaterial({ color: 0x2f80ed })
  );
  scene.add(curveMarker);

  let radiusLine = line(
    new THREE.Vector3(0, 0, 0),
    new THREE.Vector3(0, 0, 0),
    0x5577dd
  );

  function updatePoint() {
    const x = Number(slider.value);
    const re = config.re(x);
    const im = config.im(x);
    const mod = Math.hypot(re, im);
    const arg = Math.atan2(im, re);

    axisMarker.position.set(x, 0, 0);
    curveMarker.position.set(x, re, im);

    radiusLine.geometry.dispose();
    radiusLine.geometry = new THREE.BufferGeometry().setFromPoints([
      new THREE.Vector3(x, 0, 0),
      new THREE.Vector3(x, re, im)
    ]);

    const direction = im > 1e-10 ? '+i' : im < -1e-10 ? '-i' : 'real axis';
    info.textContent =
      `x=${x.toFixed(4)} | Re=${re.toFixed(4)} | Im=${im.toFixed(4)} | ` +
      `|f|=${mod.toFixed(4)} | arg=${arg.toFixed(4)} rad | ${direction}`;
  }

  slider.addEventListener('input', updatePoint);

  function fitCamera() {
    const box = new THREE.Box3().setFromObject(scene);
    const sphere = new THREE.Sphere();
    box.getBoundingSphere(sphere);

    const w = Math.max(root.clientWidth, 1);
    const h = Math.max(root.clientHeight, 1);
    camera.aspect = w / h;

    const vfov = THREE.MathUtils.degToRad(camera.fov);
    const hfov = 2 * Math.atan(Math.tan(vfov / 2) * camera.aspect);
    const limitingFov = Math.min(vfov, hfov);
    const distance = (sphere.radius / Math.sin(limitingFov / 2)) * 1.18;

    const direction = new THREE.Vector3(1, 0.55, 0.9).normalize();
    camera.position.copy(sphere.center).add(direction.multiplyScalar(distance));
    controls.target.copy(sphere.center);
    camera.near = 0.01;
    camera.far = distance * 20;
    camera.updateProjectionMatrix();
    controls.update();
  }

  function zoom(multiplier) {
    const direction = camera.position.clone().sub(controls.target);
    direction.multiplyScalar(multiplier);
    camera.position.copy(controls.target).add(direction);
    controls.update();
  }

  document.getElementById('zin').addEventListener('click', () => zoom(0.8));
  document.getElementById('zout').addEventListener('click', () => zoom(1.25));
  document.getElementById('reset').addEventListener('click', fitCamera);

  function resize() {
    const w = Math.max(root.clientWidth, 1);
    const h = Math.max(root.clientHeight, 1);
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
  }

  new ResizeObserver(() => {
    resize();
    fitCamera();
  }).observe(root);

  resize();
  updatePoint();
  fitCamera();

  function animate() {
    controls.update();
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
  }

  animate();
}
