import React from 'react';
import '../css/pages.css';

export default function SubsetForm(props) {
    return (
        <div className="page">
            <h1>SubsetForm {props.match.params.id}</h1>
            <p>{JSON.stringify(props)}</p>
        </div>
    );
}