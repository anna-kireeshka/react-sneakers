import AppHeader from "./components/AppHeader/AppHeader";
import AppSlider from "./components/AppSlider/AppSlider";
import AppCatalog from "./components/AppCatalog/AppCatalog";

function App() {
    return (
        <div className="wrapper">
            <AppHeader/>
            <AppSlider />
            <AppCatalog />
        </div>
    );
}

export default App;
