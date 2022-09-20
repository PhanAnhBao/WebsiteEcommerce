import './styles.scss';
import { useEffect, useState } from 'react';
import Pagination from '../pagination';
import { titleTab } from '../../utils/titleGenerate';
import { create } from '../../api/service/orders.service';
import { useNavigate } from 'react-router-dom';

function Checkout() {
    titleTab('Thanh toán');
    const [list, setList] = useState(() => {
        const storage = JSON.parse(localStorage.getItem('cart'));
        console.log(storage);
        return storage;
    });
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [id, setId] = useState('');
    let cartNumber = 0;
    let subTotal = 0;
    let total = 0;

    useEffect(() => {
        const storage = JSON.parse(localStorage.getItem('client'));

        if (storage) {
            setName(storage.customer_name);
            setAddress(storage.customer_address);
            setPhone(storage.customer_phone);
            setId(storage._id);
        }
    }, []);

    const [currentPage, setCurrentPage] = useState(1);
    const [itemPage, setItemPage] = useState(3);

    const indexOfLastItem = currentPage * itemPage;
    const indexOfFirstItem = indexOfLastItem - itemPage;
    const currentPages = list.slice(indexOfFirstItem, indexOfLastItem);

    let navigate = useNavigate();

    function truncate(str, n) {
        return (str.length > n) ? str.slice(0, n - 1) + '...' : str;
    };



    function paginate(number) {
        setCurrentPage(number);
    }

    function cartNumbers() {

        list.forEach(item => {
            cartNumber += item.quantity;
        });

    }
    
    cartNumbers();

    console.log(cartNumber);

    function totalCart() {
        list.forEach(item => {
            subTotal += item.product_price * item.quantity;
            total = subTotal + 20000 + 15000;
        })
    }

    totalCart();

    const handleSubmit = () => {
        const body = {
            product_id: list,
            customer_id: id,
            order_quantity: cartNumber,
            order_total: total
        }

        create(body)
        .then(() => {
            alert('Đặt hàng thành công!!');
            localStorage.removeItem('cart');
            navigate('/order');
            window.location.reload();
        })
    }

    return (
        <div className='Cart__item'>
            <section className="container signup ">
                <div className="content">
                    <h1>Thanh Toán Giỏ Hàng</h1>
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
                                </tr>
                            </thead>
                            <tbody id="cart-body">
                                {
                                    currentPages.length === 0 ? <h1>Chưa có sản phẩm nào trong giỏ hàng!!!</h1> :
                                        (currentPages.map((item, index) => (
                                            <tr key={item._id}>
                                                <td>{index + 1}</td>
                                                <td>{truncate(item.product_name, 10)}</td>
                                                <td><img className='img_cart' src={`/${item.product_image}`} alt={item.product_name} /></td>
                                                <td>{item.product_price.toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}</td>
                                                <td>{item.quantity}</td>
                                                <td>{(item.product_price * item.quantity).toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}</td>
                                            </tr>
                                        )))
                                }
                            </tbody>
                        </table>
                    </div>
                    <div class="pag">
                        <Pagination itemPage={itemPage} totalPage={list.length} paginated={paginate} current={currentPage} />
                    </div>
                </div>
                <div class="checkout__form main">
                    <div class="heading">
                        <h2>Nhập thông tin của bạn</h2>
                    </div>
                    <div class="main--input">
                        <input value={name}  onChange={(e) => setName(e.target.value) } type="text" placeholder="Họ và tên (*)" />
                        <input value={address}  onChange={(e) => setAddress(e.target.value) } type="text" placeholder="Địa chỉ (*)" />
                        <input value={phone}  onChange={(e) => setPhone(e.target.value) } type="text" placeholder="Số điện thoại (*)" />
                        <div class="radio__method">
                            <h2>Phương thức thanh toán</h2>
                            <div class="radio__method--payment">
                                <span>
                                    <label>
                                        <input type="checkbox" />
                                        Chuyển khoản trực tiếp
                                    </label>
                                </span>
                                <span>
                                    <label>
                                        <input type="checkbox" />
                                        Trả tiền khi nhận hàng
                                    </label>
                                </span>
                                <span>
                                    <label>
                                        <input type="checkbox" />
                                        Paypal
                                    </label>
                                </span>
                            </div>
                        </div>
                        <div class="total">
                            <div class="total__heading">
                                <h2>Tổng giỏ hàng</h2>
                            </div>
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
                        </div>
                    </div>
                    <div class="main--button">
                        <button onClick={handleSubmit} class="button_signin">Thanh toán</button>
                    </div>
                </div>

            </section>
        </div>
    );
}

export default Checkout;