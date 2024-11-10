import React from 'react'

export default function Navbar() {
    return (
        <>
            <div className="header">
                <div className="head">
                    <div className="logo">
                        <h1>TrendNest</h1>
                        <div className="line"></div>
                        <span>shehab</span>
                    </div>
                    <div className="search-bar">
                        <input type="text" placeholder="Search" />
                        <i className="bi bi-search"></i>
                        <button>Search</button>
                    </div>
                    <div className="profile">
                        <div className="prof">
                            <i className="bi bi-person"></i>
                            <span>Sign Up</span>
                        </div>
                        <div className="cart">
                            <i className="bi bi-cart3"></i>
                            <span>0 Item</span>
                        </div>
                    </div>
                </div>
                <div className="head-2">
                    <nav>
                        <a href="/">Home</a>
                        <a href="/mordern-cloth">Mordern / Cloth</a>
                        <a href="/future">Futures</a>
                        <a href="/all-products">Man's</a>
                        <a href="/all-products">Woman's</a>
                        <a href="/">Offer's</a>
                    </nav>
                </div>
            </div>

            <div className="header-2">
                <div className="logo">TrendNest</div>
                <div className="search-bar">
                    {/* <input type="text" placeholder='Search' /> */}
                    <button><i class="bi bi-three-dots-vertical"></i></button>
                </div>
            </div>
            <div className="navbar-mobile">
                <i class="bi bi-house-door"></i>
                <i class="bi bi-search"></i>
                <i class="bi bi-cart3"></i>
                <i class="bi bi-bell"></i>
                <i class="bi bi-person"></i>

            </div>
        </>
    )
}
