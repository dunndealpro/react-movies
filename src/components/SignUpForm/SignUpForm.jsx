// SignUpForm.jsx

import {useState} from 'react';
import { Component } from "react";

// export default class SignUpForm extends Component {
//   state = {
//     userName: ""
//   };

export default function SignUpFrom({newUser}){
  const [formUser, setFormUser]=useState({
    userName: ""
  })


  // The object passed to setState is merged with the current state object
  const handleChange = (evt) => {
   const newFormUser = {...formUser, [evt.target.name]: evt.target.value}
   setFormUser(newFormUser)
    };
  


const handleSubmit = (evt)=>{
    evt.preventDefault();
    const userName = formUser

    console.log("SUBMIT?")
    console.log(formUser)
    newUser(userName)
    // setUser()

  }

  // render() {
    return (
      <div>
        <div className="form-container">
          <form autoComplete="off" onSubmit={handleSubmit}>
            <label>Name</label>
            <input
              type="text"
              name="userName"
              value={formUser.userName}
              onChange={handleChange}
              required
            />
            <button type="submit">SIGN IN!</button>
          </form>
        </div>
      </div>
    );
  }

