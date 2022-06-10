import * as THREE from "three";

export default function () {
  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);
  const scene = new THREE.Scene();
  let axes = new THREE.AxesHelper(50);
  scene.add(axes);

  const camera = new THREE.PerspectiveCamera(
    45,
    window.innerWidth / window.innerHeight,
    0.01,
    500
  );
  // camera.position.set(0, 0, 10);
  camera.position.x = -3;
  camera.position.y = 3;
  camera.position.z = 3;
  camera.lookAt(scene.position);



  const material = new THREE.LineBasicMaterial({ color: 0x0000ff });

  const points = [];
  points.push(new THREE.Vector3(-10, 0, 0));
  points.push(new THREE.Vector3(0, 10, 0));
  points.push(new THREE.Vector3(10, 0, 0));

  const geometry = new THREE.BufferGeometry().setFromPoints(points);

  const line = new THREE.Line(geometry, material);

  scene.add(line);
  renderer.render(scene, camera);
}
