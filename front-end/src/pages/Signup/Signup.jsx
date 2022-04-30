import React from 'react'
import CustomButton from '../../components/CustomButton/CustomButton'
import './style.css'

function backPage() {
  window.history.back()
}

export default function Signup() {
    return (
        <div className='container'>
            <div className='sidebar'>
                <h1 onClick={() => backPage}>Voltar</h1>
            </div>
            <div className='content'>
                <h1>Entrar na minha conta</h1>
                <form>
                    <div className='form-group'>
                        <label>E-mail ou telefone</label>
                        <input type='text' className='form-control' />
                    </div>
                    <div className='form-group'>
                        <label>Senha</label>
                        <input type='password' className='form-control' />
                    </div>
                </form>
            </div>
            <div className='login__buttons'> 
                <CustomButton text='Entrar'  className='yellow'></CustomButton>
            </div>
        </div>
    )
    }