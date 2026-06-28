import * as chai from 'chai';

const {expect} = chai

import {pages} from "../../pageobjects/index"

/*describe('Registration Page', () => {
    const registration = pages('registration').registerUser;

    beforeEach( async () =>{
        await browser.refresh()
        await browser.pause(200)
        await pages('registration').open(); 
        await registration.input('name').setValue('John');
        await registration.input('surname').setValue('Doe');
        await registration.input('country').selectByAttribute('value','AR')
        await registration.input('postalCode').setValue('1437');
        await registration.input('number').setValue('3039');
        const street = registration.input('street')
        await browser.waitUntil(
            async () => (await street.getValue()) !== '',
            {
                timeout: 5000,
                interval: 200,
                timeoutMsg: 'Street was not filled automatically'
            }
        );
    })

    it('Should register with invalid information', async () => {
        await registration.input('birthDate').setValue('13-06-2005');
        await registration.input('telephone').setValue('John');
        await registration.input('email').setValue('johndoemail.com');
        await registration.input('password').setValue('invalidpass');
        await registration.registerBtn.click();
        expect(await pages('registration').isOpen()).to.be.true;
    })
    it('Should register with valid information', async () => {
        await registration.input('birthDate').setValue('2005-06-13');
        await registration.input('telephone').setValue('1122334455');
        await registration.input('email').setValue('johndo@mail.com');
        await registration.input('password').setValue('ValidPa$s1');
        await registration.registerBtn.click();
        await browser.waitUntil(
            async () => (await pages('login').isOpen()) === true,
            {
                timeout: 5000,
                interval: 200,
                timeoutMsg: 'Login page did not open'
            }
        );
    })
})

*/
describe ( 'login page', ()=>{

    const loginPage = pages('login');
    const logUser = loginPage.logUser;
    beforeEach(async()=>{
        await loginPage.open();
    })

    it('Should login with invalid credentials', async ()=>{
        await logUser.input('email').setValue('johndoe.mail.com')
        await logUser.input('password').setValue('')
        await logUser.loginBtn.click()
        expect(logUser.emailErrorMsg).to.exist
        expect(logUser.emailErrorMsg).to.be.an('object')
        expect(logUser.passwordErrorMsg).to.exist
        expect(logUser.passwordErrorMsg).to.be.an('object')
    })
    
    it('Should login with valid credentials', async ()=>{
        await logUser.input('email').setValue('johndo@mail.com')
        await logUser.input('password').setValue('ValidPa$s1')
        await logUser.loginBtn.click()
        await browser.waitUntil(
            async () => (await pages('account').isOpen()) === true,
            {
                timeout: 5000,
                interval: 200,
                timeoutMsg: 'Account page did not open'
            }
        );
    })
})


describe('Home page', async()=>{
    const home = pages('home')

    beforeEach(async()=>{
        await home.open()
    })

    const productDetails = pages('productDetails')
    it('Should open products details page', async()=>{
        const link = await home.productCard.product('Pliers').getAttribute('href');
        const id = link.split('/').pop();
        await productDetails.open(id);
        const title = await productDetails.details.productTitle.getText()
        console.log(title)
        expect(await title).to.equal('Pliers')
    })
    /*
    it('Should add item to cart', async()=>{
        await pages('productDetails').details.addToCartBtn.click()
        await pages('cart').open()
        expect(pages('cart').productTitle).to.be('Pliers')
    })

    it('Should add item to favorites', async()=>{
        await pages('productDetails').details.addToFavsBtn.click()
        await pages('favorites').open()
        expect(pages('favorites').cardTitle).to.be('Pliers')
    })

    it('Should remove item from favorites', async()=>{
        expect(await pages('favorites').isOpen()).to.be.true
        await pages('favorites').favItems.deleteBtn.click()
        expect(pages('favorites').cardTitle).not.to.exist
    })*/
})

/*describe('Cart page', async()=>{
    beforeEach(async()=>{
        pages('cart').open()
    })
    it('Should change the item quantity', async()=>{
        await pages('cart').cartItems.productQuantity.setValue(0)
        expect (await pages('cart').cartItems.productQuantity.getValue()).to.equal(1)
    })
    it('Should change the item quantity', async()=>{
        await pages('cart').cartItems.productQuantity.setValue(100000000000)
        expect (await pages('cart').cartItems.productQuantity.getValue()).to.equal(99)
    })
    it('Should change the item quantity', async()=>{
        await pages('cart').cartItems.productQuantity.setValue(-1)
        expect (await pages('cart').cartItems.productQuantity.getValue()).to.equal(1)
    })
    it('Should change the item quantity', async()=>{
        await pages('cart').cartItems.productQuantity.setValue(1)
        expect (await pages('cart').cartItems.productQuantity.getValue()).to.equal(1)
    })
})
*/