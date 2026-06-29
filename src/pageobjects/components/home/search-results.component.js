import BaseComponent from "../base.component"

export default class SearchResultsComponent extends BaseComponent{
    constructor(){
        super('//div[@data-test="search_completed"]')
    }

    get productTitle(){
        return this.rootEl.$('//h5[@data-test="product-name"]')
    }
}