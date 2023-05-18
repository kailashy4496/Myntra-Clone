import React, { useState } from 'react';
import "./Luxe.css";

function Luxe() {
    const [luxe, setLuxe] = useState([
        {
            url: 'https://di2ponv0v5otw.cloudfront.net/posts/2021/02/16/602c1c5e633cfc49eecb15ad/m_6158e6d0ff830453f533f7e6.jpg',
            luxeURL: 'https://www.pngkit.com/png/detail/306-3061551_jbl-logo-vector-donna-karan-new-york-logo.png',
        },
        {
            url: 'https://montres-et-tendance.com/wp-content/uploads/2020/08/junghans-force-mega-solar-montres-tendance-2.jpg',
            luxeURL: 'https://2.bp.blogspot.com/-X_VqD4-n3tA/ThvzTp9NkYI/AAAAAAAAb5k/aqvPUilJAO8/s1600/JUNGHANS_logo_history.gif',
        },
        {
            url: 'https://emiratesinternationalgroup.com/wp-content/uploads/2015/02/Emirates-D%C3%A9cor-Emirates-International-Group-Dubai-London.-Red-Black-Gold-Bedroom.-Red-black-gold-room-color-design-interior-decor-Dubai-luxury.jpg',
            luxeURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM8KE84QrZekdJ-6QtD9PUN3_E6oSakuoyRoYP4uln8w&usqp=CAU&ec=48665701',
        },
        {
            url: 'https://www.horologii.com/wp-content/uploads/2021/03/Oris-Big-Crown-ProPilot-Day-Date-TLP-Limited-Edition-01-752-7760-4287-Set-1-1024x1024.jpg',
            luxeURL: 'https://1000logos.net/wp-content/uploads/2018/10/Oris-Logo.jpg',
        },
        {
            url: 'https://cdn.shopify.com/s/files/1/0533/3847/2640/products/raymond-weil-tango-men-s-43mm-black-and-steel-quartz-chronograph-watch-8570-bkr-05240-wallace-bishop-6.jpg?v=1676622532',
            luxeURL: 'https://logonoid.com/images/raymond-weil-logo.jpg',
        },
        {
            url: 'https://www.zales.com/productimages/processed/V-20149250_1_800.jpg?pristine=true',
            luxeURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyy9Xu_lxrCYQqMM4QDsSrGzhs3XmraPKAI4-WV0028Q&usqp=CAU&ec=48665701',
        },
        {
            url: 'https://cdn.millions.co/custom-merch-image/16005994-9986-4440-a381-3d86431555b3.png',
            luxeURL: 'https://www.logolynx.com/images/logolynx/18/185dc4d6fffad0b2d8f0824e5f9b942b.jpeg',
        },
        {
            url: 'https://cdn.shopify.com/s/files/1/0531/6896/3743/products/P0-2022-07-13T202440.384.jpg?v=1657740382',
            luxeURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3fzF_xXMvRRPWH_GHRz6KTnHK_qn1EQ5R3SCAdOnUNQ&usqp=CAU&ec=48665701',
        },
        {
            url: 'https://5.imimg.com/data5/HG/YZ/FL/SELLER-89599085/tissot-luxury-black-watch-up-500-1000x1000.jpg',
            luxeURL: 'https://www.watchcrunch.com/images/badges/tissot.svg',
        },
        {
            url: 'https://blog.aphrodite1994.com/wp-content/uploads/2017/01/Fred-Perry-Harrington-Jacket.jpg',
            luxeURL: 'https://upload.wikimedia.org/wikipedia/fr/thumb/e/e6/Fred_Perry_logo.jpg/640px-Fred_Perry_logo.jpg',
        },
        {
            url: 'https://landmark72.intercontinental.com/uploads/intercontinental-hanoi-stellar-steakhouse-sq_2.jpg',
            luxeURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM8KE84QrZekdJ-6QtD9PUN3_E6oSakuoyRoYP4uln8w&usqp=CAU&ec=48665701',
        },
        {
            url: 'https://qph.cf2.quoracdn.net/main-qimg-4e2e68dbb818989199aac355ad6f2a1f-pjlq',
            luxeURL: 'https://i.pinimg.com/736x/0a/66/4e/0a664ea4e2d8eb6c2deb9d488d8bf75f.jpg',
        },
        {
            url: 'https://i2-prod.coventrytelegraph.net/incoming/article25456064.ece/ALTERNATES/s1200c/1_27th-National-Television-Awards-Show-OVO-Arena-Wembley-London-UK-13-Oct-2022.jpg',
            luxeURL: 'https://1000logos.net/wp-content/uploads/2019/11/Karl-Lagerfeld-Logo.jpg',
        },
        {
            url: 'https://westgateoxford.co.uk/sites/westgate/files/styles/whats_on_gallery_small/public/images/shops/gallery/220503_pwe_ted_baker_shot_44_029.jpg?itok=QvTOqhHp',
            luxeURL: 'https://logos-world.net/wp-content/uploads/2023/01/Ted-Baker-London-Logo-History.png',
        },
    ])
    return (
        <div className='Luxe-Product'>
            <div className='Luxe-Logo'>
                <h1>MYNTRA LUXE</h1>
            </div>
            {
                luxe.map((luxeItem, luxeIndex) =>{
                    return (
                        <div style={{ width: '14%' }}>
                            <div className='Luxe_Brand_Items'>
                                <img src={luxeItem.url} width='100%' />
                                <img className='Items_logo' src={luxeItem.luxeURL} width='40%' />
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Luxe;
