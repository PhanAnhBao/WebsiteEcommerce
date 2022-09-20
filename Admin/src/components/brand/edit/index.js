import './styles.scss';
import { useEffect, useState } from 'react';
import { edit, getBrandsById } from '../../../api/service/brands.service';
import { useNavigate, useParams } from 'react-router-dom';
function EditBrand() {
    const [name, setName] = useState('');
    const [slug, setSlug] = useState('');


    const {id} = useParams();
   
    let navigate = useNavigate();

    const handleSubmit = (id) => {
        const body = {
            brand_name: name,
            brand_slug: slug,
        };

        edit(id, body)
            .then(() => {
                navigate('/admin/brands');
            })
    }

    useEffect(() => {
        getBrandsById(id)
        .then(res => {
            setName(res.data.brand_name);
            setSlug(res.data.brand_slug);
        })
        .catch((e) => {
            console.log(e);
        })
    }, [])

    return (
        <div className="form__create">
            <h1>Sửa Thương Hiệu</h1>
            <div class="" >
                <div class="cards">
                    <div class="card-forms">
                        <div class="input">
                            <input type="text" id='brand_name' name='brand_name' class="input-field" value={name} onChange={(e) => setName(e.target.value)} required />
                            <label class="input-label">Tên thương hiệu (*)</label>
                        </div>
                        <div class="input">
                            <input type="text" id='brand_slug' name='brand_slug' class="input-field" value={slug} onChange={(e) => setSlug(e.target.value)} required />
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

export default EditBrand;