"use client";
import{Canvas,useFrame}from"@react-three/fiber";
import{useRef}from"react";
import*as THREE from"three";
function ArraySculpture(){
 const group=useRef<THREE.Group>(null),core=useRef<THREE.Mesh>(null);
 useFrame((state,delta)=>{if(!group.current)return;const reduced=window.matchMedia("(prefers-reduced-motion: reduce)").matches;if(!reduced){group.current.rotation.y+=delta*.09;group.current.rotation.x=THREE.MathUtils.lerp(group.current.rotation.x,state.pointer.y*.12,.04);group.current.rotation.z=THREE.MathUtils.lerp(group.current.rotation.z,-state.pointer.x*.08,.04);group.current.position.y=Math.sin(state.clock.elapsedTime*.7)*.08;if(core.current)core.current.rotation.z-=delta*.24}});
 const cells=Array.from({length:18},(_,i)=>({x:(i%6-2.5)*.58,y:(Math.floor(i/6)-1)*.6,z:Math.sin((i%6)/5*Math.PI)*.18}));
 return <group ref={group} rotation={[-.22,-.42,.08]}><mesh position={[0,0,-.18]}><boxGeometry args={[4.2,2.35,.08]}/><meshStandardMaterial color="#151b1a" metalness={.94} roughness={.23}/></mesh>{cells.map((c,i)=><mesh key={i} position={[c.x,c.y,c.z]}><boxGeometry args={[.5,.51,.07]}/><meshPhysicalMaterial color={i===8||i===9?"#b7ff35":"#172826"} metalness={.62} roughness={.17} clearcoat={1} emissive={i===8||i===9?"#6fa616":"#04100e"} emissiveIntensity={i===8||i===9?1.5:.28}/></mesh>)}<mesh ref={core} position={[0,0,.5]} rotation={[Math.PI/2,0,0]}><torusGeometry args={[1.42,.026,10,120]}/><meshBasicMaterial color="#c7ff4a"/></mesh><mesh position={[0,0,.48]}><sphereGeometry args={[.13,32,32]}/><meshStandardMaterial color="#d8ff63" emissive="#a8ff22" emissiveIntensity={4}/></mesh></group>
}
export default function SolarScene(){return <Canvas dpr={[1,1.5]} camera={{position:[0,0,5.4],fov:42}} gl={{antialias:true,powerPreference:"high-performance",alpha:true}}><ambientLight intensity={.5}/><directionalLight position={[4,4,5]} intensity={2.7} color="#f7ffe0"/><pointLight position={[-3,-2,3]} intensity={18} color="#aaff2b" distance={7}/><ArraySculpture/></Canvas>}
