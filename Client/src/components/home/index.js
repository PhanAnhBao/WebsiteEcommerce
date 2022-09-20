import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { manyBuyer, productList } from '../../data/home.data';
import './styles.scss';
import { getLimited } from '../../api/service/product.service';
import { titleTab } from '../../utils/titleGenerate';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { responsive } from '../../utils/responsive';
import { addToCart } from '../../helpers/cart.helper';
import ReactLoading from 'react-loading';

function Home() {
    titleTab('Trang chủ');
    const [list, setList] = useState([]);
    const [done, setDone] = useState(undefined);
    let cart = [];
    useEffect(() => {
        setTimeout(() => {
            getLimited()
                .then((res) => {
                    setList(res.data);
                    setDone(true);
                })
                .catch((err) => {
                    console.log(err);
                })
        }, 1000)
    }, []);

    
    const handleAddToCart = (item, cart) => {
        addToCart(item, cart);
    }

    return (
        <div className='Home'>
            {!done ? (
                <ReactLoading
                    type={'spinningBubbles'}
                    color={'#976b43'}
                    height={'20%'} 
                    width={'20%'}
                />
            ) : (
                <div>
                    <div className="products--new">
                        <h2 className="products--new__h2">
                            Sản phẩm mới
                        </h2>
                    </div>

                    <div className="products--new__row">
                        {
                            list.map(function (item) {
                                return (
                                    <div className='products--items'>
                                        <div class="products--items__img">
                                            <img src={`${item.product_image}`} alt="rings" />
                                            <div className="overlay">
                                                <div className="text">
                                                    <img src={`${item.product_image1}`} alt="rings" />
                                                </div>
                                            </div>
                                        </div>
                                        <div class="products--items__main">
                                            <a href={`/productdetails/${item.product_slug}`}>{item.product_name}</a>
                                            <p><span className='price__product'>Giá:</span> {item.product_price.toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}</p>
                                            <button onClick={() => handleAddToCart(item, cart)} className="border__button">Thêm vào giỏ hàng</button>
                                        </div>
                                        <span className="new"></span>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="many--order">
                        <div className="buyers">
                            <h2 className="buyers__h2">
                                Mua nhiều
                            </h2>
                        </div>
                        <div className="products--orders--row ">
                            <Carousel
                                responsive={responsive}
                            >
                                {
                                    list.map(item => (

                                        <div className="products--orders__item">
                                            <div className="products--items__img">
                                                <img src={`/${item.product_image}`} alt="rings" />
                                                <div className="overlay">
                                                    <div className="text">
                                                        <img src={`/${item.product_image1}`} alt="rings" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="products--items__info">
                                                <a href={`/productdetails/${item.product_slug}`}>{item.product_name}</a>
                                                <p>{item.product_price.toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}</p>
                                                <button onClick={() => handleAddToCart(item, cart)}>Thêm vào giỏ hàng</button>
                                            </div>
                                        </div>
                                    ))
                                }
                            </Carousel>

                        </div>

                    </div>
                </div>
            )}

        </div>
    );
}

export default Home;