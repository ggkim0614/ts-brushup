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
			meshRef.current.rotation.x += delta / 2;
			meshRef.current.rotation.y += delta / 2;
		}
	});

	return (
		<mesh
			{...props}
			ref={meshRef}
			scale={active ? 1.5 : 1}
			onClick={() => setActive(!active)}
			onPointerOver={() => setHovered(true)}
			onPointerOut={() => setHovered(false)}
			castShadow
			receiveShadow
		>
			<boxGeometry args={[3, 3, 3]} />
			<meshStandardMaterial color={hovered ? '#EA3636' : '#E61616'} />
		</mesh>
	);
}
