import React, { useEffect, useRef } from 'react';
import './App.css';
import * as THREE from 'three'

function App() {
  const threeCanvas= useRef<HTMLCanvasElement>(null);
  useEffect(()=>{
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,0.1,1000)
    camera.position.set(0,0,50)
    const canvas= threeCanvas.current
    if(!canvas)return
    const renderer = new THREE.WebGLRenderer({canvas})
    const boxGeometry = new THREE.BoxGeometry(10,10,10)
    const boxMaterial = new THREE.MeshNormalMaterial()
    const boxMesh = new THREE.Mesh(boxGeometry, boxMaterial)
    scene.add(boxMesh)
    const animate = () =>{
      boxMesh.rotation.x += 0.01;
      boxMesh.rotation.y += 0.01;
      renderer.render(scene,camera)
      window.requestAnimationFrame(animate)
    }
    animate()
  })
  return (
    <div className="App">
      <canvas id="threeCanvas" ref={threeCanvas}/>
    </div>
  );
}

export default App;
