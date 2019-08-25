import React from 'react';
import '../css/pages.css';

export default function ClassificationPage({match}) {
    return (
        <div className="page">
            <h1>Classification {match.params.id}</h1>
        </div>
    );
}