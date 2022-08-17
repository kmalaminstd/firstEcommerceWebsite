
const selectors = {
    allSelectors(){
        const allProductDiv = document.querySelector('.allProducts')
        const genderFilterELm = document.querySelector('#genderFilter')
        const mensShoppingPageElm = document.querySelector('.mensProduct .allProducts')
        const womenShoppingPageElm = document.querySelector('.womensProduct .allProducts')
        const bestSaleBtnElm = document.querySelector('#bestSaleBtn')
        const summerSaleBtnElm = document.querySelector('#summerSaleBtn')
        const newInBtnElm = document.querySelector('#newInBtn')
        const tabProductElm = document.querySelector('.productSumm')
        const allTabBtnElm = document.querySelectorAll('.product-tab button')
        const allBtnDivElm = document.querySelector('.tab-buttons')
        const indexNavMainMenuElm = document.querySelector('#mainMenu')
        const indexnavSubMenuElm = document.querySelector('#submenu')
        const productBoxElm = document.querySelector('.productBox');
        const cartedProductElm = document.querySelector('.fullCart')
        // const productCloseBtn = document.querySelectorAll('.')
        const productsDetPageElm = document.querySelector('.cart-products')
        const addToCartBtnElm = document.querySelector('#checkOutBtn')
        const productSizeOption = document.querySelector('#productSize')
        const productColorOption = document.querySelector('#productColor')

        return{
            allProductDiv,
            genderFilterELm,
            mensShoppingPageElm,
            womenShoppingPageElm,
            bestSaleBtnElm,
            summerSaleBtnElm,
            newInBtnElm,
            tabProductElm,
            allTabBtnElm,
            allBtnDivElm,
            indexNavMainMenuElm,
            indexnavSubMenuElm,
            productBoxElm,
            cartedProductElm,
            productsDetPageElm,
            addToCartBtnElm,
            productSizeOption,
            productColorOption
        }

    }
}


export default selectors