import './styles.scss';
import { useEffect, useState } from 'react';
import { getAll, deleteOrder, findByName} from '../../../api/service/orders.service';
import { Link, useNavigate } from 'react-router-dom';
import Pagination from '../../pagination';
import { titleTab } from '../../../utils/titleGenerate';


function TableOrderList() {
    titleTab('Đơn hàng');

    const [list, setList] = useState([]);
    const [search, setSearch] = useState('');
    const [product, setProduct] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemPage, setItemPage] = useState(5);
    let navigate = useNavigate();
    const indexOfLastItem = currentPage * itemPage;
    const indexOfFirstItem = indexOfLastItem - itemPage;
    const currentPages = list.slice(indexOfFirstItem, indexOfLastItem);
    const handleDelete = (id) => {
        deleteOrder(id)
        .then(res => {
            setList(res);
        })   
        .catch((e) => {
            console.log(e);
        })
    }


    useEffect(() => {
        getAll()
        .then((cus) => {
            setList(cus.data);
            
         })
         .catch((err) => {
             console.log(err);
         })
    }, [list]);


    function paginate (number) {
        if (number < 1) {
            setCurrentPage(1);
        }
        else if (number > currentPages.length) {
            setCurrentPage(prev => prev);
        }
        else {
            setCurrentPage(number);
        }
    }

    function formatDate(date) {
        let objDate = new Date(date);
        let getHour = objDate.getHours();
        let getMinutes = objDate.getMinutes();
        let getSecond = objDate.getSeconds();
        let day = objDate.getDate();
        let month = objDate.getMonth();
        let year = objDate.getFullYear();
        let format2 = `${day}-${month+1}-${year} ${getHour < 10 ? '0'+getHour : getHour}:${getMinutes < 10 ? '0'+getMinutes : getMinutes}:${getSecond < 10 ? '0' + getSecond : getSecond}`;
        return format2;
    }
    function truncate(str, n) {
        return (str.length > n) ? str.slice(0, n - 1) + '...' : str;
    };
    return (
        <div className='table__product'>
             <div className='h1__title'>
                <h1>Đơn Hàng</h1>
            </div>
            <div className='button_create'>
               
            </div>
            <div className="table_scroll">
                <div className="css_table">
                    <div className="css_thead">
                        <div className="css_tr">  
                            <div className='css_th'>#</div>
                            <div className='css_th'>Tên Sản Phẩm</div>
                            <div className='css_th'>Số lượng</div>
                            <div className="css_th">Tổng tiền</div>
                            <div className="css_th">Tên khách hàng</div>
                            <div className="css_th">Địa chỉ</div>
                            <div className="css_th">Số điện thoại</div>
                            <div className="css_th">Ngày đặt</div>
                            <div className="css_th"></div>
                        </div>
                    </div>
                    <div className="css_tbody">
                        {   
                            currentPages.length === 0 ? (
                                <h3>Không có đơn nào !!!.</h3>
                            ) :
                            currentPages.map((item, index) => (
                                <div key={item._id} className='css_tr'>
                                     <div className='css_td' data-label="#">{index + 1}</div>
                                    <div className='css_td' data-label="Tên Sản Phẩm">
                                        {item.product_id.map(pro => (
                                            <div>{truncate(pro.product_name, 10)}</div>
                                        ))}
                                    </div>
                                    <div className='css_td' data-label="Số lượng">{item.order_quantity}</div>
                                    <div className='css_td' data-label="Tổng tiền">{item.order_total.toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}</div>
                                    <div className='css_td' data-label="Tên khách hàng">{truncate(item.customer_id.customer_name, 15)}</div>
                                    <div className='css_td' data-label="Địa chỉ">{truncate(item.customer_id.customer_address, 15)}</div>
                                    <div className='css_td' data-label="Số điện thoại">{item.customer_id.customer_phone}</div>
                                    <div className='css_td' data-label="Ngày đặt">{formatDate(item.createdAt)}</div>
                                    <div className='css_td'><a onClick={() => handleDelete(item._id)}>Delete</a></div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
            <div className='pag'>
                <Pagination itemPage={itemPage} totalPage={list.length} paginated={paginate} current={currentPage}/>
            </div>
        </div>

    );
}

export default TableOrderList;