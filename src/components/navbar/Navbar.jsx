import React from 'react'
import './Navbar.scss';

const Navbar = () => {
    return (
        <div className='navbar'>
            {/* sidebar */}
            <div className='wrapper'>
                <span>Ansari Sadaan</span>
                <div className='social'>
                    <a href=""><img src="/linkedin.png" alt="" /></a>
                    <a href=""><img src="/instagram.png" alt="" /></a>
                    <a href=""><img src="/github.png" alt="" /></a>
                </div>
            </div>
        </div>
    )
}

export default Navbar