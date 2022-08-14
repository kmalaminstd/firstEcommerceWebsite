
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

        return{
            allProductDiv,
            genderFilterELm,
            mensShoppingPageElm,
            womenShoppingPageElm,
            bestSaleBtnElm,
            summerSaleBtnElm,
            newInBtnElm,
            tabProductElm
        }

    }
}


export default selectors