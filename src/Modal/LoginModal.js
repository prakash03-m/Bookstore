import React, { useState } from 'react';
import { useHistory, withRouter } from 'react-router';
import { useDispatch } from 'react-redux';

import './LoginModal.css';
import { loginActions } from '../store/login-slice';

const LoginModal = props => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [inputType, setInputType] = useState('password');

    const dispatch = useDispatch();

    const history = useHistory();

    const emailChangeHandler = event => {
        setEmail(event.target.value);
    }

    const passwordHandler = event => {
        setPassword(event.target.value);
    }

    const passwordDisplayHandler = () => {
        inputType === 'password' ? setInputType('text') : setInputType('password')
    }

    async function loginHandler() {
        const response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBkkfkkF68KESp1p-nDjervaIvWrDC81fs', {
            method: 'POST',
            body: JSON.stringify({
                email,
                password,
                returnSecureToken: true
            }),
            headers: {
                'Content-Type': 'application/json',
            }
        });

        const data = await response.json();
        if (!data) {
            console.log('Login Failure');
        } else {
            dispatch(loginActions.userLogin({ email: data.email, token: data.idToken }))
            history.push('/');
        }
    }

    const registrationHandler = () => {
        history.push('/registration');
    }

    return (
        <div className="modal fade" id="myModal" role="dialog">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                        <h4 className="modal-title">{props.title}</h4>
                    </div>
                    <div className="modal-body">
                        <form>
                            <div id='loginModalEmail'>
                                <label htmlFor='loginEmail'>Email </label>
                                <input type='text' id='loginEmail' placeholder='Enter Email' onChange={emailChangeHandler}></input>
                            </div>
                            <div>
                                <label htmlFor='loginPwd'>Password </label>
                                <input type={inputType} id='loginPwd' placeholder='Enter Password' onChange={passwordHandler}></input>
                            </div>
                            <input type="checkbox" id="displaypwd" onClick={passwordDisplayHandler} />
                            <label id="displayPassword" htmlFor="displaypwd">Show password</label><br></br>
                            <button id='loginModalButton' type="button" data-dismiss="modal" onClick={loginHandler}>Login</button>
                            <button id='loginModalButton' type="button" data-dismiss="modal" onClick={props.onConfirm}>Cancel</button>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <div className='loginModalFooter'>
                            <p>Not a registered User? Sign up here.. </p>
                            <button onClick={registrationHandler} data-dismiss="modal"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-person-plus" viewBox="0 0 20 09">
                                <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H1s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C9.516 10.68 8.289 10 6 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                                <path fill-rule="evenodd" d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z" />
                            </svg>Sign up</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default withRouter(LoginModal);