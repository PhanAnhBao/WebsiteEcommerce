import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getProductAllowCategory } from "../../api/service/category.service";
import { getAll, getProductSlug } from "../../api/service/product.service";
import { manyBuyer } from "../../data/home.data";
import { titleTab } from "../../utils/titleGenerate";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './styles.scss';
import { responsive } from "../../utils/responsive";
import { addToCart } from "../../helpers/cart.helper";
function DetailProduct() {

    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState('');
    const [desc, setDesc] = useState('');
    const [price, setPrice] = useState('');
    const [image1, setImage1] = useState('');
    const [image2, setImage2] = useState('');
    const [item, setItem] = useState();
    const [img1, setImg1] = useState('');
    const [img2, setImg2] = useState('');
    const [img3, setImg3] = useState('');
    const [cate, setCate] = useState('');
    const [id, setId] = useState();
    const [list, setList] = useState([]);
    const [brand, setBrand] = useState('');
    let cart = [];
    const { slug } = useParams();

    useEffect(() => {
        getProductAllowCategory(id)
            .then(res => { setList(res.data); })
            .catch(e => { console.log(e); })
    });

    console.log(list);

    useEffect(() => {
        getProductSlug(slug)
            .then(res => {
                setItem(res.data);
                setName(res.data.product_name);
                setQuantity(res.data.product_quantity);
                setDesc(res.data.product_desc);
                setPrice(res.data.product_price);
                setImage1(res.data.product_image);
                setImage2(res.data.product_image1);
                setImg1(res.data.product_img1);
                setImg2(res.data.product_img2);
                setImg3(res.data.product_img3);
                setCate(res.data.categoryIds.category_name);
                setBrand(res.data.brandIds.brand_name);
                setId(res.data.categoryIds._id);
            })
            .catch((e) => {
                console.log(e);
            })
    }, [slug]);

    const handleAddToCart = (item, cart) => {
        addToCart(item, cart);
    }

    titleTab(name);
    return (
        <div className="detail__products">
            <div className="section--right__details">
                <div className="details--img">
                    <div className="details--img__main">
                        <img src={`/${image1}`} alt="ring" />
                        <span className="discount"></span>
                    </div>

                    <div className="details--img__slide">
                        <img src={`/${img1}`} alt="rings" />
                        <img src={`/${img2}`} alt="rings" />
                        <img src={`/${img3}`} alt="rings" />
                    </div>
                </div>
                <div className="details--info">
                    <h1>{name}</h1>
                    <div className="quality">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 quality__svg" fill="none"
                            viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 quality__svg" fill="none"
                            viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 quality__svg" fill="none"
                            viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 quality__svg" fill="none"
                            viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                        </svg>
                    </div>
                    <p><strong>Giá:</strong> <span>{price.toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}</span></p>
                    <p><strong>Trạng thái:</strong> Còn hàng</p>
                    <p><strong>Size: </strong>
                        <select className="size">
                            <option>100x50</option>
                            <option>120x50</option>
                            <option>150x60</option>
                        </select>
                    </p>
                    <div className="quantity__addtocart">
                        <input type="number" min="1" max="10" placeholder="Số lượng" />
                        <button onClick={() => handleAddToCart(item, cart)} className="border__button radius">Thêm vào giỏ</button>
                    </div>
                    <p><strong>Loại:</strong> {cate}</p>
                    <p><strong>Hiệu:</strong> {brand}</p>
                </div>
            </div>
            <div className="details--info__table">
                <div className="h2_Details">
                    <h2>Mô tả</h2>
                </div>
                <div className="paragraph">
                    <p>
                        {desc}
                    </p>
                </div>

                <div className="h2_Details">
                    <h2>Chi tiết</h2>
                </div>
                <div className="table__details">
                    <table>
                        <tbody>
                            <tr>
                                <td className="bold">Thương hiệu:</td>
                                <td>{brand}</td>
                            </tr>
                            <tr>
                                <td className="bold">Loại sản phẩm:</td>
                                <td>{cate}</td>
                            </tr>
                            <tr>
                                <td className="bold">Loại Gỗ:</td>
                                <td>Gỗ Liêm</td>
                            </tr>
                            <tr>
                                <td className="bold">Chiều dài:</td>
                                <td>120cm</td>
                            </tr>
                            <tr>
                                <td className="bold">Chiều rộng:</td>
                                <td>50cm</td>
                            </tr>
                            <tr>
                                <td className="bold">Chiều cao:</td>
                                <td>100cm</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="related__products">
                <div className="related">
                    <h2 className="related__h2">
                        Liên quan
                    </h2>
                </div>
                <div className="products--orders--row ">
                    <Carousel 
                        responsive={responsive}
                    >
                        {
                            list.map(item => (

                                <div className="products--orders__item">
                                    <div className="products--items__img">
                                        <img src={`/${item.product_image}`} alt="rings" />
                                        <div className="overlay">
                                            <div className="text">
                                                <img src={`/${item.product_image1}`} alt="rings" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="products--items__info">
                                        <a href={`/productdetails/${item.product_slug}`}>{item.product_name}</a>
                                        <p>{item.product_price.toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}</p>
                                        <button onClick={() => handleAddToCart(item, cart)}>Thêm giỏ hàng</button>
                                    </div>
                                </div>
                            ))
                        }
                    </Carousel>

                </div>
            </div>
        </div>
    );
}

export default DetailProduct;