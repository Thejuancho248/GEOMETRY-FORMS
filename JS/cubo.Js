
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x8214F7)
scene.fog = new THREE.Fog(0x1B32FF, 2.5, 6.5);
var loader = new THREE.TextureLoader();
loader.load(
    '../wallpeper-ff7.jpeg',function(texture){
        scene.background = texture;
    }
);   

const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const geometry = new THREE.BoxGeometry( 2.5, 2.5, 2.5 );
const material = new THREE.MeshBasicMaterial( { color: 0xFFFB00} );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 5;


function animate() {
	requestAnimationFrame( animate );
	renderer.render( scene, camera );
    cube.rotation.x += 0.05;
    cube.rotation.y += 0.05;
    cube.rotation.z += 0.05;
}
animate();