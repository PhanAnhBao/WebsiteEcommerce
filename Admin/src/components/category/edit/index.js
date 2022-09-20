import './styles.scss';
import { useEffect, useState } from 'react';
import { edit, getCatgoriesById } from '../../../api/service/categories.service';
import { useNavigate, useParams } from 'react-router-dom';
function EditCategory() {
    const [name, setName] = useState('');
    const [slug, setSlug] = useState('');
    const [pro, setPro] = useState('');

    const {id} = useParams();
   
    let navigate = useNavigate();

    const handleSubmit = (id) => {
        const body = {
            category_name: name,
            category_slug: slug,
            products: pro
        };

        edit(id, body)
            .then(() => {
                navigate('/admin/categories');
            })
    }

    useEffect(() => {
        getCatgoriesById(id)
        .then(res => {
            setName(res.data.category_name);
            setSlug(res.data.category_slug);
        })
        .catch((e) => {
            console.log(e);
        })
    }, [])

    return (
        <div className="form__create">
            <h1>Sửa Loại Sản Phẩm</h1>
            <div class="" >
                <div class="cards">
                    <div class="card-forms">
                        <div class="input">
                            <input type="text" id='category_name' name='category_name' class="input-field" value={name} onChange={(e) => setName(e.target.value)} required />
                            <label class="input-label">Tên loại sản phẩm (*)</label>
                        </div>
                        <div class="input">
                            <input type="text" id='category_slug' name='category_slug' class="input-field" value={slug} onChange={(e) => setSlug(e.target.value)} required />
                            <label class="input-label">Slug (*)</label>
                        </div>
                        <div class="action">
                            <button onClick={() => handleSubmit(id)} class="action-button">Sửa</button>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
}

export default EditCategory;