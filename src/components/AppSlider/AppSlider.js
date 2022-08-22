import styles from './AppSlider.module.scss'
import firstSliderImg from '../../assets/slider1.png'
import BrandImg from '../../assets/brands-slider.png'

function AppSlider() {
    return (
        <div className={styles.sliderContainer}>
            <div className={styles.sliderList}>
                <div className={styles.description}>
                    <img src={BrandImg} alt="Бренды" width="99" height="40" className={styles.brandsImg}/>
                    <p className={styles.brandName}><span className={styles.brandNameGreen}>Stan Smith</span>,<br/>Forever!</p>
                    <button className={styles.button}>Купить</button>
                </div>
                <img
                     src={firstSliderImg}
                     alt="Кроссовки"
                     width="641"
                     height="300"
                />
            </div>
        </div>
    );
}

export default AppSlider;