import './styles.scss';
import { useEffect, useState } from 'react';
import { create } from '../../../api/service/employees.service';
import { useNavigate } from 'react-router-dom';
function CreateEmployee() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');

    let navigate = useNavigate();


    const handleSubmit = () => {
        const body = {
            admin_name: name,
            admin_email: email,
            admin_password: password,
            admin_phone: phone,
            admin_address: address,
        };

        create(body)
            .then(() => {
                navigate('/admin/employees');
            })
    }

    return (
        <div className="form__create">
            <h1>Tạo Nhân Viên</h1>
            <div class="" >
                <div class="cards">
                    <div class="card-forms">
                        <div class="input">
                            <input type="text" id='admin_name' name='admin_name' class="input-field" value={name} onChange={(e) => setName(e.target.value)} required />
                            <label class="input-label">Tên nhân viên (*)</label>
                        </div>
                        <div class="input">
                            <input type="email" id='admin_email' name='admin_email' class="input-field" value={email} onChange={(e) => setEmail(e.target.value)} required />
                            <label class="input-label">Email (*)</label>
                        </div>
                        <div class="input">
                            <input type="password" id='admin_password' name='admin_password' class="input-field" value={password} onChange={(e) => setPassword(e.target.value)} required />
                            <label class="input-label">Password (*)</label>
                        </div>
                        <div class="input">
                            <input type="text" id='admin_phone' name='admin_phone' class="input-field" value={phone} onChange={(e) => setPhone(e.target.value)} required />
                            <label class="input-label">Số điện thoại (*)</label>
                        </div>
                        <div class="input">
                            <input type="text" id='admin_address' name='admin_address' class="input-field" value={address} onChange={(e) => setAddress(e.target.value)} required />
                            <label class="input-label">Địa chỉ (*)</label>
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

export default CreateEmployee;