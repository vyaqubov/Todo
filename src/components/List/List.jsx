import React from 'react'
import { nanoid } from 'nanoid';

import ListItem from '../ListItem/ListItem'


function List({list, setList}) {
    return (
        <ul className='px-4'>
            {list.map((item,index) => <ListItem key={nanoid()} item={item} list={list} setList={setList} />)}
        </ul>
    )
}

export default List