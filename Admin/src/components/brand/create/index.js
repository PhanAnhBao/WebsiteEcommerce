import './styles.scss';
import { useEffect, useState } from 'react';
import { create } from '../../../api/service/brands.service';
import { useNavigate } from 'react-router-dom';
function CreateBrand() {
    const [name, setName] = useState('');

    let navigate = useNavigate();

    const handleSubmit = () => {
        const body = {
            brand_name: name,
        };

        create(body)
            .then(() => {
                navigate('/admin/brands');
            })
    }

    return (
        <div className="form__create">
            <h1>Tạo Thương Hiệu</h1>
            <div class="" >
                <div class="cards">
                    <div class="card-forms">
                        <div class="input">
                            <input type="text" id='brand_name' name='brand_name' class="input-field" value={name} onChange={(e) => setName(e.target.value)} required />
                            <label class="input-label">Tên thương hiệu (*)</label>
                        </div>

                        <div class="action">
                            <button onClick={handleSubmit} class="action-button">Tạo</button>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
}

export default CreateBrand;