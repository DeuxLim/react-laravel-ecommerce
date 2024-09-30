import React from 'react'
import { Link } from 'react-router-dom'

function FormSubmitButton({linkTo, type, label, color, size}) {
    const buttonClass = `w-full bg-${color}-600 p-2 rounded-md text-white text-${size} font-medium text-center`;

    return (
        linkTo ? 
        (
            <Link to={linkTo} className={buttonClass}>
                {label}
            </Link> 
        )
            : 
        (
            <button className={buttonClass} type={type}>
                {label}
            </button>
        )
    )
}

export default FormSubmitButton