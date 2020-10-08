import React from 'react'

const Form = ({ color }) => {
    return (
        <div
            className='form'
            style={{ backgroundColor: color, height: '100vh' }}
        >
            my name is <span>_ </span>
        </div>
    )
}

export default Form
