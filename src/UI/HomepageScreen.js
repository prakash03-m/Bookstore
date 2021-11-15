import React, { useEffect, useState } from 'react';
import Wrapper from './Wrapper';

import './HomepageScreen.css';
import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from '../store/cart-slice';
import { withRouter } from 'react-router';

const HomepageScreen = () => {

    const [userEmail, setUserEmail] = useState('');
    const [currentScreen, setCurrentScreen] = useState('homePage');

    const dispatch = useDispatch();
    const email = useSelector(state => state.login.email);

    useEffect(() => {
        setUserEmail(email);
        if (email?.includes('@')) {
            setCurrentScreen("loggedInHomePage");
        } else {
            setCurrentScreen("homePage")
        }
    }, [email]);

    const [bookDetails1, setBookDetails1] = useState({
        bookName: '',
        bookPrice: '',
        bookDescription: '',
    });

    const [bookDetails2, setBookDetails2] = useState({
        bookName: '',
        bookPrice: '',
        bookDescription: ''
    });

    const [bookDetails3, setBookDetails3] = useState({
        bookName: '',
        bookPrice: '',
        bookDescription: ''
    });

    const [bookDetails4, setBookDetails4] = useState({
        bookName: '',
        bookPrice: '',
        bookDescription: ''
    });

    const fetchBookHandler = () => {
        fetch('https://bookstore-4d9d0-default-rtdb.firebaseio.com/books.json').then((res) => {
            return res.json();
        }).then(data => {
            const values = Object.values(data);
            values.forEach((curr, i) => {
                if (i === 0) {
                    setBookDetails1({
                        bookName: curr.name,
                        bookPrice: curr.price,
                        bookDescription: curr.description
                    })
                }
                if (i === 1) {
                    setBookDetails2({
                        bookName: curr.name,
                        bookPrice: curr.price,
                        bookDescription: curr.description
                    })
                }
                if (i === 2) {
                    setBookDetails3({
                        bookName: curr.name,
                        bookPrice: curr.price,
                        bookDescription: curr.description
                    })
                }
                if (i === 3) {
                    setBookDetails4({
                        bookName: curr.name,
                        bookPrice: curr.price,
                        bookDescription: curr.description
                    })
                }
            })
        })
    }

    useEffect(() => {
        fetchBookHandler();
    }, []);

    const bookDetailsHandler1 = () => {
        console.log('Detail', bookDetails1.bookName);
    }
    const bookDetailsHandler2 = () => {
        console.log('Detail');
    }
    const bookDetailsHandler3 = () => {
        console.log('Detail');
    }
    const bookDetailsHandler4 = () => {
        console.log('Detail');
    }

    const addCartHandler = (event, val) => {
        event.stopPropagation();
        dispatch(cartActions.addItemsToCart({
            name: val.bookName,
            price: val.bookPrice
        }
        ))

    }
    const removeCartHandler = (event, val) => {
        event.stopPropagation();
        dispatch(cartActions.removeItemsFromCart({
            name: val.bookName,
            price: val.bookPrice
        })
        )
    }

    return (
        <Wrapper screen={currentScreen}>
            <div>
                {email !== '' && <h3>Welcome {userEmail}</h3>}
                <p className='booksLabel'>New Releases</p>
                <div className='bookslist'>
                    <div className='book' onClick={bookDetailsHandler1}>
                        <p id='bookName'>{bookDetails1.bookName}</p>
                        <p>{bookDetails1.bookDescription}</p>
                        <p>{bookDetails1.bookPrice}</p>
                        <p className='cartIcon'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="46" height="20" fill="currentColor" className="bi bi-cart-plus" viewBox="1 0 16 16" onClick={(event) => { addCartHandler(event, bookDetails1) }}>
                                <path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9V5.5z" />
                                <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="46" height="20" fill="currentColor" className="bi bi-cart-dash" viewBox="0 0 16 16" onClick={(event) => { removeCartHandler(event, bookDetails1) }}>
                                <path d="M6.5 7a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4z" />
                                <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                            </svg>
                        </p>
                    </div>
                    <div className='book' onClick={bookDetailsHandler2}>
                        <p id='bookName'>{bookDetails2.bookName}</p>
                        <p>{bookDetails2.bookDescription}</p>
                        <p>{bookDetails2.bookPrice}</p>
                        <p className='cartIcon'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="46" height="20" fill="currentColor" className="bi bi-cart-plus" viewBox="1 0 16 16" onClick={(event) => { addCartHandler(event, bookDetails2) }}>
                                <path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9V5.5z" />
                                <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="46" height="20" fill="currentColor" className="bi bi-cart-dash" viewBox="0 0 16 16" onClick={(event) => { removeCartHandler(event, bookDetails2) }}>
                                <path d="M6.5 7a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4z" />
                                <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                            </svg>
                        </p>
                    </div>
                    <div className='book' onClick={bookDetailsHandler3}>
                        <p id='bookName'>{bookDetails3.bookName}</p>
                        <p>{bookDetails3.bookDescription}</p>
                        <p>{bookDetails3.bookPrice}</p>
                        <p className='cartIcon'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="46" height="20" fill="currentColor" className="bi bi-cart-plus" viewBox="1 0 16 16" onClick={(event) => { addCartHandler(event, bookDetails3) }}>
                                <path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9V5.5z" />
                                <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="46" height="20" fill="currentColor" className="bi bi-cart-dash" viewBox="0 0 16 16" onClick={(event) => { removeCartHandler(event, bookDetails3) }}>
                                <path d="M6.5 7a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4z" />
                                <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                            </svg>
                        </p>
                    </div>
                    <div className='book' onClick={bookDetailsHandler4}>
                        <p id='bookName'>{bookDetails4.bookName}</p>
                        <p>{bookDetails4.bookDescription}</p>
                        <p>{bookDetails4.bookPrice}</p>
                        <p className='cartIcon'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="46" height="20" fill="currentColor" className="bi bi-cart-plus" viewBox="1 0 16 16" onClick={(event) => { addCartHandler(event, bookDetails4) }}>
                                <path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9V5.5z" />
                                <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="46" height="20" fill="currentColor" className="bi bi-cart-dash" viewBox="0 0 16 16" onClick={(event) => { removeCartHandler(event, bookDetails4) }}>
                                <path d="M6.5 7a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4z" />
                                <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                            </svg>
                        </p>
                    </div>
                </div>
            </div>
            <div>
                <p className='booksLabel'>Chart Toppers</p>
                <div className='bookslist'>
                    <div className='book'>
                        <p id='bookName'>{bookDetails1.bookName}</p>
                        <p>{bookDetails1.bookDescription}</p>
                        <p>{bookDetails1.bookPrice}</p>
                        <p className='cartIcon'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="46" height="20" fill="currentColor" className="bi bi-cart-plus" viewBox="1 0 16 16" onClick={(event) => { addCartHandler(event, bookDetails1) }}>
                                <path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9V5.5z" />
                                <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="46" height="20" fill="currentColor" className="bi bi-cart-dash" viewBox="0 0 16 16" onClick={(event) => { removeCartHandler(event, bookDetails1) }}>
                                <path d="M6.5 7a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4z" />
                                <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                            </svg>
                        </p>
                    </div>
                    <div className='book'>
                        <p id='bookName'>{bookDetails4.bookName}</p>
                        <p>{bookDetails4.bookDescription}</p>
                        <p>{bookDetails4.bookPrice}</p>
                        <p className='cartIcon'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="46" height="20" fill="currentColor" className="bi bi-cart-plus" viewBox="1 0 16 16" onClick={(event) => { addCartHandler(event, bookDetails4) }}>
                                <path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9V5.5z" />
                                <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="46" height="20" fill="currentColor" className="bi bi-cart-dash" viewBox="0 0 16 16" onClick={(event) => { removeCartHandler(event, bookDetails4) }}>
                                <path d="M6.5 7a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4z" />
                                <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                            </svg>
                        </p>
                    </div>
                </div>
            </div>
            <div>
                <p className='booksLabel'>On Discount</p>
                <div className='bookslist'>
                    <div className='book'>
                        <p id='bookName'>{bookDetails2.bookName}</p>
                        <p>{bookDetails2.bookDescription}</p>
                        <p>{bookDetails2.bookPrice}</p>
                        <p className='cartIcon'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="46" height="20" fill="currentColor" className="bi bi-cart-plus" viewBox="1 0 16 16" onClick={(event) => { addCartHandler(event, bookDetails2) }}>
                                <path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9V5.5z" />
                                <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="46" height="20" fill="currentColor" className="bi bi-cart-dash" viewBox="0 0 16 16" onClick={(event) => { removeCartHandler(event, bookDetails2) }}>
                                <path d="M6.5 7a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4z" />
                                <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                            </svg>
                        </p>
                    </div>
                    <div className='book'>
                        <p id='bookName'>{bookDetails3.bookName}</p>
                        <p>{bookDetails3.bookDescription}</p>
                        <p>{bookDetails3.bookPrice}</p>
                        <p className='cartIcon'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="46" height="20" fill="currentColor" className="bi bi-cart-plus" viewBox="1 0 16 16" onClick={(event) => { addCartHandler(event, bookDetails3) }}>
                                <path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9V5.5z" />
                                <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="46" height="20" fill="currentColor" className="bi bi-cart-dash" viewBox="0 0 16 16" onClick={(event) => { removeCartHandler(event, bookDetails3) }}>
                                <path d="M6.5 7a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4z" />
                                <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                            </svg>
                        </p>
                    </div>
                    <div className='book'>
                        <p id='bookName'>{bookDetails4.bookName}</p>
                        <p>{bookDetails4.bookDescription}</p>
                        <p>{bookDetails4.bookPrice}</p>
                        <p className='cartIcon'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="46" height="20" fill="currentColor" className="bi bi-cart-plus" viewBox="1 0 16 16" onClick={(event) => { addCartHandler(event, bookDetails4) }}>
                                <path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9V5.5z" />
                                <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="46" height="20" fill="currentColor" className="bi bi-cart-dash" viewBox="0 0 16 16" onClick={(event) => { removeCartHandler(event, bookDetails4) }}>
                                <path d="M6.5 7a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4z" />
                                <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                            </svg>
                        </p>
                    </div>
                </div>
            </div>
            <div>
                <p className='booksLabel'>Yet to arrive</p>
            </div>
        </Wrapper>
    )
}

export default withRouter(HomepageScreen);

        // fetch('https://bookstore-4d9d0-default-rtdb.firebaseio.com/books.json').then((res) => {
        //     if (res.ok) {
        //         return res.json();
        //     } else {
        //         return res.json().then(data => {
        //             console.log(data);
        //             let errorMessage = 'Authentication failed';
        //             if (data && data.error && data.error.message) {
        //                 errorMessage = data.error.message;
        //             }
        //             throw new Error(errorMessage);
        //         })
        //     }
        // }).then(data => {
        //     console.log(data);
        // }).catch(err => {
        //     alert(err.message)
        // })