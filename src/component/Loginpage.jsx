import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import ReactSwitch from 'react-switch'
import './login.css'


export default function Loginpage() {
  const [checked,setCheck] = useState(false)
  function handleChange(){
    setCheck(!checked)
  }
  return (
    <div className='Loginpage'>
     
    <div className='loginform'>
      <Form >
      Log in Rexav <br/> Dashboard
        <Form.Group className="mb-3">Email Address
        <Form.Control name='email' placeholder='Email Address' type='text'  />
        </Form.Group>
        <Form.Group className="mb-3">Password
        <Form.Control name='password' placeholder='Password' type='password'  />
        </Form.Group>
        <ReactSwitch
        checked={checked}
        onChange={handleChange}
      /> Remember me

        <br/>
        <Button variant='primary' size='lg'>Login</Button>
        <Form.Group>Forgot Password</Form.Group>
        
      </Form>
    </div>
    </div>
  )
}
