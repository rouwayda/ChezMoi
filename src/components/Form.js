import React, { useState } from 'react'
import signForm from './signin/signinn';
import success from '../components/success';

export const Form = () => {
  const [FormIsSubmitted,setFormIsSubmitted]= useState(false);
  const submitForm = () => {
    setFormIsSubmitted(true);
  }
  return (
    <div>
        {!FormIsSubmitted ? <signForm submitForm={submitForm}/> : <success/>}
    </div>
  )
}
