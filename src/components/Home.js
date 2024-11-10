import React, { useState } from 'react'
import Cart from './Cart'

import { products } from './product';
export default function Home() {

    let [item, setItem] = useState(products);

    return (
        <>
            <div className="container">

                <section className="banner">
                    <div className="image">
                        <div className="frame">
                            <div className="slider">
                                <img src="banner/trendnest-banner2.jpg.jpg" className="img" alt="picture" />
                                <img src="banner/trendnest-banner1.jpg.jpg" className="img" alt="picture" />

                                <img src="banner/trendnest-banner3.jpg.jpg" className="img" alt="picture" />
                            </div>
                        </div>
                    </div>

                    <h1 className="ctngs">Category's</h1>
                    <div className="hero-section">
                        <p>TreandNset</p>
                        <h1>Discover Deals You <br /> Can't Resist !</h1>
                        <p>Welcome to TreandNest, where style meets savings! Explore our handpicked collection of the latest
                            trends
                            and timeless classNameics, designed to elevate your wardrobe and home. Enjoy exclusive deals and
                            effortless
                            shopping. Dive in and discover what's waiting for you!</p>
                        <button>Explore <i className="bi bi-emoji-heart-eyes"></i></button>
                        <div className="hero-categorys" data-aos="fade-up" data-aos-anchor-placement="center-bottom">
                            <div className="cart">
                                <img src="product/t-shirt/solid-shirt1.jpg" alt="picture" />
                                <div className="info">
                                    <h4>Solid T-Shirt</h4>
                                    <span>Explore <i className="bi bi-arrow-right-short"></i></span>
                                </div>
                            </div>
                            <div className="cart">
                                <img src="product/shose/black-sneakers1.jpg" alt="picture" />
                                <div className="info">
                                    <h4>Black Shose</h4>
                                    <span>Explore <i className="bi bi-arrow-right-short"></i></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section >

                <section className="category">
                    <div className="products">
                        <div className="cart" data-aos="fade-up" data-aos-anchor-placement="center-bottom">
                            <div className="product">
                                <img src="product/shirt/check-shirt2.jpg" alt="picture" />
                                <div className="info">
                                    <h4 className="name">Check Shirt</h4>
                                    <div className="reveiw">Reveiw : <i className="bi bi-star-fill"></i>4.5</div>
                                </div>
                            </div>
                            <a >Explore <i className="bi bi-arrow-right-short"></i></a>
                        </div>
                        <div className="cart" data-aos="fade-up" data-aos-anchor-placement="center-bottom">
                            <div className="product">
                                <img src="product/shirt/gril-shirt.jpg" alt="picture" />
                                <div className="info">
                                    <h4 className="name">Girl's Shirt</h4>
                                    <div className="reveiw">Reveiw : <i className="bi bi-star-fill"></i>4.5</div>
                                </div>
                            </div>
                            <a >Explore <i className="bi bi-arrow-right-short"></i></a>
                        </div>
                        <div className="cart" data-aos="fade-up" data-aos-anchor-placement="center-bottom">
                            <div className="product">
                                <img src="product/shirt/jaket1.jpg" alt="picture" />
                                <div className="info">
                                    <h4 className="name">Jeens Jaket</h4>
                                    <div className="reveiw">Reveiw : <i className="bi bi-star-fill"></i>4.5</div>
                                </div>
                            </div>
                            <a >Explore <i className="bi bi-arrow-right-short"></i></a>
                        </div>
                        <div className="cart" data-aos="fade-up" data-aos-anchor-placement="center-bottom">
                            <div className="product">
                                <img src="product/shirt/scart2.jpg" alt="picture" />
                                <div className="info">
                                    <h4 className="name">Sueit Scart</h4>
                                    <div className="reveiw">Reveiw : <i className="bi bi-star-fill"></i>4.5</div>
                                </div>
                            </div>
                            <a >Explore <i className="bi bi-arrow-right-short"></i></a>
                        </div>
                        <div className="cart" data-aos="fade-up" data-aos-anchor-placement="center-bottom">
                            <div className="product">
                                <img src="product/shose/black-sneakers2.jpg" alt="picture" />
                                <div className="info">
                                    <h4 className="name">Black Shose</h4>
                                    <div className="reveiw">Reveiw : <i className="bi bi-star-fill"></i>4.5</div>
                                </div>
                            </div>
                            <a >Explore <i className="bi bi-arrow-right-short"></i></a>
                        </div>
                        <div className="cart" data-aos="fade-up" data-aos-anchor-placement="center-bottom">
                            <div className="product">
                                <img src="product/t-shirt/loss-shirt2.jpg" alt="picture" />
                                <div className="info">
                                    <h4 className="name">T- Shirt</h4>
                                    <div className="reveiw">Reveiw : <i className="bi bi-star-fill"></i>4.5</div>
                                </div>
                            </div>
                            <a >Explore <i className="bi bi-arrow-right-short"></i></a>
                        </div>
                        <div className="cart" data-aos="fade-up" data-aos-anchor-placement="center-bottom">
                            <div className="product">
                                <img src="product/t-shirt/long-slive1.jpg" alt="picture" />
                                <div className="info">
                                    <h4 className="name">Long Slive</h4>
                                    <div className="reveiw">Reveiw : <i className="bi bi-star-fill"></i>4.5</div>
                                </div>
                            </div>
                            <a >Explore <i className="bi bi-arrow-right-short"></i></a>
                        </div>
                        <div className="cart" data-aos="fade-up" data-aos-anchor-placement="center-bottom">
                            <div className="product">
                                <img src="product/shose/mix-sneakers2.jpg" alt="picture" />
                                <div className="info">
                                    <h4 className="name">Black Shose</h4>
                                    <div className="reveiw">Reveiw : <i className="bi bi-star-fill"></i>4.5</div>
                                </div>
                            </div>
                            <a >Explore <i className="bi bi-arrow-right-short"></i></a>
                        </div>
                        <div className="cart" data-aos="fade-up" data-aos-anchor-placement="center-bottom">
                            <div className="product">
                                <img src="product/shose/black-sneakers2.jpg" alt="picture" />
                                <div className="info">
                                    <h4 className="name">Black Shose</h4>
                                    <div className="reveiw">Reveiw : <i className="bi bi-star-fill"></i>4.5</div>
                                </div>
                            </div>
                            <a >Explore <i className="bi bi-arrow-right-short"></i></a>
                        </div>
                    </div>
                </section>


                <section className="mordern-cloth" id="mordern-cloth">
                    <div className="mordern-cloth-box">
                        <div className="info">
                            <h1>Mordern / Cloths</h1>
                            <div className="image" data-aos="fade-down-right">
                                <div className="image-box">
                                    <img src="product/shose/mix-sneakers2.jpg" alt="picture" />
                                    <span>Morder Shose</span>
                                </div>
                                <div className="image-box">
                                    <img src="product/t-shirt/solid-shirt2.jpg" alt="picture" />
                                    <span>T- Shirt</span>
                                </div>
                                <div className="image-box">
                                    <img src="product/shirt/gril-shirt4.jpg" alt="picture" />
                                    <span>Girls Shirt</span>
                                </div>


                            </div>
                            <h2 className="mordern-product-updated" data-aos="fade-right">As long as the products will <br /> be
                                updated<span></span></h2>
                            <div className="buttons" data-aos="fade-up-right">
                                <a >Export Now</a>
                                <a >Explore</a>
                            </div>
                        </div>
                        <div className="inner-box">
                            <div className="mordern-main-img">
                                <img className="main-img" src="product/shose/black-sneakers1.jpg" data-aos="fade-left" />
                            </div>
                            <div className="small-imgs">
                                <img className="small-img" src="product/shirt/jaket1.jpg" data-aos="fade-down-left" alt="picture" />
                                <img className="small-img" src="product/shirt/scart4.jpg" data-aos="fade-left" alt="picture" />
                                <img className="small-img" src="product/t-shirt/loss-shirt1.jpg" data-aos="fade-up-left" alt="picture" />
                            </div>
                        </div>
                    </div>
                </section>

                <section className="future" id="future">
                    <h1>Coming in the furure !</h1>
                    <div className="vachal">
                        <div className="icon" data-aos="fade-up-right">
                            <i className="bi bi-bicycle"></i>
                            <span>Cycle</span>
                        </div>
                        <div className="icon" data-aos="fade-up-right">
                            <i className="bi bi-globe2"></i>
                            <span>Global</span>
                        </div>
                        <div className="icon" data-aos="fade-up-left">
                            <i className="bi bi-truck"></i>
                            <span>Truck</span>
                        </div>
                        <div className="icon" data-aos="fade-up-left">
                            <i className="bi bi-car-front"></i>
                            <span>Car</span>
                        </div>
                    </div>

                    <div className="new-future">
                        <div className="cart" data-aos="fade-up">
                            <span>New</span>
                            <img src="product/shirt/check-shirt2.jpg" alt="picture" />
                            <h4>Check Shirt</h4>
                        </div>
                        <div className="cart" data-aos="fade-up">
                            <span>New</span>
                            <img src="product/shirt/gril-shirt.jpg" alt="picture" />
                            <h4>Girls Shirt</h4>
                        </div>
                        <div className="cart" data-aos="fade-up">
                            <span>New</span>
                            <img src="product/shirt/jaket3.jpg" alt="picture" />
                            <h4>Jeens Jaket</h4>
                        </div>
                        <div className="cart" data-aos="fade-up">
                            <span>New</span>
                            <img src="product/shirt/scart3.jpg" alt="picture" />
                            <h4>Grils Scart</h4>
                        </div>
                        <div className="cart" data-aos="fade-up">
                            <span>New</span>
                            <img src="product/shirt/scart4.jpg" alt="picture" />
                            <h4>Grils Scart</h4>
                        </div>
                        <div className="cart" data-aos="fade-up">
                            <span>New</span>
                            <img src="product/t-shirt/solid-polo3.jpg" alt="picture" />
                            <h4>Solid T-Shirt</h4>
                        </div>
                        <div className="cart" data-aos="fade-up">
                            <span>New</span>
                            <img src="product/t-shirt/long-slive4.jpg" alt="picture" />
                            <h4>Jeens Jaket</h4>
                        </div>
                    </div>
                </section>


                <section className="all-products" id="all-products">
                    <h1>All Produtcs</h1>
                    <div className="dinamic-product">
                        {
                            item.map((curItem) => {
                                return <Cart key={curItem.id} {...curItem} />;
                            })
                        }

                    </div>
                </section>


                <section className="footer">
                    <div className="head">
                        <div className="logo">
                            <h1>TrendNest</h1>
                            <div className="line"></div>
                            <span>shehab</span>
                        </div>
                        <ul>
                            <a >Home</a>
                            <a >Mordern / Cloth</a>
                            <a >Future</a>
                            <a >Man's</a>
                            <a >Woman's</a>
                            <a >Others</a>
                        </ul>
                    </div>
                    <div className="categorys">
                        <h3>Category's</h3>
                        <ul>
                            <li>Jeens</li>
                            <li>Jaket</li>
                            <li>T-Shirt</li>
                            <li>Shose</li>
                            <li>Black Shose</li>
                            <li>Full Slive Shirt</li>
                            <li>And T- Shirt</li>
                            <li>Woman's</li>
                            <li>Scart</li>
                            <li>Danim Jaket</li>
                            <li>White shose</li>
                        </ul>
                    </div>
                    <div className="social">
                        <h3>Social Link</h3>
                        <a >Facebook</a><a >Instagram</a><a >Twitter</a><a >Whatsapp</a><a
                        >Linkdin</a>
                    </div>
                    <div className="social-icon">
                        <div className="icon">
                            <i className="bi bi-facebook"></i>
                            <i className="bi bi-instagram"></i>
                            <i className="bi bi-twitter"></i>
                            <i className="bi bi-whatsapp"></i>
                            <i className="bi bi-linkedin"></i>
                        </div>
                        <div className="input-box">
                            <input type="text" placeholder="Enter your email" />
                            <button>Sumit</button>
                        </div>
                    </div>

                </section>


            </div>

            <section className="show-cart">
                <h1>My cart</h1>
            </section>
        </>
    )
}
