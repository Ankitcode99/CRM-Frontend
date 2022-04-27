import React,{useState} from 'react'
import { Login } from '../../components/login/Login.comp'
import { ResetPassword } from '../../components/password-reset/PasswordReset.comp'
import './entry.style.css'

export const Entry = () => {

  const [formLoad, setFormLoad] = useState("login");


  const formSwitch = frmType => {
    setFormLoad(frmType);
  }

  const handlePasswordReset = (e) => {
    e.preventDefault();

    
  }
 
  return (
    <div className='entry-page'>
        <div className='form-holder'>
          {
            formLoad==="login" ? 
              <Login formSwitch={formSwitch}/> 
            :
              <ResetPassword  handlePasswordReset={handlePasswordReset} formSwitch={formSwitch}/>
          }
        </div>
    </div>
  )
}
