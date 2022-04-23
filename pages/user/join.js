import React, {useState} from 'react'
export default function Join(){
	const [user, setUser] =useState({
		email:'', password:'', name:'', phone:''
	})
	const handleChange = e =>{
		e.preventDefault()
		const{name, value} = e.target;
		setUser({...user,[name]: value})
	}
	return <form onSubmit={
		e => {
			e.preventDefault()
			alert('Sign Up!');
			setUser({
				email:'', password:'', name:'', phone:''
			})
		}
	}
	>
		<div className={"border-bottom mt-4 mb-4"}>
			<h2 className="bd-title" id="content">Sign Up</h2>
		</div>
		<table className="table">
			{/* <thead>
				<tr>
					<th colSpan={2}><h1>Sign Up</h1></th>
				</tr>
			</thead> */}
			<tbody>
				<tr>
					<td><b>Email</b></td>
					<td><input type="text" name='email' onChange={handleChange} /></td>
				</tr>
				<tr>
					<td><b>Password</b></td>
					<td><input type="text" name='password' onChange={handleChange}/></td>
				</tr>
				<tr>
					<td htmlFor=""><b>Name</b></td>
					<td><input type="text" name='name' onChange={handleChange}/></td>
				</tr>
				<tr>
					<td><b>Phone</b></td>
					<td><input type="text" name='phone' onChange={handleChange}/></td>
				</tr>
			</tbody>
		</table>
		<div className="col-auto">
			<button type="submit" className="btn btn-primary auto">
				Sign Up
			</button>
		</div>
	</form>
}