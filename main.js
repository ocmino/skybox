// Find the latest version by visiting https://cdn.skypack.dev/three
import * as THREE from 'three';
import { GridHelper } from 'three';
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";




// SETTING UP SCENE
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 10000 )
camera.position.set(0,0,0);
camera.position.x = 1;



const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setPixelRatio(devicePixelRatio);
document.body.appendChild( renderer.domElement );
















// CONTROLS
const controls = new OrbitControls( camera, renderer.domElement );




// CREATING BOX AND APPLYING PICTURES
let materialArray = [];
let texture_ft = new THREE.TextureLoader().load( 'meadow_ft.jpg');
let texture_bk = new THREE.TextureLoader().load( 'meadow_bk.jpg');
let texture_up = new THREE.TextureLoader().load( 'meadow_up.jpg');
let texture_dn = new THREE.TextureLoader().load( 'meadow_dn.jpg');
let texture_rt = new THREE.TextureLoader().load( 'meadow_rt.jpg');
let texture_lf = new THREE.TextureLoader().load( 'meadow_lf.jpg');
  
materialArray.push(new THREE.MeshBasicMaterial( { map: texture_ft }));
materialArray.push(new THREE.MeshBasicMaterial( { map: texture_bk }));
materialArray.push(new THREE.MeshBasicMaterial( { map: texture_up }));
materialArray.push(new THREE.MeshBasicMaterial( { map: texture_dn }));
materialArray.push(new THREE.MeshBasicMaterial( { map: texture_rt }));
materialArray.push(new THREE.MeshBasicMaterial( { map: texture_lf }));
   
for (let i = 0; i < 6; i++)
  materialArray[i].side = THREE.BackSide;
   
let boxGeometry = new THREE.BoxGeometry( 100, 100, 100);
let skybox = new THREE.Mesh( boxGeometry, materialArray );
scene.add( skybox );
animate();

// ANIMATION LOOP
function animate() {
	requestAnimationFrame( animate );
	controls.update();
	renderer.render( scene, camera );
}


