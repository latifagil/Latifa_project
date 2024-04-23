import { store } from '../../components/data/store';
import './singleproductpage.css';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

export function Singleproductpage() {
    const { product_id } = useParams();

    const product = store.find(product => product.id == product_id);

    return (
        <section>
            <div className="singleproductpage_inner">
                <img className='single_img' src={product.img}></img>
                <div className="element_products">
                    <h2 className='name_product'>{product.name}</h2>
                    <div className="discrip_products">
                        <p className='product_price'>{product.price} руб.</p>
                        <p className='product_gramm'>{product.body} гр.</p>
                    </div>           
                    <p className='product_gramm'>{product.diskr}</p>
                    <Link to={`/catalog`} className='banner_btn'>Назад</Link>

                </div>
            </div>
        </section>
    );
}