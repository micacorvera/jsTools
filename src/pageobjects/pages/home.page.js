import ProductDetailsComponent from "../components/home/product-details.component"
import ProductCardComponent from "../components/home/product-card.component"
import SearchResultsComponent from "../components/home/search-results.component"
import SidebarComponent from "../components/home/sidebar.component"
import BasePage from "./base.page"

export default class HomePage extends BasePage{
    constructor(){
        super('')
        this.productCard = new ProductCardComponent()
        this.productDetails = new ProductDetailsComponent()
        this.sideBar = new SidebarComponent()
        this.searchResults = new SearchResultsComponent()
    }
}