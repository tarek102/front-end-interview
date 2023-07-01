import React from 'react'
import { ReferalPatients } from './ReferalPatients'
import { FormTitle } from './FormTitle'
import InputWithIcon from './FormFill'

export const Form = () => {
  return (
    <div className='form-container'>
        <ReferalPatients />
        <div className='form'>
            <FormTitle />
            <InputWithIcon />
        </div>
    </div>
  )
}
