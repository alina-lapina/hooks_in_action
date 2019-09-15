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
            <PrevNext steps={children} handleClick={setStep} />
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

export const PrevNext = ({steps, handleClick}) => {

    const next = () => {
        handleClick((state) => (state+1));
    };

    const prev = () => {
        handleClick((state) => (state-1));
    };

    return (
        <>
           <button onClick={ prev }>Previous</button>
           <button onClick={ next }>Next</button>
        </>
    )
};