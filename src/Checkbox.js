import React from "react"


export function Checkbox() {
    cont[checked, toggle] = useReducer(
        (checked) => !checked,
        false
    );
    return (
        <>
            <label htmlFor="checkbox">{checked ? "checked" : "not checked"}</label>
            <input
                id="checkbox"
                type="checkbox"
                value={checked}
                onChange={toggle}
            />
        </>
    );
}