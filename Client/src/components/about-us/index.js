import { titleTab } from '../../utils/titleGenerate';
import './styles.scss';

function AboutUs() {
    titleTab('Giới thiệu');
    return (
        <div className="about-us">
            <section>
                <div className="about__banner">
                    <img src="./images/banner__04.jpg" alt="banner" />
                    <div className="about__intro container">
                        <div className="img_heading">
                            <h1>Fego Shop</h1>
                        </div>
                        <div className="img_info">
                            <p>FEGO là một đơn vị cung cấp các "Concept" về không gian sống dành cho những người trẻ đang sống, làm việc và học tập tại các thành phố, đô thị lớn. Các sản phẩm của FEGO đều mang hơi thở thiên nhiên về ngôi nhà của bạn, hướng đến sự đa dụng trong đời sống và giúp bạn kiến tạo nên một phong cách sống của riêng bạn.
                            </p>
                            <p>
                            FEGO tin rằng mỗi người trẻ đều đang cống hiến hết mình cho sự nghiệp của bản thân, gia đình và đóng góp cho sự phát triển chung của xã hội, đất nước, và Bạn, chính Bạn, xứng đáng có cho mình một nơi chốn, một căn phòng hoặc một ngôi nhà nhỏ để trở về sau những cố gắng đó, để hồi phục, thư giãn và chữa lành, để tận hưởng một cuộc sống tốt đẹp từ những điều gần gũi và nhỏ bé nhất.
                            </p>
                            <p>FEGO hiện đang hoạt động 100% online, với đội ngũ 15 nhân sự tận dụng sự phát triển của các kênh bán hàng online để có thể đưa sản phẩm của FEGO đến tận tay khách hàng trên toàn quốc, FEGO cũng tập trung vào việc xây dựng hình ảnh sản phẩm, không gian 1 cách thực tế và gần gũi nhất để khách hàng có thể dễ dàng cảm nhận được giá trị mà FEGO có thể mang lại.</p>
                        </div>
                    </div>
                </div>
                {/* <div className="about__intro__mobile container hidden">
                    <div className="img_heading--mobile">
                        <h1>KC-SHOP</h1>
                    </div>
                    <div className="img_info--mobile">
                        <p>Eiusmod sit est sit irure ex reprehenderit labore in in eu. Cupidatat commodo fugiat
                            exercitation qui labore dolore laboris irure excepteur laborum pariatur anim. Elit aliquip
                            incididunt sint culpa laborum Lorem nisi tempor occaecat ad tempor ullamco.</p>
                        <p>Reprehenderit tempor nisi eu sint pariatur nostrud commodo consequat dolor nostrud. Officia
                            qui et commodo culpa
                            deserunt est enim laboris. Ex quis irure eu anim cupidatat mollit eiusmod reprehenderit
                            consectetur irure dolor
                            labore elit mollit.
                            Laconic overheard dear woodchuck wow this outrageously taut beaver hey hello far meadowlark
                            imitatively egregiously
                            hugged that yikes minimally unanimous pouted flirtatiously as beaver beheld above forward
                            energetic across.</p>
                        <p>Ea tempor esse velit in. Sit do mollit do incididunt id sit ipsum. Cillum magna ullamco do
                            exercitation laborum eu. Amet eiusmod nostrud proident eu est ut dolor exercitation culpa
                            ex. Laborum quis cillum magna sit aliqua nisi commodo.</p>
                    </div>
                </div> */}
                <div className="about--info">
                    <div className="info__left">
                        <div className="img_banner">
                            <img src="/images/banner__05.jpg" alt="banner" />
                        </div>
                        <div className="info__p">
                            <h1>Fego-shop</h1>

                            <p>
                            FEGO là một đơn vị cung cấp các "Concept" về không gian sống dành cho những người trẻ đang sống, làm việc và học tập tại các thành phố, đô thị lớn. Các sản phẩm của FEGO đều mang hơi thở thiên nhiên về ngôi nhà của bạn, hướng đến sự đa dụng trong đời sống và giúp bạn kiến tạo nên một phong cách sống của riêng bạn.


                            </p>
                        </div>
                    </div>

                    <div className="info__right">
                        <div className="info__abouts info__p">
                            <h1>Fego-shop</h1>

                            <p>FEGO tin rằng mỗi người trẻ đều đang cống hiến hết mình cho sự nghiệp của bản thân, gia đình và đóng góp cho sự phát triển chung của xã hội, đất nước, và Bạn, chính Bạn, xứng đáng có cho mình một nơi chốn, một căn phòng hoặc một ngôi nhà nhỏ để trở về sau những cố gắng đó, để hồi phục, thư giãn và chữa lành, để tận hưởng một cuộc sống tốt đẹp từ những điều gần gũi và nhỏ bé nhất.</p>
                        </div>

                        <div className="img_banner">
                            <img src="/images/banner__06.jpg" alt="banner" />
                        </div>
                    </div>

                    <div className="info__left">
                        <div className="img_banner">
                            <img src="/images/banner.jpg" alt="banner" />
                        </div>
                        <div className="info__p">
                            <h1>Fego-shop</h1>

                            <p>
                            FEGO hiện đang hoạt động 100% online, với đội ngũ 15 nhân sự tận dụng sự phát triển của các kênh bán hàng online để có thể đưa sản phẩm của FEGO đến tận tay khách hàng trên toàn quốc, FEGO cũng tập trung vào việc xây dựng hình ảnh sản phẩm, không gian 1 cách thực tế và gần gũi nhất để khách hàng có thể dễ dàng cảm nhận được giá trị mà FEGO có thể mang lại.
                            </p>
                        </div>

                    </div>
                </div>


                <div className="container about--info__mobile hidden">
                    <div className="img_banner--mobile">
                        <img src="./images/pexels-steven-arenas-618701.jpg" alt="banner" />
                    </div>
                    <div className="info__p--mobile">
                        <h1>KC-Shop</h1>

                        <p>Reprehenderit tempor nisi eu sint pariatur nostrud commodo consequat dolor nostrud. Officia
                            qui et commodo culpa
                            deserunt est enim laboris. Ex quis irure eu anim cupidatat mollit eiusmod reprehenderit
                            consectetur irure dolor
                            labore elit mollit.
                            Laconic overheard dear woodchuck wow this outrageously taut beaver hey hello far meadowlark
                            imitatively egregiously
                            hugged that yikes minimally unanimous pouted flirtatiously as beaver beheld above forward
                            energetic across.</p>
                    </div>
                    <div className="img_banner--mobile">
                        <img src="./images/pexels-mídia-1454171.jpg" alt="banner" />
                    </div>
                    <div className="info__p--mobile">
                        <h1>KC-Shop</h1>

                        <p>Reprehenderit tempor nisi eu sint pariatur nostrud commodo consequat dolor nostrud. Officia
                            qui et commodo culpa
                            deserunt est enim laboris. Ex quis irure eu anim cupidatat mollit eiusmod reprehenderit
                            consectetur irure dolor
                            labore elit mollit.
                            Laconic overheard dear woodchuck wow this outrageously taut beaver hey hello far meadowlark
                            imitatively egregiously
                            hugged that yikes minimally unanimous pouted flirtatiously as beaver beheld above forward
                            energetic across.</p>
                    </div>

                    <div className="img_banner--mobile">
                        <img src="./images/pexels-the-glorious-studio-9953658.jpg" alt="banner" />
                    </div>
                    <div className="info__p--mobile">
                        <h1>KC-Shop</h1>

                        <p>Reprehenderit tempor nisi eu sint pariatur nostrud commodo consequat dolor nostrud. Officia
                            qui et commodo culpa
                            deserunt est enim laboris. Ex quis irure eu anim cupidatat mollit eiusmod reprehenderit
                            consectetur irure dolor
                            labore elit mollit.
                            Laconic overheard dear woodchuck wow this outrageously taut beaver hey hello far meadowlark
                            imitatively egregiously
                            hugged that yikes minimally unanimous pouted flirtatiously as beaver beheld above forward
                            energetic across.</p>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default AboutUs;