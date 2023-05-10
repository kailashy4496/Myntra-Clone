import React, { useState } from 'react';
import './AllBrand.css';

function AllBrand() {

    const [allBrand, setAllBrand] = useState([
        {
            url: 'https://sc04.alicdn.com/kf/H7d5d27a20efe42828e6d11aeb6cc1b9ba.jpg',
            brandURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCplEsM21yq1jG3RRLBi6nVkU70PkTjyo-xQ9giTZKFw&usqp=CAU&ec=48665701',
            sale: '40-50% off'
        },
        {
            url: 'https://static.nike.com/a/images/w_960,c_limit/b6dd5497-df06-43d1-9211-8174996a6f45/running-shoe-finder-dual-gender.jpg',
            brandURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Logo_NIKE.svg/1200px-Logo_NIKE.svg.png',
            sale: '30-55% off'
        },
        {
            url: 'https://resources.mandmdirect.com/Images/_default/p/u/3/pu31096_1_cloudzoom.jpg',
            brandURL: 'https://1000logos.net/wp-content/uploads/2017/05/PUMA-logo.jpg',
            sale: '40-70% off'
        },
        {
            url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJpo1QeY-uRLBbVO-IoOL2tFSahm-oyMn-laoq7Y1kxGZ8lRPwuSM3IJ4xa_2FQ7ZN-CbLAoGcB-I&usqp=CAU&ec=48665701',
            brandURL: 'https://image3.mouthshut.com/images/imagesp/926013345s.png',
            sale: '50-70% off'
        },
        {
            url: 'https://www.jiomart.com/images/product/500x630/rvt9hsuzx9/1-stop-fashion-women-s-crepe-maroon-color-bandhani-printed-straight-kurti-product-images-rvt9hsuzx9-0-202206291606.jpg',
            brandURL: 'https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco,dpr_1/v1466758345/dkv2hhp1lwnyvlgelnde.png',
            sale: '40-60% off'
        },
        {
            url: 'https://www.mega.lt/uploads/media/default/0001/05/db6c8225356284f45fd8949ac8ae54f39d54e7bb.jpeg',
            brandURL: 'https://cdn.shopify.com/s/files/1/0557/9856/3011/files/uspolologoxsito_3ebe229c-aa3c-4ac2-a6b4-4f16d940cc4e.png?v=1628755706',
            sale: '45-55% off'
        },
        {
            url: 'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/61r6luy3HVL._UX569_.jpg',
            brandURL: 'https://1000logos.net/wp-content/uploads/2022/08/Tommy-Hilfiger-logo.jpg',
            sale: 'Min 50% off'
        },
        {
            url: 'https://www.deccanherald.com/sites/dh/files/styles/article_detail/public/article_images/2018/06/11/whitesneakersoutfitideas8.jpg?itok=WrglqDAR',
            brandURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTviF6sCm5qlPl33JZRArlx1H7uE-ezsVHepMTMjTe6Pg&usqp=CAU&ec=48665701',
            sale: '30-60% off'
        },
        {
            url:'https://images-stylist.s3-eu-west-1.amazonaws.com/app/uploads/2023/03/12144259/434721-mf-mid_denim-crop-1681307066-750x750.jpg',
            brandURL:'https://cdn.cdnlogo.com/logos/o/11/only.svg',
            sale:'20-35% off'
        },
        {
            url:'https://d3tdx3c7l2rexw.cloudfront.net/static/img/wrogn/products/square/WQJK6091S/1.jpeg',
            brandURL:'https://d3tdx3c7l2rexw.cloudfront.net/media/img/page_section/uspl/mobile_brand_section/wrogn-active-logo.webp',
            sale:'30-40% off'
        },
        {
            url:'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/51xQw0aBowL._UX522_.jpg',
            brandURL:'https://n3.sdlcdn.com/imgs/d/0/c/logo_1_-e0a34.png',
            sale:'40-70% off'
        },
        {
            url:'https://i.etsystatic.com/5543772/r/il/031510/3544244448/il_fullxfull.3544244448_sz3t.jpg',
            brandURL:'https://1000logos.net/wp-content/uploads/2017/03/Levis-logo.jpg',
            sale:'20-50% off'
        },
        {
            url:'https://images.jdmagicbox.com/quickquotes/images_main/women-kurtis-biba-2217203004-iroo6vd6.jpg',
            brandURL:'https://billionbroadcaster.com/wp-content/uploads/2019/09/BIBA-LOGO.jpg',
            sale:'55-70% off'
        },
        {
            url:'https://i.pinimg.com/736x/b1/da/5c/b1da5c26500ef71c2659b5498166d470.jpg',
            brandURL:'https://1000logos.net/wp-content/uploads/2021/06/Vero-Moda-logo.png',
            sale:'50-60% off'
        },
        {
            url:'https://6c819239693cc4960b69-cc9b957bf963b53239339d3141093094.lmsin.net/1000010880333-Red-1000010880333_01-1200.jpg',
            brandURL:'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Benetton_Group_logo.svg/2560px-Benetton_Group_logo.svg.png',
            sale:'30-45% off'
        },
        {
            url:'https://i.pinimg.com/originals/18/4e/93/184e9314659ada87c7027bfe2c7cbec0.jpg',
            brandURL:'https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_170,w_170,f_auto,b_white,q_auto:eco,dpr_1/v1469076429/v03esdwhqvkawt31jo89.jpg',
            sale:'10-40% off'
        }
    ])
    return (
        <div className='top-deals'>
            <div className='brand-logo'>
                <h1 className='bolder'>DEALS ON TOP BRANDS</h1>
            </div>
            {
                allBrand.map((brandItem, brandIndex) => {
                    return (
                        <div className='topBrand-Items' style={{ width: '12%' }}>
                            <div className='brandURL'>
                                <img className='brandImg' src={brandItem.url} width='100%' />
                                <img className='brandName' src={brandItem.brandURL} width='60%' />
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
