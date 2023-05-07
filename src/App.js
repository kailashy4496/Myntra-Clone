import './App.css';
import Header from './Components/Header';
import SideBar from './Components/SideBar';
import Product from './Components/Items/Product';
import ProductList from './Components/ItemsList/ProductList';
import { useState } from 'react';
import Brand from './Components/ItemsList/Brand';
import AllBrand from './Components/TopBrands/AllBrand';


function App() {

  const [product, setProduct] = useState([
    {
      url: 'https://www.jiomart.com/images/product/500x630/rvgtnulkr7/bersache-sports-shoes-for-men-latest-stylish-sports-shoes-for-men-lace-up-lightweight-white-shoes-for-running-walking-gym-trekking-and-hiking-shoes-for-men-product-images-rvgtnulkr7-0-202207131106.jpg',
      name: 'Shoes',
      price: 3999
    },
    {
      url: 'https://rukminim1.flixcart.com/image/850/850/kjlrb0w0-0/watch/l/m/p/queen-dial-black-magnetic-belt-girls-analog-watch-maan-original-imafz4uzmxma9z9h.jpeg?q=90',
      name: 'Watch',
      price: 1199
    },
    {
      url: 'https://5.imimg.com/data5/SELLER/Default/2022/11/FH/CG/IX/97646359/apple-macbook-laptop-500x500.jpg',
      name: 'Laptop',
      price: 120000
    },
    {
      url: 'https://static.fibre2fashion.com/MemberResources/LeadResources/1/2021/7/Seller/21197859/Images/21197859_0_new-project-2021-07-29t161059-408.jpg',
      name: 'Ladies Jeans',
      price: 1499
    },
    {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLl1kfH0DRp_Y7eZ2GKmjkm1GZugFn0g-56s83wI5YkHv7Zq1aRZoMiJrhXmqYb4Ax97m7oLy7aoI&usqp=CAU&ec=48665701',
      name: 'Flip-Flop',
      price: 749
    },
    {
      url: 'https://i.pinimg.com/736x/9b/96/ea/9b96ea7a89441037f34bdf5f959e2684.jpg',
      name: 'Men Sandals',
      price: 699
    },
    {
      url: 'https://m.media-amazon.com/images/I/41MClLF68kL._UL1000_.jpg',
      name: 'Laptop-Bag',
      price: 4999
    },
    {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIIG1i8Bjb1lQEk65PAQNHacvWV2iGAh9OUFlq3TVXig&usqp=CAU&ec=48665701',
      name: 'Shirt',
      price: 1699
    },
    {
      url: 'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/41ven52aeUL.jpg',
      name: 'T-Shirt',
      price: 599
    },
    {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR7p8ZklyTuKnXPTC0Jg7Y_j9Bm7b29m_wkmHVPtyM-Q&usqp=CAU&ec=48665701',
      name: 'Ladies Bag',
      price: 2499
    },
    {
      url: 'https://droolworthy.in/wp-content/uploads/2021/12/88.jpg',
      name: 'Dresses',
      price: 999
    },
    {
      url: 'https://guide.alibaba.com/image/i4/5-kids-childrens-suits-boy-suit-autumn-2016-new-mens-6-fall-sports-piece-10-boys-12-8-children-9-years-old/TB1SMJsLXXXXXXwXXXXXXXXXXXX_!!0-item_pic.jpg',
      name: 'Kids Wear',
      price: 1999
    },
    {
      url: 'https://cdn.shopify.com/s/files/1/0682/3755/8034/products/black_solid_cotton_kurta_suit_set_1_1200x.jpg?v=1672231596',
      name: 'Kurti',
      price: 1850
    },
    {
      url: 'https://i.pinimg.com/736x/f0/b3/7e/f0b37ed8e828dfc48593a8771920c696--summer-months-shoes-style.jpg',
      name: 'Women Sandal',
      price: 849
    },
    {
      url: 'https://i.pinimg.com/474x/12/b3/d1/12b3d1923d42031c7a44c26599d30843.jpg',
      name: 'Saree',
      price: 1399
    },
    {
      url: 'https://cpimg.tistatic.com/07466657/b/4/GIRLS-DESIGNER-SHORT-TOPS.jpg',
      name: 'Top & Tees',
      price: 699
    },
    {
      url: 'https://sc04.alicdn.com/kf/H3c650dee767a49adaeb63f43ac711e11o.jpg',
      name: 'Men Jeans',
      price: 3199
    },
    {
      url: 'https://i.ebayimg.com/images/g/IrIAAOSwHohhCs4V/s-l500.jpg',
      name: 'Slipper',
      price: 449
    },
  ])
  return (
    <div>
      <Header />
      <SideBar />
      <Product product={product}></Product>
      <ProductList />
      <Brand />
      <AllBrand />
    </div>
  );
}

export default App;
