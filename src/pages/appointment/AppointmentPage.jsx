import { useState } from 'react';

export const AppointmentPage = () => {
	const [fullName, setFullName] = useState('');
	const [phone, setPhone] = useState('');
	const [description, setDescription] = useState('');

	const submitHandler = async (event) => {
		event.preventDefault();

		const data = { fullName, phone, description };

		const response = await fetch('/api/appointment', {
			method: 'POST',
			body: JSON.stringify(data),
			headers: { 'Content-Type': 'application/json' },
		});

		// const responseData = await response.json();

		// console.log(responseData);
		setFullName('');
		setPhone('');
		setDescription('');
	};

	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				width: '600px',
				margin: '0 auto',
				height: '100%',
				justifyContent: 'center',
			}}
		>
			<h1>Записаться к врачу</h1>
			<form
				id="register_form"
				style={{ display: 'flex', flexDirection: 'column', padding: '15px' }}
				onSubmit={submitHandler}
			>
				<label htmlFor="fullName">ФИО</label>
				<input
					type="text"
					required
					id="fullName"
					name="fullName"
					value={fullName}
					onChange={({ target }) => {
						setFullName(target.value);
					}}
				/>
				<label htmlFor="phone">Номер телефона</label>
				<input
					type="tel"
					pattern="+7 [0-9]{3}-[0-9]{3}-[0-9]{4}"
					required
					id="phone"
					name="phone"
					value={phone}
					onChange={({ target }) => {
						setPhone(target.value);
					}}
				/>
				<label htmlFor="phone">Опишите проблему</label>
				<textarea
					rows="10"
					cols="45"
					name="description"
					value={description}
					onChange={(e) => setDescription(e.target.value)}
					required
				/>
				<button style={{ marginTop: '10px' }} type="submit">
					Отправить
				</button>
			</form>
		</div>
	);
};
