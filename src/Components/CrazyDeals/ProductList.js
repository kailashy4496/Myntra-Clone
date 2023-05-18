import "./ProductList.css";
import React, { useState } from 'react';


function ProductList() {

    const [product, setProduct] = useState([
        {
            url: 'https://www.aishcart.in/5208-large_default/woodland-camel-outdoor-shoes.jpg',
            sale: 'Men Sneakers',
            offer: 'min. 40% off'
        },
        {
            url: 'https://images-static.nykaa.com/media/catalog/product/2/c/2c74475rlo0585_8.jpg?tr=w-500,pr-true',
            sale: 'Stylish Footwear',
            offer: 'min. 70% off'
        },
        {
            url: 'https://www.jiomart.com/images/product/500x630/rvjakawmym/yscrowd-men-s-sneakers-stylish-casual-canvas-shoes-white-product-images-rvjakawmym-2-202207271952.jpg',
            sale: 'Bestselling Footwear',
            offer: 'min. 60% off'
        },
        {
            url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHM5yS2kepeih1Ge-qsDfmzuRGU6Sdktca2WRgRFMloA&usqp=CAU&ec=48665701',
            sale: 'Breezy Styles',
            offer: 'min. 60% off'
        },
        {
            url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNLWxoVeNAkHdWuUS9AVj5t_nFsFGd2l8cpiSXac0STQ&usqp=CAU&ec=48665701', 
            sale: 'Trendy Kurtas',
            offer: 'min. 75% off'
        },
        {
            url: 'https://4.imimg.com/data4/YY/SJ/MY-19215476/grey-men-formal-blazer-500x500.jpg',
            sale: 'Suits and Blazers',
            offer: 'min. 70% off'
        },
        {
            url: 'https://cf.shopee.com.my/file/3016989dd8e3bd4f5af3245b15a6d38d',
            sale: 'Kids Blazers',
            offer: 'min. 50% off'
        },
        {
            url: 'https://sc04.alicdn.com/kf/H3c650dee767a49adaeb63f43ac711e11o.jpg',
            sale: 'Denim Styles',
            offer: 'min. 30% off'
        },
        {
            url: 'https://5.imimg.com/data5/SELLER/Default/2021/4/KJ/ZZ/FD/18910770/28-500x500.jpg',
            sale: 'Kurtas & Sets',
            offer: 'min. 55% off'
        },
        {
            url: 'https://images-na.ssl-images-amazon.com/images/I/41U3JIDJVdL.jpg',
            sale: 'Half Sleeve',
            offer: 'min. 65% off'
        },
        {
            url: 'https://www.forevernew.co.in/media/catalog/product/cache/bec84c411d3a50796817cd515843cd3c/p/d/pdp_-03_2.jpg',
            sale: 'Rib Skater',
            offer: 'min. 45% off'
        },
        {
            url: 'https://cdn.shopify.com/s/files/1/0637/4834/1981/products/maroon-lucknowi-chikankari-rayon-partywear-gown-peachmode-1_large.jpg?v=1669036948',
            sale: 'Party Wear',
            offer: 'min. 75% off'
        },
        {
            url: 'https://5.imimg.com/data5/JD/NZ/QX/SELLER-74439238/2019-fashion-denim-jacket-women-jeans-overcoat-500x500.jpg',
            sale: 'Denim Styles',
            offer: 'min. 30% off'
        },
        {
            url: 'https://cdn.shopify.com/s/files/1/0682/3755/8034/products/black_solid_cotton_kurta_suit_set_1_1200x.jpg?v=1672231596',
            sale: 'Black Kurti',
            offer: 'min. 40% off'
        },
        {
            url: 'https://i.pinimg.com/736x/f0/b3/7e/f0b37ed8e828dfc48593a8771920c696--summer-months-shoes-style.jpg',
            sale: 'Women Style',
            offer: 'min. 20% off'
        },
        {
            url: 'https://5.imimg.com/data5/SELLER/Default/2021/6/CO/RR/RE/7941419/whatsapp-image-2021-06-26-at-4-11-36-pm-1--1000x1000.jpeg',
            sale: 'Silky Saree',
            offer: 'min. 55% off'
        },
        {
            url: 'https://cpimg.tistatic.com/07466657/b/4/GIRLS-DESIGNER-SHORT-TOPS.jpg',
            sale: 'Top & Tees',
            offer: 'min. 65% off'
        },
        {
            url: 'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/51xQw0aBowL._UX522_.jpg',
            sale: 'Summer Sleeve',
            offer: 'min. 30% off'
        },
    ])

    return (
        <div className="product-deals">
            <div className="product-view">
                <a href="">
                    <img src="https://assets.myntassets.com/f_auto,q_auto:eco,dpr_1.3,w_600,c_limit,fl_progressive/assets/images/2023/4/11/b3e5491b-c4cd-468e-bef9-f3ab3e7c09c41681202800723-unnamed--17-.gif" />
                </a>
            </div>
            {
                product.map((productItem, productIndex) => {
                    return (
                        <div className="All-product" style={{ width: '10%' }}>
                            <div className='product-items'>
                                <div className="Items-Sale">
                                    <img src={productItem.url} width="100%" />
                                    <p>{productItem.name}</p>
                                </div>
                                <p>{productItem.sale}</p>
                                <p className="size">{productItem.offer}</p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ProductList;

