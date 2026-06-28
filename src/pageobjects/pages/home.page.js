import { ProductDetailsComponent } from "../components"
import ProductCardComponent from "../components/product-card.component"
import BasePage from "./base.page"

export default class HomePage extends BasePage{
    constructor(){
        super('')
        this.productCard = new ProductCardComponent()
        this.productDetails = new ProductDetailsComponent()
    }
}