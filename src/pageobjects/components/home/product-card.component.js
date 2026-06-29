import BaseComponent from "../base.component"

export default class ProductCardComponent extends BaseComponent{
    constructor(){
        super('//div[@class="container"]')
    }

    product(name) {
        return $(
        `//a[.//h5[@data-test="product-name" and normalize-space()="${name}"]]`
        );
    }

    
}