const scene = new THREE.Scene();
scene.background = new THREE.Color(0x000000)
var loader = new THREE.TextureLoader();
loader.load(
    '../diamond-is-unbreakable.jpeg',function(texture){
        scene.background = texture;
    }
);   


const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const geometry = new THREE.CylinderGeometry( 5, 5, 20, 32);
const material = new THREE.MeshBasicMaterial( {color: 0xEBB959} );
const cylinder = new THREE.Mesh( geometry, material );
scene.add( cylinder );
camera.position.z = 20;


function animate() {
	requestAnimationFrame( animate );
	renderer.render( scene, camera );
    cylinder.rotation.x += 0.05;
    cylinder.rotation.y += 0.05;
    cylinder.rotation.z += 0.05;
}
animate();