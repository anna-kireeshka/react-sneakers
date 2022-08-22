import AppProductCard from "../AppProductCard/AppProductCard";
import styles from "./AppCatalog.module.scss"
import {useState} from "react";

function AppCatalog() {
    let [product, setProduct] = useState([
        {
            image: require('../../assets/productImages/footwear-1.jpg'),
            title: 'Мужские Кроссовки Nike Blazer Mid Suede',
            price: 12999,
        },
        {
            image: require('../../assets/productImages/footwear-2.jpg'),
            title: 'Мужские Кроссовки Nike Air Max 270',
            price: 12999,
        },
        {
            image: require('../../assets/productImages/footwear-3.jpg'),
            title: 'Мужские Кроссовки Nike Blazer Mid Suede',
            price: 6499,
        },
        {
            image: require('../../assets/productImages/footwear-4.jpg'),
            title: 'Кроссовки Puma X Aka Boku Future Rider',
            price: 8999,
        },
    ])
    return (
        <div className={styles.wrapper}>
            <h1 className={styles.catalogName}>Все кроссовки</h1>
            <div className={styles.catalogList}>
                {
                    product.map((el, index) =>
                        <AppProductCard item={el} key={index}/>
                    )
                }
            </div>
        </div>
    );
}

export default AppCatalog;