import React from 'react';
import { FormFieldBase, Input, TextArea, Label } from './styles';
import PropTypes from 'prop-types';

function FormField({ value, onChange, type, name, label, input, suggestions}){
  const fieldId = `id_${name}`;
  const hasSuggestions = Boolean(suggestions.length)

  return (
    <FormFieldBase>
        <Label id={fieldId}>
        
        {input 
          ? 
          <Input type={type} list={hasSuggestions ? `suggestion_${fieldId}` : undefined} autoComplete={hasSuggestions ? 'off' : 'on'} name={name} value={value} onChange={onChange} />
          : 
          <TextArea type={type} name={name} value={value} onChange={onChange} /> 
        }    

        <Label.Text>{label}</Label.Text>

        {hasSuggestions && (
          <datalist id={`suggestion_${fieldId}`}>
            {suggestions.map((suggestion) => (
              <option
                value={suggestion}
                key={`suggestion_${fieldId}_option${suggestion}`}
              >
                {suggestion}
              </option>
            ))}
          </datalist>
        )}
      </Label>
    </FormFieldBase>
  )
}

FormField.defaultProps = {
  type: 'text',
  value: '',
  onChange: () => {},
  suggestions: [],
}

FormField.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func,
  suggestions: PropTypes.arrayOf(PropTypes.string),
}

export default FormField
