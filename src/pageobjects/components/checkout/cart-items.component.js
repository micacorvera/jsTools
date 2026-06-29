import BaseComponent from "../base.component"

export default class CartItems extends BaseComponent {
    constructor(){
        super('.wizard-steps.horizontal')
    }
    get productTitle(){
        return this.rootEl.$('[data-test="product-title"]')
    }

    get productQuantity(){
        return this.rootEl.$('[data-test="product-quantity"]')
    }

    checkoutBtn(number){
        return this.rootEl.$(`[data-test="proceed-${number}"]`)
    }

    get houseNumberInput(){
        return this.rootEl.$('#house_number')
    }

}