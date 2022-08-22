function AppHeader() {
    return (
        <header className="header">
            <div className="logo-wrapper">
                <div className="logo-wrapper__img">
                    <img src="../assets/logo.png" alt="Логотип" width="40" height="40"/>
                </div>
                <div className="description-block">
                    <h3 className="description-block__name">REACT SNEAKERS</h3>
                    <p className="description-block__name--light">Магазин лучших кроссовок</p>
                </div>
            </div>
            <div className="actions">
                <button className="actions__icon" title="Перейти в корзину">
                    <img src="../assets/icon/card-icon.svg" alt="Корзина" width="18" height="17"/>
                    <span>1205 руб.</span>
                </button>
                <button className="actions__icon" title="Избранное">
                    <img src="../assets/icon/favorites.svg" alt="Избранное"  width="20" height="18"/>
                </button>
                <button className="actions__icon" title="Мой профиль">
                    <img src="../assets/icon/profile.svg" alt="Мой профиль" width="20" height="20"/>
                </button>

            </div>
        </header>
    );
}

export default AppHeader;