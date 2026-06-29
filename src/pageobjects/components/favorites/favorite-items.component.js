import BaseComponent from "../base.component"

export default class FavoriteItems extends BaseComponent {
    constructor(){
        super('//div[@class="row no-gutters"]')
    }
    cardTitle(name){
        return $(`//div[.//h5[@data-test="product-name" and normalize-space()="${name}"]]`)
    }
    get deleteBtn(){
        return this.rootEl.$('//button[@data-test="delete"]')
    }
}