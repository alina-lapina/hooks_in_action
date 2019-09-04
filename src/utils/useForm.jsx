import { useState } from 'react';

export const useForm = (callback) => {

    const [values, setValues] = useState({});

    const handleSubmit = (event) => {
        if (event) event.preventDefault();
        callback();
    };

    const handleChange = (event) => {
        //If you want to access the event properties in an asynchronous way,
        // you should call event.persist() on the event, which will remove the synthetic event
        // from the pool and allow references to the event to be retained by user code.
        // https://reactjs.org/docs/events.html
        event.persist();
        setValues(values => ({ ...values, [event.target.name]: event.target.value }));
    };

    return {
        handleChange,
        handleSubmit,
        values
    }
};