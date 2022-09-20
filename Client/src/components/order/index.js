import './styles.scss';
import { useEffect, useState } from 'react';
import Pagination from '../pagination';
import { titleTab } from '../../utils/titleGenerate';
import { useNavigate } from 'react-router-dom';
import { getOrder } from '../../api/service/orders.service';

function Order() {
    titleTab('Đơn hàng của bạn')
    const [list, setList] = useState([]);
    const [dataLogin, setDataLogin] = useState(() => {
        const storage = JSON.parse(localStorage.getItem('client'));
        console.log(storage);
        return storage;
    });

    let navigate = useNavigate();
    const [currentPage, setCurrentPage] = useState(1);
    const [itemPage, setItemPage] = useState(5);

    const indexOfLastItem = currentPage * itemPage;
    const indexOfFirstItem = indexOfLastItem - itemPage;
    const currentPages = list.slice(indexOfFirstItem, indexOfLastItem);
    
    useEffect(() => {
        getOrder(dataLogin._id)
        .then(res => {setList(res.data)})
        .catch(e => {console.log(e);})
    }, []);

    function truncate(str, n) {
        return (str.length > n) ? str.slice(0, n - 1) + '...' : str;
    };



    function paginate(number) {
        setCurrentPage(number);
    }

    function formatDate(date) {
        let objDate = new Date(date);
        let getHour = objDate.getHours();
        let getMinutes = objDate.getMinutes();
        let getSecond = objDate.getSeconds();
        let day = objDate.getDate();
        let month = objDate.getMonth();
        let year = objDate.getFullYear();
        let format2 = `${day}-${month + 1}-${year} ${getHour < 10 ? '0'+getHour : getHour}:${getMinutes < 10 ? '0'+getMinutes : getMinutes}:${getSecond < 10 ? '0' + getSecond : getSecond}`;
        return format2;
    }

    return (
        <div className='Cart__item'>
            <section className="container signup ">
                <div className="content">
                    <h1>Đơn Hàng Của Bạn</h1>
                </div>
                <div className="notification">

                </div>
                <div className="shopcart">
                    <div className="cart">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Tên Sản phẩm</th>
                                    <th>Số Lượng</th>
                                    <th>Tổng tiền</th>
                                    <th>Ngày đặt</th>
                                </tr>
                            </thead>
                            <tbody id="cart-body">
                                {
                                    currentPages.length === 0 ? <h1>Chưa có sản phẩm nào bạn mua</h1>: 
                                    (currentPages.map((item, index) => (
                                        <tr key={item._id}>
                                            <td>{index + 1}</td>
                                            <td>{
                                                item.product_id.map(pro => (
                                                    <div>
                                                        {pro.product_name}
                                                    </div>
                                                ))
                                            }</td>
                                            <td>{item.order_quantity}</td>
                                            <td>{item.order_total.toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}</td>
                                            <td>{formatDate(item.createdAt)}</td>
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
            </section>
        </div>
    );
}

export default Order;