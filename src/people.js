import React, { useState } from 'react'

const MyButton = ({children}) => {
    return <button className='mt-3 btn btn-success'>{children}</button>
}

const useInputValidation = (InitialValue) => {
    const [value, setValue] = useState(InitialValue)

    const onChange = (e) => {
        setValue(e.target.value)
    }
    const validationInput = () => {
        return value.search(/\d/) >= 0
    }

    return { value, onChange, validationInput }
}

const People = () => {
    const firstName = useInputValidation("")
    const LastName = useInputValidation("")

    const validatColorFirstname = firstName.validationInput() ? "text-danger" : null
    const validatColorLastname = LastName.validationInput() ? "text-danger" : null
    return (
        <div className='w-50 mx-auto mb-5'>
            <div className='border p-3 mt-5'>
                <p className='text-center fs-3'> Register</p>
                <div className='d-flex gap-3'>
                    <input
                        type="text"
                        className={`form-control ${validatColorFirstname}`}
                        placeholder='FirstName'
                        value={firstName.value}
                        onChange={firstName.onChange}
                    />
                    <input
                        type="text"
                        className={`form-control ${validatColorLastname}`}
                        placeholder='LastName'
                        value={LastName.value}
                        onChange={LastName.onChange}
                    />
                </div>
                <MyButton>Send Data</MyButton>
            </div>
        </div>
    )
}

export default People