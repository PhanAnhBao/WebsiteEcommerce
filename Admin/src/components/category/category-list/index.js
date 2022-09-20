import './styles.scss';
import { useEffect, useState } from 'react';
import { getAll, deleteCategories, findByName } from '../../../api/service/categories.service';
import { Link, useNavigate } from 'react-router-dom';
import Pagination from '../../pagination';
import { titleTab } from '../../../utils/titleGenerate';


function TableCategoryList() {
    titleTab('Loại sản phẩm')
    const [list, setList] = useState([]);
    const [search, setSearch] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [itemPage, setItemPage] = useState(5);

    const indexOfLastItem = currentPage * itemPage;
    const indexOfFirstItem = indexOfLastItem - itemPage;
    const currentPages = list.slice(indexOfFirstItem, indexOfLastItem);
    let navigate = useNavigate();
    const handleDelete = (id) => {
        deleteCategories(id)
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
        .then((cate) => {
            setList(cate.data);
         })
         .catch((err) => {
             console.log(err);
         })
    }, []);

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

    return (
        <div className='table__product container'>
             <div className='h1__title'>
                <h1>Loại Sản Phẩm</h1>
            </div>
            <div className='button_create'>
                <Link to='/admin/categories/create'>Tạo mới</Link>
                <div className='search__btn'>
                    <input type='text' value={search} onChange={(e) => setSearch(e.target.value)} placeholder='Tìm kiếm theo tên....' />
                </div>
            </div>
            <div className="table_scroll">
                <div className="css_table">
                    <div className="css_thead">
                        <div className="css_tr">  
                            <div className='css_th'>Id</div>
                            <div className='css_th'>Tên loại</div>
                            <div className="css_th"></div>
                            <div className="css_th"></div>
                        </div>
                    </div>
                    <div className="css_tbody">
                        {
                            currentPages.length === 0 ? (
                                <h3>Không có loại hàng nào. <Link to='/admin/categories/create'>Thêm tại đây!</Link></h3>
                            ) :
                            currentPages.map(item => (
                                <div key={item._id} className='css_tr'> 
                                    <div className='css_td' data-label="Id">{item._id}</div>
                                    <div className='css_td' data-label="Name">{item.category_name}</div>
                                    <div className='css_td'><Link to={`/admin/categories/${item._id}/edit`}>Edit</Link></div>
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

export default TableCategoryList;