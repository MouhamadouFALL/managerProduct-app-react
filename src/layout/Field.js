import React from 'react';

const Field = ({name, label, value, onChange, placeholder, type="text"}) => {
    return (
        <div className="mb-3">
            <label htmlfor={name} className="form-label">{label}</label>
            <input type={type} name={name} value={value} onChange={onChange} className="form-control" placeholder={placeholder} />
        </div>
    );
}

export default Field;
