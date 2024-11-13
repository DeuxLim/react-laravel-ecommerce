import { Link } from 'react-router-dom'

export function FormInput({type, value, placeholder, required, onChange, error}) {
  return (
    <div>
      {type &&
      <input
          className={`w-full p-3 border rounded-md  ${error && 'border-red-500'}`}
          type = {type}
          value = {value}
          placeholder= {placeholder}
          required = {required}
          onChange = {onChange}
      />}

      {error && <div className="h-auto text-sm text-red-500">{error}</div>}
    </div>
  )
}

export function FormSubmitButton({linkTo, type, label, color, size}) {
    const buttonClass = `${color} ${size} w-full p-2 rounded-md text-white  font-medium text-center`;

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
