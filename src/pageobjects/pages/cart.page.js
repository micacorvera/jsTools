import BillingComponent from "../components/checkout/billing.component";
import CartItems from "../components/checkout/cart-items.component"
import PaymentComponent from "../components/checkout/payment.component";
import ToastComponent from "../components/checkout/toast.component";
import BasePage from "./base.page"

export default class CartPage extends BasePage {
    constructor(){
        super('/checkout')
        this.cartItems = new CartItems();
        this.toastMsg = new ToastComponent();
        this.payment = new PaymentComponent();
        this.billing = new BillingComponent();
    }
}