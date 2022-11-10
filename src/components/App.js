import React, { useState } from "react";
import "./../styles/App.css";

function App() {

	const [text, setText] = useState("");
	const [text2, setText2] = useState("");
	const [doArray, setDoarray] = useState([]);
	const [editing, setEditing] = useState(false);

	const [btnStatus, setBtnStatus] = useState(false);

	const valueSetter = (event) => {

		setText(event.target.value);
	}
	const valueSetter2 = (event) => {
		if (event.target.value != "") {
			setBtnStatus(false);
		}
		setText2(event.target.value);

	}
	const input2_valueSetter = (identity) => {

		identity = identity.split(" ");
		identity = identity[identity.length - 1];
		console.log(identity, "iden");
		let arr = doArray.map((element, index) => {
			// index === identity ? text2 : element 
			console.log(index, identity);
			if (index == identity) {
				// /element = text2;
				console.log(element);
				console.log(text2);
				return text2;
			}
			// console.log(element.id);
			return element
		})

		console.log(arr, "forn hbjdhfb");
		setDoarray([...arr]);
		// setText(text2);
		setEditing(false);


	}

	const deletehandle = (identity) => {
		identity = identity.split(" ");
		identity = identity[identity.length - 1];
		let arr = doArray.map((element, index) => {
			if (index != identity) {
				return element;
			}
		})
		setDoarray([...arr]);
	}
	const addThis = () => {
		if (text.length != 0) {
			setDoarray([...doArray, text]);
		}
	}
	const edithandle = () => {
		setEditing(true);
		// editing = true

	}
	let arr2 = doArray.map((element, index) => {
		console.log(element, "ele");
		return <div key={`element ${index}`} className="list">
			<span id={`element${index}`} >{element}</span>
			<button className="edit" onClick={edithandle}  >edit</button>
			<button className="delete" onClick={() => deletehandle(element + " " + index)} >delete</button>

			{

				editing && element ? <div><input type="text" className="editTask" value={text2} onChange={valueSetter2} />
					<button className="saveTask" disabled={btnStatus} onClick={() => input2_valueSetter(element + " " + index)}>save</button>
				</div> : null
			}
		</div>
	})

	return (
		<div id="main">
			<input type="text" id="task" value={text} onChange={valueSetter} />
			<button id="btn" onClick={addThis}>add this</button>

			{
				arr2
			}

		</div>
	);
}


export default App;
