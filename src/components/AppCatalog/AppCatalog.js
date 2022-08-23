import AppProductCard from "../AppProductCard/AppProductCard";
import styles from "./AppCatalog.module.scss"
import { productList } from '../../types.js'
import {useState} from "react";

function AppCatalog() {
    let [product, setProduct] = useState(productList)
    return (
        <div className={styles.wrapper}>
            <h1 className={styles.catalogName}>Все кроссовки</h1>
            <div className={styles.catalogList}>
                {
                    product.map((el) =>
                        <AppProductCard item={el} key={el.id}/>
                    )
                }
            </div>
        </div>
    );
}

export default AppCatalog;