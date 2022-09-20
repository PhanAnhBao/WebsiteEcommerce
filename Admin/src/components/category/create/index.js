import './styles.scss';
import { useEffect, useState } from 'react';
import { create} from '../../../api/service/categories.service';
import { useNavigate } from 'react-router-dom';
function CreateCategory() {
    const [name, setName] = useState('');

    let navigate = useNavigate();


    const handleSubmit = () => {
        const body = {
            category_name: name,
        };

        create(body)
            .then(() => {
                navigate('/admin/categories');
            })
    }

    return (
        <div className="form__create">
            <h1>Tạo Loại Sản phẩm</h1>
            <div class="" >
                <div class="cards">
                    <div class="card-forms">
                        <div class="input">
                            <input type="text" id='category_name' name='category_name' class="input-field" value={name} onChange={(e) => setName(e.target.value)} required />
                            <label class="input-label">Tên loại sản phẩm (*)</label>
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

export default CreateCategory;