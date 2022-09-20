import './styles.scss';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { getAll as brand } from '../../../api/service/brands.service';
import { create, getAll } from '../../../api/service/products.service';
import { getAll as category } from '../../../api/service/categories.service';
import { useNavigate } from 'react-router-dom';
function Create() {

    const [listBrand, setListBrand] = useState([]);
    const [listCate, setListCate] = useState([]);
    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState('');
    const [desc, setDesc] = useState('');
    const [price, setPrice] = useState('');
    const [image1, setImage1] = useState('');
    const [image2, setImage2] = useState('');
    const [img1, setImg1] = useState('');
    const [img2, setImg2] = useState('');
    const [img3, setImg3] = useState('');
    const [brand_id, setBrand_id] = useState('');
    const [cate_id, setCate_id] = useState('');

    let navigate = useNavigate();


    const handleSubmit = () => {
        const body = {
            product_name: name,
            product_quantity: quantity,
            product_desc: desc,
            product_price: price,
            product_image: image1,
            product_image1: image2,
            product_img1: img1,
            product_img2: img2,
            product_img3: img3,
            categoryIds: cate_id,
            brandIds: brand_id,
        };

        create(body)
            .then(() => {
                navigate('/admin/products');
            })
            .catch((e) => {
                console.log(e);
            })
    }

    useEffect(() => {
        category()
        .then(res => {
            setListCate(res.data);
        })
        .catch((err) => {
            console.log(err);
        })
    }, []);

    useEffect(() => {
        brand()
            .then(res => {
                setListBrand(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }, []);

    return (
        <div className="form__create">
            <h1>Tạo sản phẩm</h1>
            <div class="" >
                <div class="card">
                    <div class="card-form">
                        <div className='bor_div'>
                            <div class="input">
                                <input type="text" id='product_name' name='product_name' class="input-field" value={name} onChange={(e) => setName(e.target.value)} required />
                                <label class="input-label">Tên sản phẩm (*)</label>
                            </div>
                            <div class="input">
                                <input type="number" id='product_quantity' name='product_quantity' class="input-field" value={quantity} onChange={(e) => setQuantity(e.target.value)} required />
                                <label class="input-label">Số lượng (*)</label>
                            </div>
                            <div class="input">
                                <textarea class="input-field" id='product_desc' name='product_desc' value={desc} onChange={(e) => setDesc(e.target.value)} required></textarea>
                                <label class="input-label">Nội dung (*)</label>
                            </div>
                            <div class="input">
                                <input type="number" id='product_price' name='product_price' class="input-field" value={price} onChange={(e) => setPrice(e.target.value)} required />
                                <label class="input-label">Giá (*)</label>
                            </div>
                            <div class="input">
                                <input type="text" id='product_image' name='product_image' class="input-field" value={image1} onChange={(e) => setImage1(e.target.value)} required />
                                <label class="input-label">Hình ảnh 1 (*)</label>
                            </div>
                            <div class="input">
                                <input type="text" id='product_image1' name='product_image1' class="input-field" value={image2} onChange={(e) => setImage2(e.target.value)} required />
                                <label class="input-label">Hình ảnh 2 (*)</label>
                            </div>
                        </div>
                        <div>
                            <div class="input">
                                <input type="text" id='product_img1' name='product_img1' class="input-field" value={img1} onChange={(e) => setImg1(e.target.value)} required />
                                <label class="input-label">Hình ảnh chi tiết 1 (*)</label>
                            </div>
                            <div class="input">
                                <input type="text" id='product_img2' name='product_img2' class="input-field" value={img2} onChange={(e) => setImg2(e.target.value)} required />
                                <label class="input-label">Hình ảnh chi tiết 2 (*)</label>
                            </div>
                            <div class="input">
                                <input type="text" id='product_img3' name='product_img3' class="input-field" value={img3} onChange={(e) => setImg3(e.target.value)} required />
                                <label class="input-label">Hình ảnh chi tiết 3 (*)</label>
                            </div>
                            <div class="input">
                                <select class="input-field" id="categoryIds" name='categoryIds' value={cate_id} onChange={(e) => setCate_id(e.target.value)}>
                                    <option value="#">-- Chọn loại sản phẩm --</option>
                                    {listCate.map(item => (
                                        <option key={item._id} value={item._id}>{item.category_name}</option>
                                    ))}
                                    
                                </select>
                                <label for="categoryIds">Loại sản phẩm(*)</label>
                            </div>
                            <div class="input">
                                <select class="input-field" id="brandIds" name='brandIds' value={brand_id} onChange={(e) => setBrand_id(e.target.value)}>
                                    <option value="#">-- Chọn thương hiệu --</option>
                                    {listBrand.map(item => (
                                        <option key={item._id} value={item._id}>{item.brand_name}</option>
                                    ))}

                                </select>
                                <label for="brandIds">Thương hiệu(*)</label>
                            </div>
                            <div class="action">
                                <button onClick={handleSubmit} class="action-button">Tạo sản phẩm</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>


        </div>
    );
}

export default Create;