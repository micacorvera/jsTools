import BaseComponent from "../base.component"

export default class ProductDetailsComponents extends BaseComponent {
    constructor(){
        super('//div[@class="row my-3"]')
    }

    get productTitle(){
        return this.rootEl.$('//h1[@data-test="product-name"]')
    }
    
    get addToCartBtn(){
        return this.rootEl.$('//button[@id="btn-add-to-cart"]')
    }

    get addToFavsBtn(){
        return this.rootEl.$('//button[@id="btn-add-to-favorites"]')
    }
}