import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory, withRouter } from 'react-router';
import CartModal from '../Modal/CartModal';
import ContactUsModal from '../Modal/ContactUsModal';
import LoginModal from '../Modal/LoginModal';
import { cartActions } from '../store/cart-slice';
import { loginActions } from '../store/login-slice';

import './Header.css';

const Header = props => {
    const [loginModal, setLoginModal] = useState(false);
    const [contactUsModal, setContactUsModal] = useState(false);
    const [cartModal, setCartModal] = useState(false);
    const [title, setTitle] = useState('');

    const history = useHistory();

    const dispatch = useDispatch();
    const totalQuantity = useSelector(state => state.cart.totalQuantity);

    let buttonName = 'Login/Register';
    let screen = '';

    screen = props.screen;

    switch (screen) {
        case 'homePage':
            buttonName = 'Login/Register';
            break;
        case 'loggedInHomePage':
            buttonName = 'Logout';
            break;
        case 'checkoutWithoutIdToken':
            buttonName = 'Login/Register';
            break;
        case 'checkoutWithIdToken':
            buttonName = 'Logout';
            break;
        // case 'registration':
        //     buttonName = '';
        //     break;
        default:
            buttonName = 'Login/Register';
            break;
    }
    // if (screen === ('homePage' || 'checkoutWithoutIdToken')) {
    //     buttonName = 'Login/Register';
    //     console.log('here');
    // } else if (screen === ('loggedInHomePage' || 'checkoutWithIdToken')) {
    //     buttonName = 'Logout';
    //     console.log('logout');
    //     console.log(buttonName);
    // }

    const loginoutHandler = (event) => {
        // event.stopPropagation();
        if (buttonName === 'Login/Register') {
            setLoginModal(true);
            setTitle('Login/Register');
        } else {
            dispatch(loginActions.userLogout());
            dispatch(cartActions.emptyOutCart());
            history.push('/')
        }
    }

    const contactHandler = () => {
        setContactUsModal(true);
        setTitle('Contact Us');
    }
    const cartHandler = () => {
        setCartModal(true);
        setTitle('Cart');
    }

    const homePageHandler = () => {
        history.push('/')
    }
    return (
        <React.Fragment>
            {loginModal && <LoginModal title={title} />}
            {contactUsModal && <ContactUsModal title={title} />}
            {cartModal && <CartModal title={title} />}
            <div className="row">
                <div className='header'>
                    <section className="col-lg-8">
                        <h4 id='homePage' onClick={homePageHandler}>My BookStore</h4>
                    </section>
                    <section className="col-lg-4">
                        <div className='headerMisc'>
                            {buttonName === 'Login/Register' ? <button id='header' onClick={loginoutHandler} data-toggle="modal" data-target="#myModal">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-person" viewBox="0 0 20 09">
                                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                                </svg>
                                {buttonName}</button> : <button id='header' onClick={loginoutHandler}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-person" viewBox="0 0 20 09">
                                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                                </svg>
                                {buttonName}</button>}
                            <button id='header' onClick={contactHandler} data-toggle="modal" data-target="#contactUsModal" title='Contact Us'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-telephone" viewBox="0 0 20 12">
                                    <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                                </svg>
                                Contact Us</button>
                            {screen === 'homePage' || 'checkoutWithoutIdToken' ? <button id='header' onClick={cartHandler} data-toggle="modal" data-target="#cartModal"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-cart" viewBox="0 0 20 12">
                                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                            </svg>Cart {totalQuantity === 0 ? '' : totalQuantity}</button> : <p />}
                        </div>
                    </section>
                </div>
            </div >
        </React.Fragment >
    )
}

export default withRouter(Header);