import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

export default function () {
  const scene = new THREE.Scene();
  scene.fog = new THREE.FogExp2('#333', 0.02);
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.shadowMap.enabled = true;
  document.body.appendChild(renderer.domElement);

  const axes = new THREE.AxesHelper(200);
  scene.add(axes);

  // 平面几何体
  const planeGeometry = new THREE.PlaneGeometry(100, 100);
  const planeMater = new THREE.MeshLambertMaterial({
    color: 0x666666,
    side: THREE.DoubleSide,
  });
  const plane = new THREE.Mesh(planeGeometry, planeMater);

  plane.receiveShadow = true;
  plane.rotation.x = -0.5 * Math.PI;
  plane.position.set(0, 0, 0);
  scene.add(plane);

  // 相机位置
  camera.position.x = -80;
  camera.position.y = 80;
  camera.position.z = 80;
  camera.lookAt(scene.position);

  // 绿色立方体
  const geometry = new THREE.BoxGeometry(8, 8, 8);
  const material = new THREE.MeshBasicMaterial({
    color: 'green',
    wireframe: true,
  });
  const cube = new THREE.Mesh(geometry, material);
  scene.add(cube);

  cube.castShadow = true;
  cube.position.set(20, 10, 20);

  // 黄色点状立方体
  const geometry2 = new THREE.BoxGeometry(5, 5, 5);
  const material2 = new THREE.PointsMaterial({
    color: 0x0000ff,
    size: 2, //点对象像素尺寸,
  });
  const cube2 = new THREE.Points(geometry2, material2);
  scene.add(cube2);

  cube2.position.set(-10, 10, 20);

  // 红色球体
  const geometry3 = new THREE.SphereGeometry(3, 40, 40);
  const material3 = new THREE.MeshLambertMaterial({
    color: 0xff0000,
    opacity: 0.5,
    transparent: true,
  });
  const sphere1 = new THREE.Mesh(geometry3, material3);
  sphere1.castShadow = true;
  sphere1.position.set(20, 20, 20);
  scene.add(sphere1);

  // 蓝色线状球体
  const geometry4 = new THREE.SphereGeometry(50);
  const material4 = new THREE.LineDashedMaterial({
    color: 0x0000ff,
    dashSize: 10, //显示线段的大小。默认为3。
    gapSize: 5, //间隙的大小。默认为1
  });
  const sphere2 = new THREE.Line(geometry4, material4);
  sphere2.computeLineDistances();
  scene.add(sphere2);

  // 聚光光源
  const spotLight = new THREE.SpotLight(0xffffff);
  spotLight.position.set(-80, 80, 80);
  spotLight.castShadow = true;
  spotLight.shadow.mapSize = new THREE.Vector2(1024, 1024);
  spotLight.shadow.camera.far = 200;
  spotLight.shadow.camera.near = 20;
  scene.add(spotLight);

  // // 环境光源
  // const light = new THREE.AmbientLight(0xffffff);
  // light.position.set(80, 80, 80);
  // // light.shadow.camera.far = 140;
  // // light.shadow.camera.near = 20;
  // scene.add(light);

  // 点光源
  const point = new THREE.PointLight(0xffffff);
  point.position.set(0, 0, 0);
  scene.add(point);

  const controls = new OrbitControls(camera, renderer.domElement);

  function animate() {
    requestAnimationFrame(animate);
    cube.rotateX(0.01);
    cube.rotateY(0.01);
    cube.rotateZ(0.01);
    cube2.translateX(0.01);
    renderer.render(scene, camera);
  }
  animate();

  window.addEventListener(
    'resize',
    () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    },
    false
  );
}
