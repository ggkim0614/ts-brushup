import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { Canvas } from '@react-three/fiber';
import Box from './components/Box.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<App />
		<Canvas>
			<ambientLight intensity={0.5} />
			<spotLight
				position={[10, 10, 10]}
				angle={0.15}
				penumbra={1}
				decay={0}
				intensity={Math.PI}
			/>
			<pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
			<Box position={[0, 0, 0]} />
		</Canvas>
	</React.StrictMode>
);
