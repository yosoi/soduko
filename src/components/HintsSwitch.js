import Form from 'react-bootstrap/Form'
import React from 'react';

export default function HintsSwitch({onChange, useHints}) {
  return (
    <Form.Switch
      checked = {useHints}
      id = "hints-switch"
      label = "Hints"
      onChange = {onChange}/>
  );
}
