import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export const LoginPage = () => {
	const navigate = useNavigate();

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const submitHandler = async (event) => {
		event.preventDefault();

		const data = { email, password };

		const response = await fetch('/api/login', {
			method: 'POST',
			body: JSON.stringify(data),
			headers: { 'Content-Type': 'application/json' },
			//credentials: 'include',
		});

		const responseData = await response.json();

		if (responseData.ok) {
			navigate('/appointments');
		}
	};

	return (
		<div
			style={{
				minHeight: '100vh',
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<h2>Авторизация</h2>
			<form
				onSubmit={submitHandler}
				style={{ padding: '30px', border: '1px solid #000', width: '300px', display: 'grid', gap: '10px' }}
			>
				<label style={{ display: 'grid', gap: '7px' }}>
					<span>Email</span>
					<input
						name="email"
						type="text"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						style={{ padding: '7px', border: '1px solid #000' }}
					/>
				</label>
				<label style={{ display: 'grid', gap: '7px' }}>
					<span>Пароль</span>
					<input
						name="password"
						type="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						style={{ padding: '7px', border: '1px solid #000' }}
					/>
				</label>
				<button
					type="submit"
					style={{
						justifySelf: 'center',
						padding: '10px',
						border: '1px solid #000',
						color: '#fff',
						backgroundColor: '#000',
					}}
				>
					Войти
				</button>
			</form>
		</div>
	);
};
