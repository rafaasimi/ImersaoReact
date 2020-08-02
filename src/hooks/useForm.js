import {useState} from 'react';

function useForm(valoresIniciais){
  const [values, setValues] = useState(valoresIniciais);
  
  function setValue(chave, value) {
    setValues({
      ...values,
      [chave]: value,
    })
  }
  
  function handleChange(e) {
    setValue(
      e.target.getAttribute('name'),
      e.target.value)
  }

  function clearForm(){
    setValues(valoresIniciais);
  }

  return {
    values,
    handleChange,
    clearForm
  }
}

export default useForm;