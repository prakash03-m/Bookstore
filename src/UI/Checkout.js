import React from 'react';
import { useHistory, withRouter } from 'react-router';
import { useSelector } from 'react-redux';
import Wrapper from './Wrapper';

import './Checkout.css';

const Checkout = () => {
    const idToken = useSelector(state => state.login.idToken);
    const cartItems = useSelector(state => state.cart.items);
    const totalPrice = useSelector(state => state.cart.totalPrice);

    const history = useHistory();

    let screenType = '';
    if (idToken === '') {
        screenType = 'checkoutWithoutIdToken'
    } else {
        screenType = 'checkoutWithIdToken'
    }

    const buyClickHandler = () => {
    }

    const addItemsButton = () => {
        history.push('/');
    }
    return (
        <Wrapper screen={screenType}>
            {idToken && <div className='checkoutItems'>
                <h4>Checkout</h4>
                {
                    cartItems.map((curr) => (
                        <ul>
                            <li key={curr.name}>{curr.name} x {curr.quantity} = {curr.totalPrice}</li>
                        </ul>
                    ))
                }
                <p>TotalPrice:{totalPrice}</p>
                <button className='checkoutButton' onClick={buyClickHandler}>Proceed to buy</button>
                <hr />
                <div className='addItemsButton'>
                    <button onClick={addItemsButton}>Want to add more items</button>
                </div>
            </div>
            }
            {!idToken && <h4 id="checkouth4">User has to login</h4>}
        </Wrapper>
    )
}

export default withRouter(Checkout);