import Logo from '../../assets/logo.png'
import FavoritesIcon from '../../assets/icon/favorites.svg'
import ProfileIcon from '../../assets/icon/profile.svg'
import CardIcon from '../../assets/icon/card-icon.svg'
import styles from './AppHeader.module.scss'

function AppHeader() {
    return (
        <header className={styles.header}>
            <div className={styles.logoWrapper}>
                <div className={styles.logoWrapperImg}>
                    <img src={Logo} alt="Логотип" width="40" height="40"/>
                </div>
                <div className={styles.descriptionBlock}>
                    <h3 className={styles.descriptionBlockName}>REACT SNEAKERS</h3>
                    <p className={styles.descriptionBlockLight}>Магазин лучших кроссовок</p>
                </div>
            </div>
            <div className={styles.actions}>
                <button className={styles.actionsIcon} title="Перейти в корзину">
                    <img src={CardIcon} alt="Корзина" width="18" height="17"/>
                    <span className={styles.price}>1205 руб.</span>
                </button>
                <button className={styles.actionsIcon} title="Избранное">
                    <img src={FavoritesIcon} alt="Избранное" width="20" height="18"/>
                </button>
                <button className={styles.actionsIcon} title="Мой профиль">
                    <img src={ProfileIcon} alt="Мой профиль" width="20" height="20"/>
                </button>

            </div>
        </header>
    );
}

export default AppHeader;