import { Link, useParams } from 'react-router-dom';
import { brands, category } from '../../data/header.data';
import { getAll } from '../../api/service/category.service';
import { getAllBrand } from '../../api/service/brands.service';
import './styles.scss';
import { useEffect, useState } from 'react';

function Sidebar() {
    const [listCate, setListCate] = useState([]);
    const [listBrand, setListBrand] = useState([]);

    useEffect(() => {
        getAll()
        .then(res => {
            setListCate(res.data);
        })
        .catch(e => {
            console.log(e);
        })
    }, []);


    useEffect(() => {
        getAllBrand()
        .then(res => {
            setListBrand(res.data);
        })
        .catch(e => {
            console.log(e);
        })
    }, []);


    
    return (
        <div className="section--left">
            <div className="catalog--categories">
                <div className="catalog">
                    <h2 className="catalog__h2">
                        Loại
                    </h2>
                </div>
                <div className="categories">
                    <ul>
                        {
                            listCate.map(item => (
                                <li key={item._id}><a href={`/category/${item._id}`}>{item.category_name}</a></li>
                            ))
                        }
                    </ul>
                </div>
            </div>
            <div className="catalog--brands">
                <div className="brand">
                    <h2 className="brand__h2">
                        Hiệu
                    </h2>
                </div>
                <div className="brands">
                    <ul>
                        {
                            listBrand.map(item => (
                                <li key={item._id}><a href={`/brand/${item._id}`}>{item.brand_name}</a></li>
                            ))
                        }
                    </ul>
                </div>
            </div>
            <div className="banner--img">
                <img src="/images/banner__col.jpg" alt="banner_06" />
                <img src="/images/banner__col1.jpg" alt="banner_07" />
            </div>
        </div>
    );
}

export default Sidebar;