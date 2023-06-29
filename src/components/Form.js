import React from 'react'
import { ReferalPatients } from './ReferalPatients'
import { FormTitle } from './FormTitle'

export const Form = () => {
  return (
    <div className='form-container'>
        <ReferalPatients />
        <div className='form'>
            <FormTitle />
        </div>
    </div>
  )
}
