import { store } from '../../components/data/store';
import './catalog.css';
import { Link } from 'react-router-dom';

export function Catalog(){
    return(
        <>
        <div className="container">
            <div className="catalog_inner">
            <h1 className='main-title'>Меню</h1>
            <div className="full_catalo">
            {
                store.map(product => (
                    
                    
                    <article className='products' key={product.id}>
                        <div className="element_prod">
                            <img src={product.img}></img>
                            < h2 className='name_product'>{product.name}</h2>
                            <div className="discrip_products">
                               <p className='product_price'>{product.price} руб.</p>
                               <p className='product_gramm'>{product.body} гр.</p>
                            </div>
                            <Link to={`/catalog/${product.id}`} className='banner_btn'>Перейти</Link>
                        </div>
                    </article>
                  
                    
            ))
            } 
        </div>
      </div>
      </div>
        </>
    )
}