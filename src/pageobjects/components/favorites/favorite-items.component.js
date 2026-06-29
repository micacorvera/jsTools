import BaseComponent from "../base.component"

export default class FavoriteItems extends BaseComponent {
    constructor(){
        super('.row.no-gutters')
    }
    cardTitle(name){
        return $(`//div[.//h5[@data-test="product-name" and normalize-space()="${name}"]]`)
    }
    get deleteBtn(){
        return this.rootEl.$('[data-test="delete"]')
    }
}