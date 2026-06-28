import { ProductDetailsComponent } from "../components";
import BasePage from "./base.page"

export default class ProductDetails extends BasePage{
    constructor(){
        super('/product')
        this.details = new ProductDetailsComponent()
    }

    async open(id) {
        await browser.url(`${this.path}/${id}`);
    }
}
