import FavoriteItems from "../components/favorite-items.component";
import CartPage from "./cart.page";
import FavoritesPage from "./favorites.page";
import HomePage from "./home.page";
import LoginPage from "./login.page";
import MyAccountPage from "./my-account.page";
import ProductDetails from "./product-details.page";
import RegistrationPage from "./registration.page";

export function pages(name){
    const items = {
        registration: new RegistrationPage(),
        login: new LoginPage(),
        account: new MyAccountPage(),
        productDetails: new ProductDetails(),
        cart: new CartPage(),
        favorites: new FavoritesPage(),
        home: new HomePage()
    }
    return items[name]
}