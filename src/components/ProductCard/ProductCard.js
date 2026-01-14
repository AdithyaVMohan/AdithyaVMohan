import { Link } from 'react-router-dom';
import styles from './productCard.module.css';

function ProductCard(props) {
  const { product: prod } = props;

  return (
    <div className={styles.productcardwidth}>
      <img className={styles.img} src={prod.image} alt={prod.title} />
      <div>
        <Link to={"/products/"+prod.id}><h6 className={styles.h6}>{prod.title}</h6></Link>
      </div>
      <p className={styles.p}>{prod.description}</p>
      <div>Rating: {prod.rating.rate} ⭐</div>
      <h5>₹{prod.price}</h5>
    </div>
  );
}

export default ProductCard;