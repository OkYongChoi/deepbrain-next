import React from 'react';
import axios from "axios";

export default function list () {
	const proxy = 'http://localhost:5000'

	const loadFTData = () => {
		axios.get(`${proxy}/ft/0`).then((res) => {
			console.log(res.data);
		});
	}

	return <div>
		<div className={"border-bottom auto"}>
			<h2 className="bd-title" id="content">Financial Terms 2015.</h2>
		</div>
		<br/>
		<table className="table">
			<thead>
			<tr>
				<th scope="col">Table Header</th>
			</tr>
			</thead>
			<tbody>
			<tr id={"tableRow"}>
				<td>Data will be added later!</td>
			</tr>
			</tbody>
		</table>
		<input type={"button"} onClick={loadFTData} value={"Loading Test"} />

	</div>
}