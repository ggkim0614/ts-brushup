import React from 'react';
import styled from 'styled-components';

interface Todo {
	id: number;
	task: string;
}

export const TodoList: React.FC<Todo> = () => {
	const [todos, setTodos] = React.useState<Todo[]>([]);

	const [input, setInput] = React.useState<string>('');

	const handleAddTodo = () => {
		setInput('');
		setTodos([...todos, { id: todos.length, task: input }]);
	};

	const removeTask = (id: number) => {
		console.log(id);
		setTodos(todos.filter((todo) => todo.id !== id));
	};

	return (
		<div>
			<Header>TodoList</Header>
			<div>Current Todo: {todos.length}</div>
			<TodoItemWrap>
				{todos.length === 0 ? (
					<p>Add todo</p>
				) : (
					todos.map((todo) => (
						<Todo>
							<div>{todo.id}</div>
							<div>{todo.task}</div>
							<button onClick={() => removeTask(todo.id)}>X</button>
						</Todo>
					))
				)}
			</TodoItemWrap>
			<input
				type="text"
				value={input}
				onChange={(e) => setInput(e.target.value)}
			/>
			<button onClick={handleAddTodo}>Add Todo</button>
		</div>
	);
};

const Header = styled.p`
	font-size: 24px;
	font-weight: bold;
`;

const TodoItemWrap = styled.div`
	display: flex;
	flex-direction: column;
`;

const Todo = styled.div`
	display: flex;
	align-items: center;
`;
