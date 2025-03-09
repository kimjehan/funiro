import s from './Header.module.css'
import logo_img from '/assets/images/logo.png';
import Vector_img from '/assets/images/Vector.png';
import poisk_img from '/assets/images/poisk.png';
import love_img from '/assets/images/love.png';
import shop_img from '/assets/images/shop.png';

function Header(){
    return (
        <header className={s.header}>
            <div className={s.logo}>
                <img src={logo_img} alt="logo" />
                <h1>Furniro</h1>
            </div>
            <div className={s.nav}>
                <ul>
                    <a href="#">Home</a>
                    <a href="#">Shop</a>
                    <a href="#">About</a>
                    <a href="#">Contact</a>
                </ul>
            </div>
            <div className={s.icons}>
                <img src={Vector_img} alt="logo" />
                <img src={poisk_img} alt="logo" />
                <img src={love_img} alt="logo" />
                <img src={shop_img} alt="logo" />
            </div>
        </header>
    )
}
export default Header