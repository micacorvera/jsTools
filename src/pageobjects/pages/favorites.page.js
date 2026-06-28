import FavoriteItems from "../components/favorite-items.component";
import BasePage from "./base.page"

export default class FavoritesPage extends BasePage {
    constructor(){
        super('/account/favorites')
        this.favItems = new FavoriteItems();
    }
}