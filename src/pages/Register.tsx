import Translator from "../components/i18n/Translator";
import classes from "./Register.module.css";

const Register = () => {
	return (
		<div className={classes.wrapper}>
			<div className={classes.container}>
				<h1>
					<Translator path='register.heading' />
				</h1>
				<p>
					<Translator path='register.description' />
				</p>
				<form
					className={classes.form}
					method='POST'
					action='/register'>
					<label htmlFor='email'>E-mail</label>
					<input
						id='email'
						type='email'
						name='email'
						placeholder='Type your e-mail...'
						required
					/>
					<label htmlFor='password'>Password</label>
					<input
						id='password'
						type='password'
						name='password'
						placeholder='Type a secure password...'
						required
					/>
					<a href='/login'>
						<Translator path='register.linkToLogin' />
					</a>
					<button type='submit'>
						<Translator path='form.submit' />
					</button>
				</form>
			</div>
		</div>
	);
};

export default Register;