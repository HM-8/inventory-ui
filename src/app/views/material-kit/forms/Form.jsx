import React, { useState, useEffect } from 'react'
import { ValidatorForm } from 'react-material-ui-form-validator'
import NormalButton from '../buttons/NormalButton'

const Form = ({ children, buttonText }) => {
    const [state, setState] = useState({
        date: new Date(),
    })

    useEffect(() => {
        ValidatorForm.addValidationRule('isPasswordMatch', (value) => {
            console.log(value)

            if (value !== state.password) {
                return false
            }
            return true
        })
        return () => ValidatorForm.removeValidationRule('isPasswordMatch')
    }, [state.password])

    const handleSubmit = (event) => {
    }

    const handleChange = (event) => {
        event.persist()
        setState({
            ...state,
            [event.target.name]: event.target.value,
        })
    }

    const handleDateChange = (date) => {
        setState({ ...state, date })
    }

    return (
        <div>
            <ValidatorForm onSubmit={handleSubmit} onError={() => null}>
                {children}
                <NormalButton buttonText={buttonText}/>
            </ValidatorForm>
        </div>
    )
}

export default Form
