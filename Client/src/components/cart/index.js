import './styles.scss';
import { useEffect, useState } from 'react';
import Pagination from '../pagination';
import { titleTab } from '../../utils/titleGenerate';
import { useNavigate } from 'react-router-dom';

function Cart() {
    titleTab('Giỏ hàng')
    const [list, setList] = useState(() => {
        const storage = JSON.parse(localStorage.getItem('cart'));
        console.log(storage);
        return storage;
    });

    const [dataLogin, setDataLogin] = useState(() => {
        const storage = JSON.parse(localStorage.getItem('client'));
        console.log(storage);
        return storage;
    });

    let subTotal = 0;
    let total = 0;
    let navigate = useNavigate();
    const [currentPage, setCurrentPage] = useState(1);
    const [itemPage, setItemPage] = useState(3);
    const [quantity, setQuantity] = useState(0);

    const indexOfLastItem = currentPage * itemPage;
    const indexOfFirstItem = indexOfLastItem - itemPage;
    const currentPages = list.slice(indexOfFirstItem, indexOfLastItem);
    
    function truncate(str, n) {
        return (str.length > n) ? str.slice(0, n - 1) + '...' : str;
    };



    function paginate(number) {
        setCurrentPage(number);
    }

    function update(item, e) {
        let indexOf = list.map(element => element._id);
        let index = indexOf.findIndex(id => id === item._id);
        list[index].quantity = Number(e.target.value);
        localStorage.setItem('cart', JSON.stringify(list));
        window.location.reload();
    }

    function remove(item) {
        let indexOf = list.map(element => element._id);
        let index = indexOf.findIndex(id => id === item._id);
        list.splice(index, 1);
        localStorage.setItem('cart', JSON.stringify(list));
        window.location.reload();
    }


    function totalCart() {
        list.forEach(item => {
            subTotal += item.product_price * item.quantity;
            total = subTotal + 20000 + 15000;
        })
    }

    totalCart();

    const handleClick = () => {
        console.log('abc');
        if (dataLogin === null) {
            alert('Bạn chưa đăng nhập!!!');
            navigate('/login');
        }
        else {
            navigate('/checkout');
        }
    }

    const handleRedirect = () => {
        navigate('/')
    }

    return (
        <div className='Cart__item'>
            <section className="container signup ">
                <div className="content">
                    <h1>Giỏ Hàng</h1>
                </div>
                <div className="notification">

                </div>
                <div className="shopcart">
                    <div className="cart">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Sản phẩm</th>
                                    <th>Hình ảnh</th>
                                    <th>Giá</th>
                                    <th>Số lượng</th>
                                    <th>Tổng tiền</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody id="cart-body">
                                {
                                    currentPages.length === 0 ? <h1>Chưa có sản phẩm nào trong giỏ hàng!!!</h1>: 
                                    (currentPages.map((item, index) => (
                                        <tr key={item._id}>
                                            <td>{index + 1}</td>
                                            <td>{truncate(item.product_name, 10)}</td>
                                            <td><img className='img_cart' src={`/${item.product_image}`} alt={item.product_name} /></td>
                                            <td>{item.product_price.toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}</td>
                                            <td><input onChange={(e) => update(item, e)} className='input_quantity' type='number' value={item.quantity} /></td>
                                            <td>{(item.product_price * item.quantity).toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}</td>
                                            <td><button onClick={() => remove(item)} className='remove'>X</button></td>
                                        </tr>
                                    )))
                                }
                            </tbody>
                        </table>
                    </div>
                    <div class="pag">
                        <Pagination itemPage={itemPage} totalPage={list.length} paginated={paginate} current={currentPage} />
                    </div>
                    <div className="checkout">
                        <div className="checkout__totalcart">
                            <ul id="total-cart">
                                <li>
                                    <p>Tổng giỏ hàng :</p>
                                    <span>{subTotal.toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}</span>
                                </li>
                                <li>
                                    <p>Thuế :</p>
                                    <span>20.000 VNĐ</span>
                                </li>
                                <li>
                                    <p>Phí vận chuyển :</p>
                                    <span>15.000 VNĐ</span>
                                </li>
                                <li>
                                    <p>Tổng :</p>
                                    <span>{total.toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}</span>
                                </li>
                            </ul>
                        </div>
                        <div className="checkout__button">
                            <button onClick={handleRedirect}  className="btn_back">Quay lại</button>
                            <button onClick={handleClick} className="btn_checkout">Thanh toán</button>
                        </div>

                    </div>
                </div>


            </section>
        </div>
    );
}

export default Cart;