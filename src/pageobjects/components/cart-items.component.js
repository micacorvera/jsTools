import BaseComponent from "./base.component"

export default class CartItems extends BaseComponent {
    constructor(){
        super('.container')
    }
    get productTitle(){
        return this.rootEl.$('.product-title')
    }
}