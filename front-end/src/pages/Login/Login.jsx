import React from 'react'
import logo from '../../assets/logo.svg'
import './style.css'
import CustomButton from '../../components/CustomButton/CustomButton'

const Login = () => {
  return (
    <div className='container'>
      <section className='login'>
        <img src={logo} alt="No Plastic Logo" />
        <div className='login__buttons'>
          <CustomButton text='Cadastrar'/>  
          <CustomButton text='Login' className='yellow'/>  
        </div>
      </section>
    </div>
  )
}

export default Login