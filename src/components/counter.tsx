import React from 'react';
import styled from 'styled-components';

export default function Counter() {
	const [count, setCount] = React.useState<number>(0);

	function handleAdd() {
		setCount(count + 1);
	}

	function handleSubtract() {
		setCount(count - 1);
	}

	return (
		<CounterWrapper>
			<CountNumber>{count}</CountNumber>
			<CounterButton onClick={handleAdd}>Increment</CounterButton>
			<CounterButton onClick={handleSubtract}>Decrement</CounterButton>
		</CounterWrapper>
	);
}

const CounterButton = styled.button`
	background-color: #111111;
	color: #ffffff;
	border: 0;
	padding: 8px 16px;
	font-size: 16px;
	margin-right: 6px;
	cursor: pointer;
	transition: 0.3s;

	&:hover {
		background-color: #333333;
	}
`;

const CountNumber = styled.p`
	color: #ffffff;
	font-size: 48px;
	font-weight: bold;
	margin: 8px 0;
	text-align: center;
`;

const CounterWrapper = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
`;
