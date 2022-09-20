import './styles.scss';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { titleTab } from '../../utils/titleGenerate';
import { login } from '../../api/service/customer.service';
function Login() {
    titleTab('Đăng nhập');
    const [dataLogin, setDataLogin] = useState(() => {
        const storage = JSON.parse(localStorage.getItem('client'));
        console.log(storage);
        return storage;
    });

    console.log(dataLogin);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    let navigate = useNavigate();

    const handleSubmit = () => {
        const body = {
            customer_email: email,
            customer_password: password,
        };
        
        login(body)
            .then((res) => {
                console.log(res.data);
                if (res.data.customer_email === email && res.data.customer_password === password) { 
                    setDataLogin(() => {
                        const storage = res.data;
                        const jsonStorage = JSON.stringify(storage);
                        localStorage.setItem('client', jsonStorage);
                        navigate('/');
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
        <div className="login_form">
            <h1>Đăng nhập vào Fego</h1>
            <div class="container">
                <div class="screen">
                    <div class="screen__content">
                        <img src='/images/logo.webp'/>
                        <div class="login">
                            <div class="login__field">
                                <i class="login__icon fas fa-user"></i>
                                <input  name='customer_email' id='customer_email' value={email} onChange={(e) => setEmail(e.target.value)} type="email" class="login__input" placeholder="Email"/>
                            </div>
                            <div class="login__field">
                                <i class="login__icon fas fa-lock"></i>
                                <input name='customer_password' id='customer_password' value={password} onChange={(e) => setPassword(e.target.value)}  type="password" class="login__input" placeholder="Password"/>
                            </div>
                            <button onClick={handleSubmit} class="button login__submit">
                                <span class="button__text">Đăng nhập</span>
                                <i class="button__icon fas fa-chevron-right"></i>
                            </button>
                        </div>
                        <div class="social-login">
                            <p>Chưa có tài khoản. <a href='/register'>Đăng ký tại đây!</a></p>
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