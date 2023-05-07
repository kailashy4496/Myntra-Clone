import React, { useState } from 'react';
import './AllBrand.css';

function AllBrand() {

    const [allBrand, setAllBrand] = useState([
        {
            url: 'https://sc04.alicdn.com/kf/H7d5d27a20efe42828e6d11aeb6cc1b9ba.jpg',
            brandURL: 'https://assets.stickpng.com/images/5a1ac8faf65d84088faf1378.png',
            sale: 'Up To 50% off'
        },
        {
            url: 'https://static.nike.com/a/images/w_960,c_limit/b6dd5497-df06-43d1-9211-8174996a6f45/running-shoe-finder-dual-gender.jpg',
            brandURL: 'https://sourcingjournal.com/wp-content/uploads/2018/03/Nike_Swoosh_Logo_Black_original.jpg',
            sale: 'Up To 55% off'
        },
        {
            url: 'https://resources.mandmdirect.com/Images/_default/p/u/3/pu31096_1_cloudzoom.jpg',
            brandURL: 'https://www.pngmart.com/files/22/Puma-Logo-PNG-HD.png',
            sale: 'Up To 50% off'
        },
        {
            url: 'https://cms-static.asics.com/media-libraries/128/file.mobile_banner.jpg?1543980980',
            brandURL: 'https://sourcingjournal.com/wp-content/uploads/2018/03/Nike_Swoosh_Logo_Black_original.jpg',
            sale: 'Up To 55% off'
        },
        {
            url: 'https://sc04.alicdn.com/kf/H7d5d27a20efe42828e6d11aeb6cc1b9ba.jpg',
            brandURL: 'https://assets.stickpng.com/images/5a1ac8faf65d84088faf1378.png',
            sale: 'Up To 50% off'
        },
        {
            url: 'https://cms-static.asics.com/media-libraries/128/file.mobile_banner.jpg?1543980980',
            brandURL: 'https://sourcingjournal.com/wp-content/uploads/2018/03/Nike_Swoosh_Logo_Black_original.jpg',
            sale: 'Up To 55% off'
        },
        {
            url: 'https://sc04.alicdn.com/kf/H7d5d27a20efe42828e6d11aeb6cc1b9ba.jpg',
            brandURL: 'https://assets.stickpng.com/images/5a1ac8faf65d84088faf1378.png',
            sale: 'Up To 50% off'
        },
        {
            url: 'https://cms-static.asics.com/media-libraries/128/file.mobile_banner.jpg?1543980980',
            brandURL: 'https://sourcingjournal.com/wp-content/uploads/2018/03/Nike_Swoosh_Logo_Black_original.jpg',
            sale: 'Up To 55% off'
        }
    ])
    return (
        <div className='top-deals'>
            <div className='brand-logo'>
                <h1>DEALS ON TOP BRANDS</h1>
            </div>
            {
                allBrand.map((brandItem, brandIndex) => {
                    return (
                        <div className='topBrand-Items' style={{ width: '12%' }}>
                            <div className='brandURL'>
                                <img src={brandItem.url} width='100%' />
                                <img src={brandItem.brandURL} width='50%' />
                            </div>
                            <p>{brandItem.sale}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default AllBrand;
