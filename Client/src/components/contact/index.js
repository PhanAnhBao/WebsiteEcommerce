import './styles.scss';
import {titleTab} from '../../utils/titleGenerate'


function Contact() {
    titleTab('Liên hệ');
    return (
        <div className='contact'>
            <section class="container signup">
                <div class="content">
                    <h1>Liên hệ với chúng tôi</h1>
                </div>
                <div class="map__company">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31351.913914428504!2d106.70015975879127!3d10.812134957018058!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175289f02a8eae9%3A0x34ec9d90e055cde3!2zQsOsbmggVGjhuqFuaCwgVGjDoG5oIHBo4buRIEjhu5MgQ2jDrSBNaW5oLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1645317413636!5m2!1svi!2s" width="100%" height="450" className="map" allowfullscreen="" loading="lazy"></iframe>
                </div>
                <div class="main">
                    <div class="heading">
                        <h2>Nhập tin nhắn của bạn</h2>
                    </div>
                    <div class="main--input">
                        <input type="text" placeholder="Họ và tên" />
                        <input type="text" placeholder="Email" />
                        <input type="text" placeholder="Số điện thoại" />
                            <textarea placeholder="Tin nhắn ..."></textarea>
                    </div>
                    <div class="main--button ">
                        <button class="button_signin">Gửi</button>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Contact;