import React, { useState } from 'react'
import { RiDeleteBack2Fill } from "react-icons/ri"
import { FiEdit2 } from "react-icons/fi"
import './ListItem.css'

function ListItem({list, item, setList}) {
    
    const [newInp , setnewInp] = useState(item.text);
    const [bool, setBool] = useState(true);

    const inputHandler = (e) => {
        setnewInp(e.target.value);
    }
    const change = () => {
        setBool(!bool);
    }
    const Dlt = () => {
        const newFlt = list.filter(it => it.id !== item.id)
        setList(newFlt);
    }
    return (
        <li id='listItem' className='border p-1 mb-2 rounded'>
            <div className='d-flex gap-2 justify-content-between' >
                <input type="text" readOnly={bool} onChange={inputHandler} className='px-3 input-w-80 border-0' value={newInp}/>
                <div className='d-flex gap-2'>
                    <button onClick={change} className='btn btn-dark py-1 px-2'><FiEdit2 /></button>
                    <button onClick={Dlt} className='btn btn-dark py-1 px-2'><RiDeleteBack2Fill /></button>
                </div>
            </div>
        </li>
    )
}

export default ListItem