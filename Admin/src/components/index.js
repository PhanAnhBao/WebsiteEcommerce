import './styles.scss';
import { Link, useLocation } from 'react-router-dom'
import { titleTab } from '../utils/titleGenerate';
import { useEffect, useState } from 'react'
import ReactLoading from 'react-loading';
function AdminComponents() {
    titleTab('Trang chủ');

    const [done, setDone] = useState(undefined);
    useEffect(() => {
        setTimeout(() => {
            setDone(true);
        }, 2000)
    }, [])
    return (
        <div className="Main__admin container">
            {!done ? (
                <ReactLoading
                    type={'spinningBubbles'}
                    color={'#976b43'}
                    height={'20%'}
                    width={'20%'}
                    className='loading'
                />
            ) : (
                <div className="row">
                    <div className="col-3">
                        <Link to="/admin/products"><img src="/images/product.jpg" alt="img" /></Link>
                        <Link to="/admin/products">Sản phẩm</Link>
                        <Link to="/admin/products" className="manger">Quản lý</Link>
                    </div>
                    <div className="col-3">
                        <Link to="/admin/categories"><img src="/images/loai.jpg" alt="img" /></Link>

                        <Link to="/admin/categories">Loại sản phẩm</Link>
                        <Link to="/admin/categories" className="manger">Quản lý</Link>
                    </div>
                    <div className="col-3">
                        <Link to="/admin/orders"><img src="/images/cartnv.jpg" alt="img" /></Link>
                        <Link to="/admin/orders">Đơn hàng</Link>
                        <Link to="/admin/orders" className="manger">Quản lý</Link>
                    </div>
                    <div className="col-3">
                        <Link to="/admin/brands"><img src="/images/thuong.jpg" alt="img" /></Link>
                        <Link to="/admin/brands">Thương hiệu</Link>
                        <Link to="/admin/brands" className="manger">Quản lý</Link>
                    </div>
                    <div className="col-3">
                        <Link to="/admin/customers"><img src="/images/cus.jpg" alt="img" /></Link>

                        <Link to="/admin/customers">Khách hàng</Link>
                        <Link to="/admin/customers" className="manger">Quản lý</Link>
                    </div>
                    <div className="col-3">
                        <Link to="/admin/employees"><img src="/images/emnv.jpg" alt="img" /></Link>
                        <Link to="/admin/employees">Nhân viên</Link>
                        <Link to="/admin/employees" className="manger">Quản lý</Link>
                    </div>

                </div>)}
        </div>
    );
}

export default AdminComponents;