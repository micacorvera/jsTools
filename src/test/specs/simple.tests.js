import * as chai from 'chai';
import { Key } from 'webdriverio'
const {expect} = chai
const {assert} = chai
const should = chai.should();

import {pages} from "../../pageobjects/index"
/*
describe('Registration Page', () => {
    const registrationPage = pages('registration')
    const registration = registrationPage.registerUser;

    beforeEach( async () =>{
        await registrationPage.open(); 
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
        expect(await registrationPage.isOpen()).to.be.true;
    })
    it('Should register with valid information', async () => {
        await registration.input('birthDate').setValue('2005-06-13');
        await registration.input('telephone').setValue('1122334455');
        await registration.input('email').setValue('johndoe@mail.com');
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
/*
    it('Should login with invalid credentials', async ()=>{
        await logUser.input('email').setValue('johndoe.mail.com')
        await logUser.input('password').setValue('')
        await logUser.loginBtn.click()
        expect(logUser.emailErrorMsg).to.exist
        expect(logUser.emailErrorMsg).to.be.an('object')
        expect(logUser.passwordErrorMsg).to.exist
        expect(logUser.passwordErrorMsg).to.be.an('object')
    })
    */
    it('Should login with valid credentials', async ()=>{
        await logUser.input('email').setValue('johndoe@mail.com')
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

describe('Product details page', async()=>{
        
    const home = pages('home')
    const productDetails = pages('productDetails')
    
    it('Should open products details page', async()=>{
        await home.open()
        const link = await home.productCard.product('Pliers').getAttribute('href');
        const id = link.split('/').pop();
        await productDetails.open(id);
        const title = await productDetails.details.productTitle.getText()
        assert.equal(title, 'Pliers', 'Product title is correct')
    })
    it('Should add item to cart', async()=>{
        const cart = pages('cart')
        expect(await productDetails.isOpen()).to.be.true
        await productDetails.details.addToCartBtn.click()
        await browser.pause(3000);
        await cart.open()
        await cart.cartItems.rootEl.waitForExist({ timeout: 6000 });
        const title = await cart.cartItems.productTitle.getText()
        assert.include(title, 'Pliers', 'Product title is correct')
    })

    it('Should add item to favorites', async()=>{
        const favorites = pages('favorites')
        await home.open()
        const link = await home.productCard.product('Pliers').getAttribute('href');
        const id = link.split('/').pop();
        await productDetails.open(id);
        await productDetails.details.addToFavsBtn.click()
        await browser.pause(3000);
        await favorites.open()
        const title = await favorites.favItems.cardTitle('Pliers').getText()
        assert.include(title, 'Pliers', 'Product title is correct')
    })
})

/*
describe('Favorites page', async()=>{
    const favorites = pages('favorites')

    beforeEach(async()=>{
        const productDetails = pages('productDetails')
        await pages('home').open()
        const link = await pages('home').productCard.product('Hammer').getAttribute('href');
        const id = link.split('/').pop();
        await productDetails.open(id);
        await productDetails.details.addToFavsBtn.click()
        await browser.pause(3000);
        await favorites.open()
        const title = await favorites.favItems.cardTitle('Pliers').getText()
        assert.include(title, 'Pliers', 'Product title is correct')
    })

    it('Should remove item from favorites', async()=>{
        expect(await favorites.isOpen()).to.be.true
        await favorites.favItems.deleteBtn.click()
        expect(favorites.cardTitle).not.to.exist
    })
})

describe('Cart page', async()=>{
    const cart = pages('cart')
    const cartItem = cart.cartItems
    const toastMessage = cart.toastMsg

    beforeEach(async()=>{
        await pages('cart').open()
        await browser.pause(3500);
    })
    it('Should change the item quantity to zero', async()=>{
        await cartItem.productQuantity.setValue(0)
        await browser.keys(Key.Enter)
        const quantity = await cartItem.productQuantity.getValue()
        await quantity.should.equal('1')
        await browser.pause(2000);
        const messageText = await toastMessage.message.getText()
        await assert.include(messageText,"Cantidad del producto actualizada",'Correct message')
    })
    it('Should change the item quantity to a large amount', async()=>{
        await cartItem.productQuantity.setValue(100000000000)
        await browser.keys(Key.Enter)
        const quantity = await cartItem.productQuantity.getValue()
        await quantity.should.equal('99')
        await browser.pause(1500)
        const messageText = await toastMessage.message.getText()
        await assert.include(messageText,"You can order at most 99 of this product",'Correct message')
    })
    it('Should change the item quantity to a negative amount', async()=>{
        await cartItem.productQuantity.setValue(-1)
        await browser.keys(Key.Enter)
        const quantity = await cartItem.productQuantity.getValue()
        await quantity.should.equal('1')
        await browser.pause(2000);
        const messageText = await toastMessage.message.getText()
        await assert.include(messageText,"Cantidad del producto actualizada",'Correct message')
    })
    it('Should leave the same quantity', async()=>{
        await cartItem.productQuantity.click()
        await browser.keys(Key.Enter)
        const quantity = await cartItem.productQuantity.getValue()
        await quantity.should.equal('1')
        await assert.isNotTrue(toastMessage.rootEl.isExisting(),'Message did not appear')
    }) 
})
*/
describe('Checkout', async()=>{
    const cart = pages('cart')

    beforeEach(async()=>{
        await cart.open()
        await cart.cartItems.checkoutBtn(1).click()
        await cart.cartItems.checkoutBtn(2).click()
        await browser.pause(5000)
        await cart.cartItems.houseNumberInput.setValue(3039)
        await browser.keys(Key.Enter)
        await cart.billing.checkoutBtn().click()
        await cart.payment.input('method').selectByAttribute('value','credit-card')
    })
    
    it('Should buy without filling with credit card information', async()=>{
        await cart.payment.finishBtn.click()
        const message = await cart.payment.errorMsg.getText()
        await assert.include(message,"Unknown error",'Correct message')
    })

    it('Should buy filling with invalid credit card information', async()=>{
        await cart.payment.input('cardNumber').setValue(11112222333344)
        await cart.payment.input('expiration').setValue(2026-11)
        await assert.exists(cart.payment.alert, 'Error message appeared')
    })

    it('Should buy filling with valid credit card information',async()=>{
        await cart.payment.input('cardNumber').setValue('1111-2222-3333-4444')
        await cart.payment.input('expiration').setValue('11/2027')
        await cart.payment.input('cvv').setValue(123)
        await cart.payment.input('name').setValue("John Doe")
        await cart.payment.finishBtn.click()
        const message = await cart.payment.successMsg.getText()
        await assert.include(message,"Payment was successful",'Correct message')
    })
})

describe('Product search', async()=>{
    const home = pages('home')
    it('Should search an specific product', async()=>{
        await home.open()
        await home.sideBar.searchInput.setValue('Combination pliers')
        await browser.keys(Key.Enter)
        const result = await home.searchResults.productTitle.getText()
        await assert.equal(result,"Combination Pliers",'Correct result')
    })
})