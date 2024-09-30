
function FormInput({type, value, placeholder, required, onChange, error}) {
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

export default FormInput;