import React, {useEffect, useState} from "react";
import GetAll from "./components/GetAll";
import GetOne from "./components/GetOne";
import Create from "./components/Create";
import Update from "./components/Update";
import Delete from "./components/Delete";

function App() {

    const [inputList, setInputList] = useState([]);

    const [inputLogin0, setInputLogin0] = useState('put here your login')

    const [inputName1, setInputName1] = useState('put here your name')
    const [inputSurname1, setInputSurname1] = useState('put here your surname')
    const [inputDateOfBirth1, setInputDateOfBirth1] = useState('put here your dateOfBirth')
    const [inputLogin1, setInputLogin1] = useState('put here your login')

    const [inputName2, setInputName2] = useState('put here your name')
    const [inputSurname2, setInputSurname2] = useState('put here your surname')
    const [inputDateOfBirth2, setInputDateOfBirth2] = useState('put here your dateOfBirth')
    const [inputLogin2, setInputLogin2] = useState('put here your login')

    const [inputLogin3, setInputLogin3] = useState('put here your login')

    const addGetAll = event => {
        setInputList(inputList.pop())
        console.log(Date.now())
        setInputList(inputList.concat(<GetAll />));
    };
    const addGetOne = event => {
        var x = document.getElementById("getLogin").value;
        setInputList(inputList.pop())
        setInputList(inputList.concat(<GetOne value={x}/>));
    };
    const addCreate = event => {
        var name = document.getElementById("name1").value;
        var surname = document.getElementById("surname1").value;
        var dateOfBirth = document.getElementById("dateOfBirth1").value;
        var login = document.getElementById("login1").value;

        var jsonCreate = {"name":name, "surname":surname, 'dateOfBirth':dateOfBirth, "login":login}
        setInputList(inputList.pop())
        setInputList(inputList.concat(<Create value={jsonCreate}/>));
    };

    const addUpdate = event => {
        var name = document.getElementById("name2").value;
        var surname = document.getElementById("surname2").value;
        var dateOfBirth = document.getElementById("dateOfBirth2").value;
        var login = document.getElementById("login2").value;

        var jsonCreate = {"name":name, "surname":surname, 'dateOfBirth':dateOfBirth, "login":login}
        setInputList(inputList.pop())
        setInputList(inputList.concat(<Update value={jsonCreate}/>));
    };

    const addDelete = event => {
        var x = document.getElementById("deleteLogin").value;
        setInputList(inputList.pop())
        setInputList(inputList.concat(<Delete value={x}/>));
    };

  return (
    <div className="App">
        <div>GET ALL USERS</div>
        <button onClick={addGetAll}>get all</button>
        <div>____</div>

        <div>GET 1 USER BY LOGIN</div>
        <input type={"text"} id={"getLogin"} value={inputLogin0} onChange={event => setInputLogin0(event.target.value)}/>
        <button onClick={addGetOne}>get one</button>
        <div>____</div>

        <div>CRETE NEW USER</div>
        <input type={"text"} id={"name1"} value={inputName1} onChange={event => setInputName1(event.target.value)}/>
        <input type={"text"} id={"surname1"} value={inputSurname1} onChange={event => setInputSurname1(event.target.value)}/>
        <input type={"text"} id={"dateOfBirth1"} value={inputDateOfBirth1} onChange={event => setInputDateOfBirth1(event.target.value)}/>
        <input type={"text"} id={"login1"} value={inputLogin1} onChange={event => setInputLogin1(event.target.value)}/>
        <button onClick={addCreate}>create</button>
        <div>____</div>

        <div>UPDATE USER</div>
        <input type={"text"} id={"name2"} value={inputName2} onChange={event => setInputName2(event.target.value)}/>
        <input type={"text"} id={"surname2"} value={inputSurname2} onChange={event => setInputSurname2(event.target.value)}/>
        <input type={"text"} id={"dateOfBirth2"} value={inputDateOfBirth2} onChange={event => setInputDateOfBirth2(event.target.value)}/>
        <input type={"text"} id={"login2"} value={inputLogin2} onChange={event => setInputLogin2(event.target.value)}/>
        <button onClick={addUpdate}>update</button>
        <div>____</div>

        <div>DELETE USER</div>
        <input type={"text"} id={"deleteLogin"} value={inputLogin3} onChange={event => setInputLogin3(event.target.value)}/>
        <button onClick={addDelete}>delete</button>
        <div>____</div>

        <div>RESPONSE:</div>
        {inputList}
    </div>
  );
}

export default App;
