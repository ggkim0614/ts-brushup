import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Mesh } from 'three';

interface BoxProps {
	position: number[];
}

export default function Box(props: BoxProps) {
	// this reference gives direct access to mesh
	const meshRef = useRef<Mesh | null>(null);
	// set up state for hovered and active state
	const [hovered, setHovered] = useState(false);
	const [active, setActive] = useState(false);
	// SUBSCRIBE this component to the render-loop, and rotate the mesh every frame
	useFrame((state, delta) => {
		if (meshRef.current) {
			meshRef.current.rotation.x += delta;
		}
	});

	return (
		<mesh
			{...props}
			ref={meshRef}
			scale={active ? 3 : 1}
			onClick={() => setActive(!active)}
			onPointerOver={() => setHovered(true)}
			onPointerOut={() => setHovered(false)}
		>
			<boxGeometry args={[2, 2, 2]} />
			<meshStandardMaterial color={hovered ? 'orange' : 'black'} />
		</mesh>
	);
}
