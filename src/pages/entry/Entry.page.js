import React,{useState} from 'react'
import { Login } from '../../components/login/Login.comp'
import { ResetPassword } from '../../components/password-reset/PasswordReset.comp'
import './entry.style.css'

export const Entry = () => {

  const [email, setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [formLoad, setFormLoad] = useState("login");

  const handleOnChange = (e)=>{
    const {name, value} = e.target;
    switch(name){
      case 'email':setEmail(value);
      break;
      case 'password':setPassword(value);
      break;
      default:break;
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!email || !password){
      return alert("Please fill up all the fields")
    }

    console.log(email, password);
  }

  const formSwitch = frmType => {
    setFormLoad(frmType);
  }

  const handlePasswordReset = (e) => {
    e.preventDefault();

    if(!email){
      return alert(`Please provide the email`)
    }
    console.log(email);
  }
 
  return (
    <div className='entry-page bg-info'>
        <div className='form-holder'>
          {
            formLoad==="login" ? 
              <Login handleOnChange={handleOnChange} email={email} pass={password} handleSubmit={handleSubmit} formSwitch={formSwitch}/> 
            :
              <ResetPassword handleOnChange={handleOnChange} email={email} handlePasswordReset={handlePasswordReset} formSwitch={formSwitch}/>
          }
        </div>
    </div>
  )
}
