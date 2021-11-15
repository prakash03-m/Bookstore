import React, { Fragment, useState } from 'react';
import RegistrationSuccess from '../Modal/RegistrationSuccess';
import RegistrationScreen from '../UI/RegistrationScreen';
import Wrapper from '../UI/Wrapper';

const Registration = props => {

    const [registrationStatus, setRegistrationStatus] = useState(false);

    async function registrationHandler(newUser) {
        // console.log(newUser);
        const user = {
            name: newUser.enteredName,
            emailId: newUser.enteredEmailId,
            password: newUser.enteredPassword,
            gender: newUser.enteredGender,
            streetLine1: newUser.enteredStreetLine1,
            streetLine2: newUser.enteredStreetLine2,
            streetLine3: newUser.enteredStreetLine3,
            pincode: newUser.enteredPincode,
            city: newUser.enteredCity,
            state: newUser.enteredState,
            country: newUser.enteredCountry
        }
        const response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBkkfkkF68KESp1p-nDjervaIvWrDC81fs', {
            method: 'POST',
            body: JSON.stringify({
                email: user.emailId,
                password: user.password,
                returnSecureToken: true
            }),
            headers: {
                'Content-Type': 'application/json',
            }
        })

        const data = await response.json();
        if (!data) {
            console.log('E/P Registration Failure');
        }
        else {
            // console.log('E/P Registration Successfull');
            userDataRegistration(user);
        }
    }
    async function userDataRegistration(user) {

        const response = await fetch('https://bookstore-4d9d0-default-rtdb.firebaseio.com/users.json', {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const data = await response.json();
        if (!data) {
            console.log('failure');
            setRegistrationStatus(false);

        } else {
            console.log(data);
            setRegistrationStatus(true);
        }
    }

    return (
        <Fragment>
            <Wrapper screen="registration">
                {registrationStatus && <RegistrationSuccess />}
                <RegistrationScreen onRegister={registrationHandler} />
            </Wrapper>
        </Fragment>
    )
}

export default Registration;