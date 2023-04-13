import { nanoid } from 'nanoid';
import React, { useState } from 'react'
import "./Form.css"

function Form({list, setList}) {

    const [add,setAdd] = useState('');

    const inputHandler = (e) => {
        setAdd(e.target.value);
    }
    const fnc = (e,arg) => {
        e.preventDefault();
        setList( [...arg, {id:nanoid(),text:add}]);
        setAdd("");
    }
    return (
        <form onSubmit={(event) => fnc(event,list)} id='Form' className='m-4 p-1  d-flex justify-content-between align-items-center ps-4 rounded'>
            <input type="text" className='border-0 input-w-80' onChange={inputHandler} value={add} />
            <button className='btn btn-dark p-2'>add</button>
        </form>
    )
}

export default Form