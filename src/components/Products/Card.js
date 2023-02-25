import { Link } from "react-router-dom"
import styles from "styles/Products/card.module.css"

function Card(props) {
  return (
    <Link to={`/product/${props.product.id}`} className={`col bg-white p-3 m-3 text-dark d-flex flex-column justify-content-center text-decoration-none ${styles.product}`}>
      <div className="text-center fs-5 mb-3">{props.product.name}</div>
      <div 
        className={`${styles.product_img} ${'img'}`} 
        style={{'backgroundImage': `url(${props.image})`}}
      >
      </div>
    </Link>
  )
}
export default Card