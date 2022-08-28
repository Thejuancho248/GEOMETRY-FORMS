const scene = new THREE.Scene();
scene.background = new THREE.Color('hsl(272, 72%, 57%)')
scene.fog = new THREE.Fog(0x1B32FF, 45, 45);
var loader = new THREE.TextureLoader();
;   

const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
   
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const geometry = new THREE.CapsuleGeometry( 1, 1, 4, 8 );
const material = new THREE.MeshBasicMaterial( {color: 0x00ff00, wireframe:true} );
const capsule = new THREE.Mesh( geometry, material );
scene.add( capsule );
camera.position.z = 4;



function animate() {
	requestAnimationFrame( animate );
	renderer.render( scene, camera );
    capsule.rotation.x += 0.01;
    capsule.rotation.y += 0.01;
    capsule.rotation.z += 0.01;
}
animate();