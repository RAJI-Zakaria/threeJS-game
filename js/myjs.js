const scene = new THREE.Scene();
//setting the bg-color of my scene
scene.background = new THREE.Color(0xFFA500);
 
//this what will render my scene
const renderer = new THREE.WebGLRenderer();
// setting size window
renderer.setSize(window.innerWidth, window.innerHeight);
//display
document.body.appendChild(renderer.domElement);

//setting camera.
const camera = new THREE.PerspectiveCamera(100, window.innerWidth / window.innerHeight, 0.1, 2000);

//
const characterGeometry = new THREE.SphereGeometry(3,40,40);

var characterMaterial = new THREE.MeshBasicMaterial({
    color: 0xFFFFFF
});
//preparing the mesh for add tp the scene
var characterMesh = new THREE.Mesh(characterGeometry, characterMaterial);
scene.add(characterMesh);
//problem : if the objecct doesn't apear then you should change the position of the camera or the object
camera.position.z=5;

//add a floor geometry
const floorGeometry = new THREE.PlaneGeometry(100,10,10);

const floorMaterial = new THREE.MeshBasicMaterial({

    color: 0x228B22,
    side: THREE.DoubleSide

});

const floorMesh = new THREE.Mesh(floorGeometry, floorMaterial);

floorMesh.position.x= Math.PI/2
floorMesh.position.y= -5;

scene.add(floorMesh);

//animation
const animate = function(){
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}


animate();