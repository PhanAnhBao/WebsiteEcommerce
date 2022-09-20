import './styles.scss';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
function HeaderAdmin() {
    const [dataLogin, setDataLogin] = useState(() => {
        const storage = JSON.parse(localStorage.getItem('login'));
        console.log(storage);
        return storage;
    });
    return (
        <div>
            <nav className="header--nav__bottom">
                <div className="mobile--nav__menu">
                    <button className="btn__menu">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
                <div className="bottom__logo">
                    <Link to="/admin/">
                        <img src="/images/logo.webp" alt="logo" />
                    </Link>

                </div>
                <div className="bottom__menu">
                    <ul>
                        <li><Link className="bottom__menu--a" to="/admin">Trang chủ</Link></li>
                        <li><Link className="bottom__menu--a" to="/admin/products">Sản phẩm</Link></li>
                        <li><Link className="bottom__menu--a" to="/admin/categories">Loại sản phẩm</Link></li>
                        <li><Link className="bottom__menu--a" to="/admin/brands">Thương hiệu</Link></li>
                        <li><Link className="bottom__menu--a" to="/admin/orders">Các đơn hàng</Link></li>
                    </ul>
                </div>
                <div className="bottom__user">
                    <ul>
                        <li className="bottom__user--login user">
                            <a href="#" className="bottom__user--a">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6"
                                    fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>

                                <span>{dataLogin.admin_name}</span>

                            </a>
                            
                        </li>
                        <li><a className='logout' href='/'>Đăng xuất</a></li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default HeaderAdmin;