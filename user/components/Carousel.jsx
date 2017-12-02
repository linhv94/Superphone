import React from 'react';

export const Carousel = (props) => {
    return (
        <div id='myCarousel' className='carousel slide' data-ride='carousel'>
            <ol className='carousel-indicators'>
                <li data-target='#myCarousel' data-slide-to="0" className='active'></li>
                <li data-target='#myCarousel' data-slide-to="1"></li>
                <li data-target='#myCarousel' data-slide-to="2"></li>
            </ol>

            <div className='carousel-inner' role='listbox'>
                <div className='carousel-item'>
                    <img className='d-block img-fluid'
                        src='https://mobile.woolworths.com.au/content/dam/Woolworths/Mobile/Landing%20Page/samsung-s8-12gb-offer-banner_2100x750.jpg'
                        alt='Samsung S8' />
                </div>
                <div className='carousel-item active'>
                    <img className='d-block img-fluid'
                        src='http://static4.businessinsider.com/image/59b928acba785e51cc002979-2400/screen%20shot%202017-09-13%20at%2011123%20pm.png'
                        alt="Iphone X" />
                </div>

                <div className='carousel-item'>
                    <img className='d-block img-fluid'
                        src='https://dgosxlrnzhofi.cloudfront.net/blogs/271/featured_images/watchkit-workshop-start-designing-apps-for-the-apple-watch.png'
                        alt='Macbook Pro' />
                </div>
            </div>

            <a className='carousel-control-prev' href='#myCarousel' role='button' data-slide='prev'>
                <span className='carousel-control-prev-icon'></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className='carousel-control-next' href="#myCarousel" data-slide="next">
                <span className='carousel-control-next-icon'></span>
                <span className='sr-only'>Next</span>
            </a>
        </div>
    )
}