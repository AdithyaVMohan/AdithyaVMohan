import styles from '../ProductCard/productCard.module.css';

function ProductCard(props) {
  const { product: prod } = props;

  return (
    <div className={styles.productcardwidth}>
      <img className={styles.img} src={prod.image} alt={prod.title} />
      <h3 className={styles.h3}>{prod.title}</h3>
      <p className={styles.p}>{prod.description}</p>
      <div>Rating: {prod.rating.rate} ⭐</div>
      <h3>₹{prod.price}</h3>
    </div>
  );
}

export default ProductCard;