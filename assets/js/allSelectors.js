
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
            productBoxElm
        }

    }
}


export default selectors