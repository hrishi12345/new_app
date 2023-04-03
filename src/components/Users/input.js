import Card from "../UI/Card"
import {useState} from 'react'
import classes from './input.module.css'
export default function Input(props){
    const [enteredUserName,setenteredUserName]=useState('')
    const [enteredAge,setAge]=useState('')
    const User=(event)=>{
        setenteredUserName(event.target.value)
    }
    const Age=(event)=>{
        setAge(event.target.value)
    }
    const Save=(event)=>{
        event.preventDefault()
        console.log(enteredAge,enteredUserName)
        setenteredUserName('')
        setAge('')
    }

    return(
        <Card className={classes.input}>
            <form onSubmit={Save}>
            <label htmlFor='username'>UserName</label>
            <input id='username' type='text' onChange={User} value={enteredUserName}></input>
            <label htmlFor='age'>Age</label>
            <input id='age'type='number' onChange={Age} value={enteredAge}></input>
            <button type='Submit'>Add User</button>
            </form>
            </Card>
    )
}