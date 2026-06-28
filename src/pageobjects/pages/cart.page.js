import CartItems from "../components/cart-items.component"
import BasePage from "./base.page"

export default class CartPage extends BasePage {
    constructor(){
        super('/checkout')
        this.cartItems = new CartItems();
    }
}