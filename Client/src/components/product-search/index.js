import { useState, useEffect } from "react";
import { useLocation} from "react-router-dom";
import Pagination from "../pagination";
import { search } from '../../api/service/product.service';
import { titleTab } from "../../utils/titleGenerate";
import './style.scss';
import { addToCart } from "../../helpers/cart.helper";
function ProductSearch() {
    titleTab('Tìm kiếm sản phẩm');
    const [list, setList] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemPage, setItemPage] = useState(9);

    const indexOfLastItem = currentPage * itemPage;
    const indexOfFirstItem = indexOfLastItem - itemPage;
    const currentPages = list.slice(indexOfFirstItem, indexOfLastItem);
    let cart = [];
    const searching = useLocation().search;
    const name = new URLSearchParams(searching).get('name');
    console.log(name);
    useEffect(() => {
        search(name)
        .then(res => {setList(res.data)})
        .catch(e => {console.log(e);})
    })
    function paginate(number) {
        setCurrentPage(number);
    }
    const handleAddToCart = (item, cart) => {
        addToCart(item, cart);
    }
    return (
        <div className='Home'>
            <div className="products--new">
                <h2 className="products--new__h2">
                    Sản phẩm
                </h2>
            </div>

            <div className="products--new__row">
                {
                    currentPages.length === 0 ? (<h1>Không có sản phẩm mà bạn muốn tìm!</h1>) : (
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
                    }))
                }
            </div>
            <div class="pag">
                <Pagination itemPage={itemPage} totalPage={list.length} paginated={paginate} current={currentPage} />
            </div>
        </div>
    );
}

export default ProductSearch;