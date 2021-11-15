import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter, useHistory } from 'react-router-dom';
import { cartActions } from '../store/cart-slice';
import { nanoid } from 'nanoid'
import './CartModal.css';

const CartModal = props => {
    const cartItems = useSelector(state => state.cart.items);
    const totalPrice = useSelector(state => state.cart.totalPrice);

    const dispatch = useDispatch();
    const history = useHistory();
    let disp = 'Add items to cart';

    // console.log(cartItems);
    // console.log(totalPrice);
    // cartItems.map(item => {
    //     console.log(item.name, item.price, item.quantity);
    // });

    const addCartHandler = (event, val) => {
        event.stopPropagation();
        // console.log('AddCart', val);
        dispatch(cartActions.addItemsToCart({
            name: val.name,
            price: val.price
        }
        ))

    }
    const removeCartHandler = (event, val) => {
        event.stopPropagation();
        // console.log('RemoveCart', val);
        dispatch(cartActions.removeItemsFromCart({
            name: val.name,
            price: val.price
        }))
    }

    const cartButtonClickHandler = () => {
        if (disp !== 'Add items to cart') {
            history.push('/checkout');
        }
    }

    if (totalPrice) {
        disp = 'Checkout Rs.' + totalPrice;
    }

    return (
        <div className="modal fade" id="cartModal" role="dialog">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                        <h4 className="modal-title">{props.title}</h4>
                    </div>
                    <div className="modal-body">
                        {
                            cartItems.map((item) => (
                                <ul>
                                    <li key={nanoid()}>{item.name} x{item.quantity} {item.price}</li>
                                    <p><svg xmlns="http://www.w3.org/2000/svg" width="46" height="20" fill="currentColor" className="bi bi-cart-plus" viewBox="1 0 16 16" onClick={(event) => { addCartHandler(event, item) }}>
                                        <path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9V5.5z" />
                                        <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                                    </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="46" height="20" fill="currentColor" className="bi bi-cart-dash" viewBox="0 0 16 16" onClick={(event) => { removeCartHandler(event, item) }}>
                                            <path d="M6.5 7a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4z" />
                                            <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                                        </svg></p>
                                </ul>
                            ))
                        }
                    </div>

                    <div className="modal-footer">
                        <button className="cartbutton" id="cartButton" data-dismiss="modal" onClick={cartButtonClickHandler}>{disp}</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default withRouter(CartModal);