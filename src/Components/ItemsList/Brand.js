import React, { useState } from 'react';
import "./Brand.css";


function Brand() {

    const [brand, setBrand] = useState([
        {
            url: 'https://www.jiomart.com/images/product/500x630/rvgtnulkr7/bersache-sports-shoes-for-men-latest-stylish-sports-shoes-for-men-lace-up-lightweight-white-shoes-for-running-walking-gym-trekking-and-hiking-shoes-for-men-product-images-rvgtnulkr7-0-202207131106.jpg',
            name: 'Shoes'
        },
        {
            url: 'https://rukminim1.flixcart.com/image/850/850/kjlrb0w0-0/watch/l/m/p/queen-dial-black-magnetic-belt-girls-analog-watch-maan-original-imafz4uzmxma9z9h.jpeg?q=90',
            name: 'Watch'
        },
        {
            url: 'https://5.imimg.com/data5/SELLER/Default/2022/11/FH/CG/IX/97646359/apple-macbook-laptop-500x500.jpg',
            name: 'Laptop'
        },
        {
            url: 'https://static.fibre2fashion.com/MemberResources/LeadResources/1/2021/7/Seller/21197859/Images/21197859_0_new-project-2021-07-29t161059-408.jpg',
            name: 'Ladies Jeans'
        },
        {
            url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLl1kfH0DRp_Y7eZ2GKmjkm1GZugFn0g-56s83wI5YkHv7Zq1aRZoMiJrhXmqYb4Ax97m7oLy7aoI&usqp=CAU&ec=48665701',
            name: 'Flip-Flop'
        },
        {
            url: 'https://i.pinimg.com/736x/9b/96/ea/9b96ea7a89441037f34bdf5f959e2684.jpg',
            name: 'Men Sandals'
        },
        {
            url: 'https://m.media-amazon.com/images/I/41MClLF68kL._UL1000_.jpg',
            name: 'Laptop-Bag'
        },
        {
            url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIIG1i8Bjb1lQEk65PAQNHacvWV2iGAh9OUFlq3TVXig&usqp=CAU&ec=48665701',
            name: 'Shirt'
        },
        {
            url: 'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/41ven52aeUL.jpg',
            name: 'T-Shirt'
        },
        {
            url: 'https://www.jiomart.com/images/product/500x630/rvgtnulkr7/bersache-sports-shoes-for-men-latest-stylish-sports-shoes-for-men-lace-up-lightweight-white-shoes-for-running-walking-gym-trekking-and-hiking-shoes-for-men-product-images-rvgtnulkr7-0-202207131106.jpg',
            name: 'Shoes'
        },
        {
            url: 'https://rukminim1.flixcart.com/image/850/850/kjlrb0w0-0/watch/l/m/p/queen-dial-black-magnetic-belt-girls-analog-watch-maan-original-imafz4uzmxma9z9h.jpeg?q=90',
            name: 'Watch'
        },
        {
            url: 'https://5.imimg.com/data5/SELLER/Default/2022/11/FH/CG/IX/97646359/apple-macbook-laptop-500x500.jpg',
            name: 'Laptop'
        },
        {
            url: 'https://static.fibre2fashion.com/MemberResources/LeadResources/1/2021/7/Seller/21197859/Images/21197859_0_new-project-2021-07-29t161059-408.jpg',
            name: 'Ladies Jeans'
        },
        {
            url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLl1kfH0DRp_Y7eZ2GKmjkm1GZugFn0g-56s83wI5YkHv7Zq1aRZoMiJrhXmqYb4Ax97m7oLy7aoI&usqp=CAU&ec=48665701',
            name: 'Flip-Flop'
        },
        {
            url: 'https://i.pinimg.com/736x/9b/96/ea/9b96ea7a89441037f34bdf5f959e2684.jpg',
            name: 'Men Sandals'
        },
        {
            url: 'https://m.media-amazon.com/images/I/41MClLF68kL._UL1000_.jpg',
            name: 'Laptop-Bag'
        },
        {
            url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIIG1i8Bjb1lQEk65PAQNHacvWV2iGAh9OUFlq3TVXig&usqp=CAU&ec=48665701',
            name: 'Shirt'
        },
        {
            url: 'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/41ven52aeUL.jpg',
            name: 'T-Shirt'
        }
    ])
    return (
        <div className='brand'>
            <div className='brand_level'>
                <img src='https://www.expert-seo-training-institute.in/blog/wp-content/uploads/2016/03/Branding.png' />
            </div>
            {
                brand.map((brandItem, brandIndex) => {
                    return (
                        <div className='new-brand' style={{ width: '11%' }}>
                            <div className='pro-quality'>
                                <img src={brandItem.url} width='100%' />
                            </div>
                            <p className='brand-name'>{brandItem.name}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Brand;