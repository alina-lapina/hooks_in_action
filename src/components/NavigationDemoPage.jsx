import React, {useState} from 'react';
import '../css/pages.css';

export default function NavigationDemoPage() {

    return (
        <div className="page">
            <h1>Navigation</h1>
            <Navigation>
                <Step><p>Step 1</p></Step>
                <Step><p>Step 2</p></Step>
                <Step><p>Step 3</p></Step>
            </Navigation>
        </div>
    )
}

export function Navigation({children}) {
    const [step, setStep] = useState(0);

    return (<>
            <ProgressBar steps={children} handleClick={setStep} />
            <div>{children[step]}</div>
            <p>Previous - next</p>
        </>
    )
}

export const Step = ({children}) => {
    return (<div className="Step">{children}</div>)
};

export const ProgressBar = ({steps, handleClick}) => {

    return (
        <>
            {steps.map((step, index) => (
                <button key={index}
                        onClick={ () => handleClick(index) }
                >{index+1}</button>
            ))}
        </>
    )
};