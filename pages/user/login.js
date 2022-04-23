import React, { useState } from 'react';

const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const emailHandler = e => {
		setEmail(e.currentTarget.value);
	}
	const passwordHandler = e => {
		setPassword(e.currentTarget.value);
	}

	const submitHandler = e => {
		e.preventDefault();
		alert("Login!");
	}

	return <div>
		<div className={"border-bottom mt-4 mb-4"}>
			<h2 className="bd-title" id="content">Login</h2>
		</div>
		<br/>
		<form className="row g-3">
			<div className="col-auto">
				<label htmlFor="staticEmail2" className="visually-hidden">Email</label>
				<input type="text" className="form-control" id="staticEmail2" placeholder="name@example.com" value={email} onChange={emailHandler} />
			</div>
			<div className="col-auto">
				<label htmlFor="inputPassword2" className="visually-hidden">Password</label>
				<input type="password" className="form-control" id="inputPassword2" placeholder="Password" value={password} onChange={passwordHandler} />
			</div>
			<div className="col-auto">
				<button type="submit" className="btn btn-primary mb-3" onClick={submitHandler}>
					Sign In 
				</button>
			</div>
		</form>
	</div>
}

export default Login;