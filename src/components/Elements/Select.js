import React from "react";
import { useContext } from "react";
import { FormContext } from "../../FormContext";

const Select = ({ field_id, field_label, field_mandatory, field_options, field_value }) => {

    const { handleChange } = useContext(FormContext)

    return (
        <>
            <label htmlFor="exampleInputEmail1" className="form-label">{field_label}</label>
            <select className="form-select" aria-label="Default select example"
                onChange={(event) => handleChange(field_id, event)}>
                <option value={field_value}>Select any one option</option>
                {field_options.length > 0 && field_options.map((option, index) => {
                    return <option key={index} value={option.option_label}>{option.option_label}</option>
                })}
            </select>
        </>
    )
}

export default Select