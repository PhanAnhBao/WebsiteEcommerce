import {
    Link
} from 'react-router-dom'
import { brands, category } from '../../data/header.data';
import { getAll } from '../../api/service/category.service';
import { getAllBrand } from '../../api/service/brands.service';
import './styles.scss';
import { useState, useEffect } from 'react';
import { HiMenu } from "react-icons/hi";
function Header() {
    let cartNumber = 0;
    const [listCate, setListCate] = useState([]);
    const [listBrand, setListBrand] = useState([]);
    const [dataLogin, setDataLogin] = useState(() => {
        const storage = JSON.parse(localStorage.getItem('client'));
        console.log(storage);
        return storage;
    });

    const [arr, setArr] = useState(() => {
        const storage = JSON.parse(localStorage.getItem('cart'));
        console.log(storage);
        return storage;
    });

    const [cart, setCart] = useState([]);
    
    const [obj, setObj] = useState({
        _id: '',
        customer_name: '',
        customer_email: '',
        customer_password: '',
        customer_phone: '',
        customer_address: '',
        createdAt: '',
        updatedAt: '',
        customer_slug: '',
    });
    const [check, setCheck] = useState(false);

    const handleRemove = () => {
        localStorage.removeItem('client');
    }

    const handleOrder = () => {

    }

    useEffect(() => {
        getAll()
            .then(res => {
                setListCate(res.data);
            })
            .catch(e => {
                console.log(e);
            })
    }, []);


    useEffect(() => {
        getAllBrand()
            .then(res => {
                setListBrand(res.data);
            })
            .catch(e => {
                console.log(e);
            })
    }, []);
    let openSearch = () => {
        document.getElementById("myOverlay").style.display = "block";
    }

    let closeSearch = () => {
        document.getElementById("myOverlay").style.display = "none";
    }
    function cartNumbers() {
        if (arr === null) {
            return;
        }
        else {
            arr.forEach(item => {
                cartNumber += item.quantity;
            });
        }


    }

    cartNumbers();


    function truncate(str, n) {
        return (str.length > n) ? str.slice(0, n - 1) + '...' : str;
    };

    function remove(item) {
        let indexOf = arr.map(element => element._id);
        let index = indexOf.findIndex(id => id === item._id);
        arr.splice(index, 1);
        localStorage.setItem('cart', JSON.stringify(arr));
        window.location.reload();
    }

    return (
        <div className="Header">
            <nav className="header--nav__top">
                <p>Đăng ký thành viên nhận ngay voucher giảm 5% tổng đơn</p>
            </nav>
            <nav className="header--nav__middle">
                <div className="nav__middle__contact">
                    <div className="contact__phone">
                        <a href="#" className="inline">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                            +0285 667 779
                        </a>
                    </div>
                    <div className="contact__email">
                        <a href="#" className="inline">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            Fego@gmail.com
                        </a>
                    </div>
                </div>
                <div className="nav__middle__content">
                    <p>Sales lớn các dịp lễ! <span>Mua sắm thôi</span></p>
                </div>
                <div className="nav__middle__nation">
                    <div className="nation__location">
                        <a href="#" className="inline">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            Vị trí
                        </a>
                    </div>
                    <div className="nation__language">
                        <a href="#" className="inline">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                            </svg>
                            Tiếng Việt
                        </a>
                    </div>
                </div>
            </nav>
            <nav className="header--nav__bottom">
                <div className="mobile--nav__menu">
                    <button onClick={() => {setCheck(!check);}} className="btn__menu">
                        <HiMenu />
                    </button>
                </div>
                <div className="bottom__logo">
                    <Link to="/home">
                        <img src="/images/logo.webp" alt="logo" />
                    </Link>

                </div>
                <div className="bottom__menu">
                    <ul>
                        <li><Link className="bottom__menu--a" to="/home">Trang chủ</Link></li>
                        <li><Link className="bottom__menu--a" to="/product">Sản phẩm</Link></li>
                        <li className="bottom__menu--popup">
                            <a className="bottom__menu--a" href="#">Loại sản phẩm</a>
                            <div className="hidden popup">
                                {
                                    listCate.map(item => (
                                        <li key={item._id}><a href={`/category/${item._id}`}>{item.category_name}</a></li>
                                    ))
                                }
                            </div>
                        </li>
                        <li className="bottom__menu--popup">
                            <a className="bottom__menu--a" href="#">Thương hiệu</a>
                            <div className="hidden popup">
                                {
                                    listBrand.map(item => (
                                        <li key={item._id}><a href={`/brand/${item._id}`}>{item.brand_name}</a></li>
                                    ))
                                }
                            </div>
                        </li>
                        <li><a className="bottom__menu--a" href="/contact">Liên hệ</a></li>
                        <li><a className="bottom__menu--a" href="/about-us">Giới thiệu</a></li>
                    </ul>
                </div>
                <div className="bottom__user">
                    <ul>
                        <li><a className="bottom__user--a openBtn" onClick={openSearch}><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6"
                            fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg></a></li>
                        <div id="myOverlay" className="overlaySearch">
                            <span className="closebtn" onClick={closeSearch} title="Close Overlay">×</span>

                            <form method='GET' action='/product-search' className="overlay-content">
                                <input required type="text" placeholder="Nhập tên sản phẩm cần tìm ..." name="name" />
                                <button type='submit'>Tìm kiếm</button>
                            </form>

                        </div>
                        <li className="cart__box">
                            <a href={arr === null ? '#' : '/cart'} className="bottom__user--a"><svg xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                            </svg>
                                {cartNumber === 0 ? '' : (<span id="numbers" data-after={cartNumber}></span>)}

                            </a>

                            <div className="cart__item hidden">
                                {
                                    arr === null ? (
                                        <div class="cart__item--product">
                                            <h3>Không có sản phẩm nào!!!</h3>
                                        </div>
                                    ) :
                                        (arr.map(item => (
                                            <div key={item._id} data-id={item._id} class="cart__item--product">
                                                <div class="cart__item--img">
                                                    <a href="#">
                                                        <img src={`/${item.product_image}`} alt="item" />
                                                    </a>
                                                </div>
                                                <div class="cart__item--info">
                                                    <strong>{truncate(item.product_name, 15)}</strong>
                                                    <p>{item.product_price.toLocaleString('it-IT', { style: 'currency', currency: 'VND' })} <span class="cart__item--quantity">x {item.quantity}</span></p>
                                                </div>
                                                <div class="cart__item--button">
                                                    <button onClick={() => remove(item)}>X</button>
                                                </div>
                                            </div>
                                        )))
                                }

                            </div>
                        </li>

                        <li className="bottom__user--login user">
                            <a href="#" className="bottom__user--a"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6"
                                fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                                <span>{dataLogin === null ? '' : dataLogin.customer_name}</span>
                            </a>

                            <div className="expanding--menu hidden">

                                {dataLogin === null ? <a href="/login">Đăng nhập</a> : ''}
                                {dataLogin === null ? <a href="/register">Đăng ký</a> : (
                                    <div>
                                        <a href="/order">Đơn hàng</a>
                                        <a onClick={handleRemove} href="/">Đăng Xuất</a>
                                    </div>
                                )}

                            </div>
                        </li>

                    </ul>
                </div>
            </nav>
            {
                check && (
                    <div className="bottom__menu--mobile">
                <ul>
                    <li><Link className="bottom__menu--a" to="/home">Trang chủ</Link></li>
                    <li><Link className="bottom__menu--a" to="/product">Sản phẩm</Link></li>
                    <li className="bottom__menu--popup">
                        <a className="bottom__menu--a" href="#">Loại sản phẩm</a>
                        <div className="hidden popup popup--mobile">
                            {
                                listCate.map(item => (
                                    <li key={item._id}><a href={`/category/${item._id}`}>{item.category_name}</a></li>
                                ))
                            }
                        </div>
                    </li>
                    <li className="bottom__menu--popup">
                        <a className="bottom__menu--a" href="#">Thương hiệu</a>
                        <div className="hidden popup">
                            {
                                listBrand.map(item => (
                                    <li key={item._id}><a href={`/brand/${item._id}`}>{item.brand_name}</a></li>
                                ))
                            }
                        </div>
                    </li>
                    <li><a className="bottom__menu--a" href="/contact">Liên hệ</a></li>
                    <li><a className="bottom__menu--a" href="/about-us">Giới thiệu</a></li>
                </ul>
            </div>
                )
            }

        </div>
    );
}

export default Header;