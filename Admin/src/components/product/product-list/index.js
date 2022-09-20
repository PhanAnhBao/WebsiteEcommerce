import './styles.scss';
import { useEffect, useState } from 'react';
import { deleteProduct, getAll, findByName } from '../../../api/service/products.service';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import Pagination from '../../pagination';
import { titleTab } from '../../../utils/titleGenerate';


function TableList() {
    titleTab('Sản phẩm');
    const [list, setList] = useState([]);
    const [search, setSearch] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [itemPage, setItemPage] = useState(5);

    const indexOfLastItem = currentPage * itemPage;
    const indexOfFirstItem = indexOfLastItem - itemPage;
    const currentPages = list.slice(indexOfFirstItem, indexOfLastItem);
    console.log(indexOfFirstItem);
    const handleDelete = (id) => {
        deleteProduct(id)
            .then(res => {
                setList(res);

            })
            .catch((e) => {
                console.log(e);
            })

        window.location.reload();
    }

    useEffect(() => {
        findByName(search)
            .then(res => {
                setList(res.data);
            })
            .catch(e => {
                console.log(e);
            })
    }, [list]);

    useEffect(() => {
        getAll()
            .then((product) => {
                setList(product.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }, []);


    function paginate(number) {
        setCurrentPage(number);
    }


    function truncate(str, n) {
        return (str.length > n) ? str.slice(0, n - 1) + '...' : str;
    };
    return (
        <div className='table__product'>
            <div className='h1__title'>
                <h1>Sản Phẩm</h1>
            </div>
            <div className='button_create'>
                <Link to='/admin/products/create'>Tạo mới</Link>
                <div className='search__btn'>
                    <input type='text' value={search} onChange={(e) => setSearch(e.target.value)} placeholder='Tìm kiếm theo tên....' />
                </div>
            </div>
            <div className="table_scroll">
                <div className="css_table">
                    <div className="css_thead">
                        <div className="css_tr">
                            <div className='css_th'>Tên</div>
                            <div className='css_th'>Số lượng</div>
                            <div className="css_th">Giá sản phẩm</div>
                            <div className="css_th">Nội dung</div>
                            <div className="css_th">Slug</div>
                            <div className="css_th"></div>
                            <div className="css_th"></div>
                        </div>
                    </div>
                    <div className="css_tbody">
                        {
                            currentPages.length === 0 ? (
                                <h3>Không có sản phẩm nào. <Link to='/admin/products/create'>Thêm tại đây!</Link></h3>
                            ) :
                                currentPages.map(item => (
                                    <div key={item._id} className='css_tr'>
                                        <div className='css_td' data-label="Name">{item.product_name}</div>
                                        <div className='css_td' data-label="Quantity">{item.product_quantity}</div>
                                        <div className='css_td' data-label="Price">{item.product_price.toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}</div>
                                        <div className='css_td' data-label="Description">{truncate(item.product_desc, 20)}</div>
                                        <div className='css_td' data-label="Slug">{item.product_slug}</div>
                                        <div className='css_td'><Link to={`/admin/products/${item._id}/edit`}>Edit</Link></div>
                                        <div className='css_td'><a onClick={() => handleDelete(item._id)}>Delete</a></div>
                                    </div>
                                ))
                        }
                    </div>
                </div>
            </div>
            <div className='pag'>
                <Pagination itemPage={itemPage} totalPage={list.length} paginated={paginate} current={currentPage} />
            </div>

        </div>

    );
}

export default TableList;