import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Pagination from "../pagination";
import { getAll } from '../../api/service/product.service';
import { titleTab } from "../../utils/titleGenerate";
import './style.scss';
import { addToCart } from "../../helpers/cart.helper";
import ReactLoading from 'react-loading';
function Product() {
    titleTab('Sản phẩm');
    const [list, setList] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemPage, setItemPage] = useState(9);

    const [done, setDone] = useState(undefined);
    const indexOfLastItem = currentPage * itemPage;
    const indexOfFirstItem = indexOfLastItem - itemPage;
    const currentPages = list.slice(indexOfFirstItem, indexOfLastItem);
    let cart = [];
    useEffect(() => {
        setTimeout(() => {
            getAll()
                .then((res) => {
                    setList(res.data);
                    setDone(true);
                })
                .catch((err) => {
                    console.log(err);
                })
        }, 2000)
    }, []);

    function paginate(number) {
        setCurrentPage(number);
    }

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
                            Sản phẩm
                        </h2>
                    </div>

                    <div className="products--new__row">
                        {
                            currentPages.map(function (item) {
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
                    <div class="pag">
                        <Pagination itemPage={itemPage} totalPage={list.length} paginated={paginate} current={currentPage} />
                    </div>
                </div>)}
            
        </div>
    );
}

export default Product;