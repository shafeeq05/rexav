import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

export default function Auth() {
    let auth = {login:localStorage.getItem("login")}
  return (
    auth.login?<Outlet/>:<Navigate to='/login' />
  )
}
