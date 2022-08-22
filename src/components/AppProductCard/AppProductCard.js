import styles from './AppProductCard.module.scss'
import favorites from '../../assets/icon/favorites.svg'
import addIcon from '../../assets/icon/add-icon.svg'

function AppProductCard({item}) {
    return (
        <div className={styles.container}>

            <div className={styles.card}>

                <button className={styles.favoritesIcon} title='Добавить в избранное'><img src={favorites} alt="Избранное"/></button>
                <img src={item.image} alt="Кроссовки" width={185} height={144}/>

                <p className={styles.brandName}>{item.title}</p>
            </div>
            <div>

                <div className={styles.priceContainer}>
                    <span className={styles.priceName}>Цена:</span>
                    <span className={styles.price}>{item.price} руб.</span>
                </div>
                <button title="Добавить в корзину"><img src={addIcon} alt="Добавить в корзин"/></button>
            </div>
        </div>
    );
}

export default AppProductCard;