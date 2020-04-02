import React from 'react'
import Header from './Header';
import Footer from './Footer';

import '../../styles/index.scss';
export default function Layout({children, title = 'ChainPayment', pathname}) {
    return (
        <div className="container-fluid">
            <Header></Header>
            {children}
            <Footer></Footer>
        </div>
    )
}
