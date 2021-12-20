import { Button } from 'components'
import ElementIcon from 'components/ElementIcon'
import styles from './Card.module.scss'

const Card = ({ item }) => {
  return (
    <div className={styles.card}>
      <img className={styles.image} src={item.image} alt="mock-image" />
      <div className={styles.container}>
        <div className={styles.name}>
          <span className={styles.name__info}>{item.name}</span>
          <span className={styles.name__element}>
            <ElementIcon element={item.category.name} />
          </span>
        </div>
        <div className={styles.detail}>
          <div className={styles.detail__category}>
            <span>{item.name} onyx seeds</span>
            <span className={styles.detail__category__title}>category</span>
          </div>
          <div
            className={`${styles.detail__category} ${styles.detail__category__right}`}
          >
            <span>{item.weight}</span>
            <span className={styles.detail__category__title}>power</span>
          </div>
        </div>
        <div className={styles.price}>
          <span className={styles.price__eth}>000.0000 ETH</span>
          <span className={styles.price__usd}>000.000 USD</span>
        </div>
        <div className={styles.checkout}>
          <Button disabled={item.sold}>Buy Now</Button>
          <Button variant="outline">View Info</Button>
        </div>
      </div>
    </div>
  )
}

export default Card
