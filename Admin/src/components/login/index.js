import './styles.scss'
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../../api/service/employees.service';
import { titleTab } from '../../utils/titleGenerate';
function Login() {
    titleTab('Đăng nhập');

    const [dataLogin, setDataLogin] = useState(() => {
        const storage = JSON.parse(localStorage.getItem('login'));
        console.log(storage);
        return storage;
    });

    console.log(dataLogin);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    let navigate = useNavigate();

    const handleSubmit = () => {
        const body = {
            admin_email: email,
            admin_password: password,
        };
        
        login(body)
            .then((res) => {
                if (res.data.admin_email === email &&  res.data.admin_password === password) { 
                    setDataLogin(() => {
                        const storage = res.data;
                        const jsonStorage = JSON.stringify(storage);
                        localStorage.setItem('login', jsonStorage);
                        navigate('/admin');
                        return storage;
                    });
                    
                }
                else {
                    alert('Tài khoản hoặc mật khẩu không đúng!!!');
                }

            })
            .catch(e => {
                console.log(e);
            });
    }
    return (
        <div className="login--admin">
            <h1>Đăng nhập vào admin</h1>
            <div class="container">
                <div class="screen">
                    <div class="screen__content">
                        <div class="login">
                            <div class="login__field">
                                <i class="login__icon fas fa-user"></i>
                                <input  name='admin_email' id='admin_email' value={email} onChange={(e) => setEmail(e.target.value)} type="email" class="login__input" placeholder="Email"/>
                            </div>
                            <div class="login__field">
                                <i class="login__icon fas fa-lock"></i>
                                <input name='admin_password' id='admin_password' value={password} onChange={(e) => setPassword(e.target.value)}  type="password" class="login__input" placeholder="Password"/>
                            </div>
                            <button onClick={handleSubmit} class="button login__submit">
                                <span class="button__text">Đăng nhập</span>
                                <i class="button__icon fas fa-chevron-right"></i>
                            </button>
                        </div>
                        <div class="social-login">
                            <a href='/admin/register'>Đăng ký</a>
                            <div class="social-icons">
                                <a href="#" class="social-login__icon fab fa-instagram"></a>
                                <a href="#" class="social-login__icon fab fa-facebook"></a>
                                <a href="#" class="social-login__icon fab fa-twitter"></a>
                            </div>
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

export default Login;