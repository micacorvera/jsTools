import BaseComponent from "./base.component"

export default class ProductDetailsComponents extends BaseComponent {
    constructor(){
        super('.col-md-6')
    }

    get productTitle(){
        return this.rootEl.$('[data-test="product-name"]')
    }
    
    get addToCartBtn(){
        return this.rootEl.$('#btn-add-to-cart')
    }

    get addToFavsBtn(){
        return this.rootEl.$('#btn-add-to-favorites')
    }
}