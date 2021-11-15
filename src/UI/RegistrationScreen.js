import React, { Fragment, useState } from 'react';
import { withRouter } from 'react-router-dom';

import './RegistrationScreen.css';

const RegistrationScreen = props => {


    const [userInput, setUserInput] = useState({
        enteredName: '',
        enteredEmailId: '',
        enteredPassword: '',
        enteredGender: '',
        enteredStreetLine1: '',
        enteredStreetLine2: '',
        enteredStreetLine3: '',
        enteredPincode: '',
        enteredCity: '',
        enteredState: '',
        enteredCountry: ''
    })

    const nameChangeHandler = event => {
        setUserInput((prevState) => {
            return {
                ...prevState,
                enteredName: event.target.value
            }
        })
    }

    const emailChangeHandler = event => {
        setUserInput((prevState) => {
            return {
                ...prevState,
                enteredEmailId: event.target.value
            }
        })
    }
    const passwordChangeHandler = event => {
        setUserInput((prevState) => {
            return {
                ...prevState,
                enteredPassword: event.target.value
            }
        })
    }

    const genderChangeHandler = event => {
        setUserInput((prevState) => {
            return {
                ...prevState,
                enteredGender: event.target.value
            }
        })
    }

    const streetLine1ChangeHandler = event => {
        setUserInput((prevState) => {
            return {
                ...prevState,
                enteredStreetLine1: event.target.value
            }
        })
    }

    const streetLine2ChangeHandler = event => {
        setUserInput((prevState) => {
            return {
                ...prevState,
                enteredStreetLine2: event.target.value
            }
        })
    }
    const streetLine3ChangeHandler = event => {
        setUserInput((prevState) => {
            return {
                ...prevState,
                enteredStreetLine3: event.target.value
            }
        })
    }
    const pincodeChangeHandler = event => {
        setUserInput((prevState) => {
            return {
                ...prevState,
                enteredPincode: event.target.value
            }
        })
    }
    const cityChangeHandler = event => {
        setUserInput((prevState) => {
            return {
                ...prevState,
                enteredCity: event.target.value
            }
        })
    }
    const stateChangeHandler = event => {
        setUserInput((prevState) => {
            return {
                ...prevState,
                enteredState: event.target.value
            }
        })
    }
    const countryChangeHandler = event => {
        setUserInput((prevState) => {
            return {
                ...prevState,
                enteredCountry: event.target.value
            }
        })
    }

    const registrationHandler = (event) => {
        event.preventDefault();
        props.onRegister(userInput);
    }

    return (
        <Fragment>
            <div className="registration">
                {/* {registrationStatus && <RegistrationSuccess />} */}
                <form onSubmit={registrationHandler}>
                    <label htmlFor='name'>Customer's Name</label>
                    <input type='text' id='name' placeholder="Enter your Name" onChange={nameChangeHandler} />
                    <label htmlFor='email'>Email id</label>
                    <input type='email' id='email' placeholder="Enter your Email" onChange={emailChangeHandler} />
                    <label htmlFor='password'>Password</label>
                    <input type='password' id='password' placeholder="Password" onChange={passwordChangeHandler} />
                    <label htmlFor='gender'>Gender</label>
                    <select name='Gender' id='gender' onChange={genderChangeHandler}>
                        <option value='gender' disabled selected>Gender</option>
                        <option value='Male'>Male</option>
                        <option value='Female'>Female</option>
                    </select>
                    <label htmlFor='streetLine1' id='streetLine1'>Address</label>
                    <input type='text' id='streetLine1' placeholder='Street Line 1' onChange={streetLine1ChangeHandler} />
                    <label htmlFor='streetLine2' id='streetLine2'>Address</label>
                    <input type='text' id='streetLine2' placeholder='Street Line 2' onChange={streetLine2ChangeHandler} />
                    <label htmlFor='streetLine3' id='streetLine3'>Address</label>
                    <input type='text' id='streetLine3' placeholder='Street Line 3' onChange={streetLine3ChangeHandler} />
                    <label htmlFor='pincode' id='pincode'>Pincode</label>
                    <input type='text' id='pincode' placeholder='Pincode' onChange={pincodeChangeHandler} />
                    <label htmlFor='city' id='city'>City</label>
                    <input type='text' id='city' placeholder='City' onChange={cityChangeHandler} />
                    <label htmlFor='state' id='state'>State</label>
                    <input type='text' id='state' placeholder='State' onChange={stateChangeHandler} />
                    <label htmlFor='country' id='country'>Country</label>
                    <input type='text' id='country' placeholder='Country' onChange={countryChangeHandler} />
                    <button type='submit' className="registrationBtn" data-toggle="modal" data-target="#regSuccess">Register</button>
                    <button className="cancel">Cancel</button>
                </form>
            </div>
        </Fragment>
    )
}

export default withRouter(RegistrationScreen);