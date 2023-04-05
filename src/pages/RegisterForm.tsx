// import Translator from "../components/i18n/Translator";

export const RegisterForm = () => {
	return (
		<div>
			<h1>Be on the map</h1>
			<p>Create an account now to share your experiences!</p>
			<form
				method='POST'
				action='/register'>
				<label>
					E-mail
					<input
						type='email'
						name='email'
						placeholder='Type your e-mail...'
						required
					/>
				</label>
				<label>
					Password
					<input
						type='password'
						name='password'
						placeholder='Type a secure password...'
						required
					/>
				</label>
				<a href='/login'>Make login instead</a>
				<button type='submit'>Submit</button>
			</form>
		</div>
	);
};
