import * as THREE from '/jsm/build/three.module.js'

// Scene
const scene = new THREE.Scene();

// Camera
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas, 
    alpha: true,         // make canvas transparent (i.e. use the website color as background)
});
renderer.setSize( window.innerWidth, window.innerHeight );

const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 5;

function animate() {
	requestAnimationFrame( animate );
	renderer.render( scene, camera );

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
}
animate();

console.log('Hi!')