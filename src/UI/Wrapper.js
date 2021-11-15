import React, { useEffect, useState } from 'react';
import Footer from './Footer';
import Header from './Header';
import HomepageCarousel from './HomepageCarousel';

const Wrapper = props => {

    const [currentScreen, setCurrentScreen] = useState(props);

    useEffect(() => {
        setCurrentScreen(props.screen);
    }, [props])

    return (
        <React.Fragment>
            <div className='container'>
                <Header screen={currentScreen} />
                {props.children}
                {(currentScreen === 'homePage' || currentScreen === 'loggedInHomePage') && <HomepageCarousel />}
                <Footer />
            </div>
        </React.Fragment >
    )
}

export default Wrapper;