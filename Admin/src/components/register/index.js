import './styles.scss';
import { useEffect, useState } from 'react';
import { create } from '../../api/service/employees.service';
import { useNavigate } from 'react-router-dom';
import { titleTab } from '../../utils/titleGenerate';

function Register() {
    titleTab('Đăng ký');
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
            .then((res) => {
                console.log(res.data);
                if (res.data === 'Exist') {
                    alert('Đã tồn tại email!! Hãy nhập mail khác');
                }
                else {
                    alert('Tạo thành công');
                    navigate('/');
                }

            })
            .catch(e => {
                console.log(e);
            })
    }

    return (
        <div className="register--admin">
            <h1>Đăng ký tài khoản</h1>
            <div class="container">
                <div class="screen">
                    <div class="screen__content">
                        <div class="login">
                            <div class="login__field">
                                <i class="login__icon fas fa-user"></i>
                                <input name='admin_name' id='admin_name' value={name} onChange={(e) => setName(e.target.value)} type="text" class="login__input" placeholder="Họ và tên" />
                            </div>
                            <div class="login__field">
                                <i class="login__icon fas fa-user"></i>
                                <input name='admin_email' id='admin_email' value={email} onChange={(e) => setEmail(e.target.value)} type="email" class="login__input" placeholder="Email" />
                            </div>
                            <div class="login__field">
                                <i class="login__icon fas fa-lock"></i>
                                <input name='admin_password' id='admin_password' value={password} onChange={(e) => setPassword(e.target.value)} type="password" class="login__input" placeholder="Password" />
                            </div>
                            <div class="login__field">
                                <i class="login__icon fas fa-user"></i>
                                <input name='admin_phone' id='admin_phone' value={phone} onChange={(e) => setPhone(e.target.value)} type="text" class="login__input" placeholder="Số điện thoại" />
                            </div>
                            <div class="login__field">
                                <i class="login__icon fas fa-user"></i>
                                <input name='admin_address' id='admin_address' value={address} onChange={(e) => setAddress(e.target.value)} type="text" class="login__input" placeholder="Địa chỉ" />
                            </div>
                            <button onClick={handleSubmit} class="button login__submit">
                                <span class="button__text">Đăng Ký</span>
                                <i class="button__icon fas fa-chevron-right"></i>
                            </button>
                        </div>
                    </div>
                    <div class="screen__background">
                        <span class="screen__background__shape screen__background__shape4"></span>
                        <span class="screen__background__shape screen__background__shape3"></span>
                        <span class="screen__background__shape screen__background__shape2"></span>
                        <span class="screen__background__shape screen__background__shape1"></span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;