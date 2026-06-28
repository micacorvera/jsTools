import ProductDetailsComponents from "../components/product-details.component";
import BasePage from "./base.page"

export default class ProductDetails extends BasePage{
    constructor(){
        super('/product')
        this.details = new ProductDetailsComponents()
    }

    async open(id) {
        const url= await browser.url(`${this.url}/${id}`);
        await this.details.rootEl.waitForExist({ timeout: 5000 });
    }
}
