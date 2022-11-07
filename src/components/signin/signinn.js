import { Button } from '@mui/material';
import React, {useEffect, useState} from 'react'
import validation from '../validation';
import { Form } from '../Form';
import useeee from '../useeee';
import useeee from '../useeee';
export const signForm = ( {submitForm}) => {

   const {handleChange, handleFormSubmit, values, errors} = useeee(submitForm);
  return (
    <div  className='container'>
        <div className='app-wrapper'>
            <div>
                <h2 className='title'>
                    Creat new Account
                </h2>
            </div>
            <form className='form-wrapper'>
                <div className='name'>
                    <label className='label'>Full Name</label>
                    <input className='input' type="text" name='fullname' value={values.fullname} onChange={handleChange}/>
                    {errors.fullname && <p className='error'>{errors.fullname}</p>}                

                </div>
                <div className='email'>
                    <label className='label'>Email</label>
                    <input className='input' type="email" name='email' value={values.email} onChange={handleChange}/>
                    {errors.email && <p className='error'>{errors.email}</p>}                
                </div>
                <div className='password'>
                    <label className='label'>Password</label>
                    <input className='input' type="password" name='passeword' value={values.password} onChange={handleChange}/>
                    {errors.password && <p className='error'>{errors.password}</p>}                

                </div>
                <div>
                    <Button className='submit'  onClick={handleFormSubmit}>
                        Sign Up
                    </Button>
                </div>
            </form>
        </div>

    </div>
  )
}
