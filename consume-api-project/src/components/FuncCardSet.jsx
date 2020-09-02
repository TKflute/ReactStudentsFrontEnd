import React from 'react';
import Card from './Card';
import {useFetch, deleteStudent} from '../service/StudentService';
import {useState, useEffect} from 'react';

function FuncCardSet(props){
    // params are searchMethod and searchValue
    // loading and data are what useFetch returns
    const {loading, data} = useFetch('getAll', null);

    console.log(data);

    const handleDelete = (id) => {
        let ok = window.confirm('Are you sure you wish to delete this student?\n Press delete to confirm');
        if(ok === true){
            // just visually removing
            var removeCard = document.getElementById('card' + id);
            removeCard.parentNode.removeChild(removeCard);
            // this is actual Axios for our API call
            deleteStudent(id);
            window.alert("Student deleted");
        }
    }

    return(
        <div className="cardGroup">
            {loading && <p>loading...</p>}
            // This is where we iterate over JSON array of student objs- do not need JSON.parse
            {data && data.length > 0 && data.map(student => <Card key={student.id} info={student} handleDelete={handleDelete}/>)}
        </div>
    )
}

export default FuncCardSet;