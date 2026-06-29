import BaseComponent from "../base.component"

export default class CartItems extends BaseComponent {
    constructor(){
        super('//div[@class="wizard-steps horizontal"]')
    }
    get productTitle(){
        return this.rootEl.$('//span[@data-test="product-title"]')
    }

    get productQuantity(){
        return this.rootEl.$('//input[@data-test="product-quantity"]')
    }

    checkoutBtn(number){
        return this.rootEl.$(`//button[@data-test="proceed-${number}"]`)
    }

    get houseNumberInput(){
        return this.rootEl.$('//input[@id="house_number"]')
    }

}