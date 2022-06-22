import React from 'react'
import Checkbox from './Elements/Checkbox'
import Input from './Elements/Input'
import Select from './Elements/Select'

const Element = ({ field: { field_type, field_id, field_label, field_mandatory, field_placeholder, field_value, field_options } }) => {

    switch (field_type) {
        case "text":
            return <Input field_id={field_id} field_label={field_label} field_mandatory={field_mandatory}
                field_placeholder={field_placeholder} field_value={field_value} />
        case "checkbox":
            return <Checkbox field_id={field_id} field_label={field_label} field_value={field_value} />
        case "select":
            return <Select field_id={field_id} field_label={field_label} field_mandatory={field_mandatory}
            field_options={field_options} field_value={field_value}/>
        default:
            { }
    }
}

export default Element