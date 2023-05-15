import React from 'react';
import './multi-step-form.css'

const steps = [
    {
        number: '1',
        step: 'step 1',
        text: 'your info',
        id: 'first-step'
    },
    {
        number: '2',
        step: 'step 2',
        text: 'select plan',
        id: 'second-step'
    },
    {
        number: '3',
        step: 'step 3',
        text: 'add-ons'
    },
    {
        number: '4',
        step: 'step 4',
        text: 'summary'
    }
]

const step1content = [
    {
        title: 'Personal info',
        text: 'Please provide your name, email address, and phone number.'
    },
    {
        title: 'Next Step'
    },
    {
        title: 'This field is not correctly filled'
    }
]

const inputs = [
    {
        title: 'Name',
        placeholder: 'e.g. Stephen King',
        id: 'step1-name-input'
    },
    {
        title: 'Email Address',
        placeholder: 'e.g. stephenking@lorem.com',
        id: 'step1-email-input'
    },
    {
        title: 'Phone number',
        placeholder: 'e.g. + 1 234 567 890',
        id: 'step1-phone-input'
    }
]

const MultiStepForm = () => {

    const [emailValue, setEmailValue] = React.useState('');

    const [nameValue, setNameValue] = React.useState('');

    const [numberValue, setNumberValue] = React.useState('');

    const updateNameValue = (event) => {
        setNameValue(event.target.value);
    };

    const handleSearchInput = (event) => {
        setEmailValue(event.target.value);
    };

    const updateNumberValue = (event) => {
        setNumberValue(event.target.value);
    };

    const [stepOneDisplay, setStepOneDisplay] = React.useState();
    const [isValidNameCheck, setIsValidNameCheck] = React.useState();
    const [isValidEmailCheck, setIsValidEmailCheck] = React.useState();
    const [isValidNumberCheck, setIsValidNumberCheck] = React.useState();

    const regName = new RegExp (/^[a-zA-Z]+ [a-zA-Z]+$/);
    const emailRegex = new RegExp(/^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/, "gm");
    const regNumber = new RegExp(/^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/);

    const isValidName = regName.test(nameValue)
    const isValidEmail = emailRegex.test(emailValue);
    const isValidNumber = regNumber.test(numberValue);

    const regex = () => {
        if (isValidName && isValidEmail && isValidNumber) {
            setStepOneDisplay(true);
        }
        
        if (isValidName === false) {
            setIsValidNameCheck(false);
        } else {
            setIsValidNameCheck(true);
        }

        if (isValidEmail === false) {
            setIsValidEmailCheck(false);
        } else {
            setIsValidEmailCheck(true);
        }

        if (isValidNumber === false) {
            setIsValidNumberCheck(false);
        } else {
            setIsValidNumberCheck(true);
        }

    }

    return (
        <div className="multi-step-form">
            <div className="sidebar">
                <ul>
                    {steps.map((step, index) => (
                        <li className="sidebar-steps" id={step.id} key={index}>
                            <div className="sidebar-step-number">
                                <p>{step.number}</p>
                            </div>
                            <div className="sidebar-step-text-container">
                                <p className="sidebar-step-text-step">{step.step}</p>
                                <p className="sidebar-step-text-text">{step.text}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
            <div className='step1-container' style={stepOneDisplay ? {display: 'none'} : {}}>
                <h6 className='step1-title'>{step1content[0].title}</h6>
                <p className='step1-text'>{step1content[0].text}</p>
                <div className='step1-inputs-container'>
                    <div className='step1-inputs'>
                        <p>{inputs[0].title}</p>
                        <p 
                        style={isValidNameCheck === false ? {marginLeft:'220px', position:'absolute', color:'hsl(354, 84%, 57%)'} : {display:'none'}}>
                        {step1content[2].title}
                        </p>
                        <input
                        style={isValidNameCheck === false ? {outline:'1px solid red'} : {outline:'none'}}
                        onChange={updateNameValue} 
                        placeholder={inputs[0].placeholder} 
                        className='email-input'
                        id={inputs[0].id} 
                        />
                    </div>
                    <div className='step1-inputs'>
                        <p>{inputs[1].title}</p>
                        <p 
                        style={isValidEmailCheck === false ? {marginLeft:'220px', position:'absolute', color:'hsl(354, 84%, 57%)'} : {display:'none'}}>
                        {step1content[2].title}
                        </p>
                        <input 
                        style={isValidEmailCheck === false ? {outline:'1px solid red'} : {outline:'none'}}
                        id={inputs[1].id} 
                        onChange={handleSearchInput} 
                        placeholder={inputs[1].placeholder} 
                        className='email-input' 
                        />
                    </div>
                    <div className='step1-inputs'>
                        <p>{inputs[2].title}</p>
                        <p 
                        style={isValidNumberCheck === false ? {marginLeft:'220px', position:'absolute', color:'hsl(354, 84%, 57%)'} : {display:'none'}}>
                        {step1content[2].title}
                        </p>
                        <input 
                        style={isValidNumberCheck === false ? {outline:'1px solid red'} : {outline:'none'}}
                        id={inputs[2].id} 
                        onChange={updateNumberValue} 
                        placeholder={inputs[2].placeholder} 
                        className='email-input' 
                        />
                    </div>


                    {/* {inputs.map((input, index) => (
                        <div className='step1-inputs' id={input.id} key={index}>
                            <p>{input.title}</p>
                            <input onChange={handleSearchInput} placeholder={input.placeholder} className='email-input' />
                        </div>
                    ))} */}
                </div>
                <button className='step1-btn' onClick={regex}>{step1content[1].title}</button>
            </div>
        </div>
    )
}

export default MultiStepForm;