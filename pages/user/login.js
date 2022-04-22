import React, { useState } from 'react';

export default function login () {
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
		<form class="row g-3">
			<div class="col-auto">
				<label for="staticEmail2" class="visually-hidden">Email</label>
				<input type="text" class="form-control" id="staticEmail2" placeholder="name@example.com" value={email} onChange={emailHandler} />
			</div>
			<div class="col-auto">
				<label for="inputPassword2" class="visually-hidden">Password</label>
				<input type="password" class="form-control" id="inputPassword2" placeholder="Password" value={password} onChange={passwordHandler} />
			</div>
			<div class="col-auto">
				<button type="submit" class="btn btn-primary mb-3" onClick={submitHandler}>
					Sign In 
				</button>
			</div>
		</form>
	</div>
}