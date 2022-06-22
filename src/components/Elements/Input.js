import React from "react";
import { useContext } from "react";
import { FormContext } from "../../FormContext";

const Input = ({ field_id, field_label, field_mandatory,
    field_placeholder, field_value }) => {

    const { handleChange } = useContext(FormContext)
    // handleChange()

    return (
        <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">{field_label}</label>
            <input type="text" className="form-control" id={field_id} value={field_value}
                placeholder={field_placeholder ? field_placeholder : ''}
                aria-describedby="emailHelp" onChange={(event) => handleChange(field_id, event)} />
            {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
        </div>
    )
}

export default Input