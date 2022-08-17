import selectors from "./allSelectors.js"
import allproducts from "./allproduct.js"
import getId from "./gettingId.js"
import addToCart from "./addProductInCart.js"

import navClickBtn from "./navClick.js"


const tab = {
    tabSystem(){
        const {
            bestSaleBtnElm,
            summerSaleBtnElm,
            newInBtnElm,
            tabProductElm
            
        } = selectors.allSelectors()

        // tabProductElm.innerHTML = ''

        const numberArr = []

        allproducts.find( elem =>{
            // tabProductElm.innerHTML = ''
            numberArr.push(elem.SoldTime)
            numberArr.sort((a,b) => a - b);
            if(numberArr[numberArr.length-1] === elem.SoldTime){
                showTabProduct.showPorduct(elem)
            }
            
        })        

       bestSaleBtnElm.addEventListener('click', () => {
        tabProductElm.innerHTML = ''
        bestSaleBtnElm.style.fontWeight = 'bold'
        newInBtnElm.style.fontWeight = 'normal'
        summerSaleBtnElm.style.fontWeight = 'normal'
        allproducts.find( elem =>{
           
            numberArr.push(elem.SoldTime)
            numberArr.sort((a,b) => a - b);
            if(numberArr[numberArr.length-1] === elem.SoldTime){
                showTabProduct.showPorduct(elem)
            }
            })
       })

       // summer sale product tab

       summerSaleBtnElm.addEventListener('click', () => {
        tabProductElm.innerHTML = ''
        summerSaleBtnElm.style.fontWeight = 'bold'
        newInBtnElm.style.fontWeight = 'normal'
        bestSaleBtnElm.style.fontWeight = 'normal'
        allproducts.find( elem => {
            if(elem.SellsType === 'SummerSale'){
                showTabProduct.showPorduct(elem)
            }
        })   
       })

       // new in sale product tab

       newInBtnElm.addEventListener('click', () => {
        tabProductElm.innerHTML = ''
        newInBtnElm.style.fontWeight = 'bold'
        summerSaleBtnElm.style.fontWeight = 'normal'
        bestSaleBtnElm.style.fontWeight = 'normal'
        allproducts.find(elem => {
            if(elem.SellsType === 'new'){
                showTabProduct.showPorduct(elem)
                // console.log(elem);
            }
        })
       })

       
    }
}



// product show in ui

const showTabProduct = {
        showPorduct(elem){
            const {
                tabProductElm
            } = selectors.allSelectors()

            const htmlElm = 
            `
            <div class="id-${elem.id} productBox">
                        <div class="prodImg">
                            <img src="${elem.ProductsImage}" alt="">
                        </div>
                        <div class="prod-details">
                            <p id="prodName">${elem.ProductsName}</p>
                            <p id="prodType">${elem.ProductsType}</p>
                            <p id="prodPice">${elem.ProductsPrice}</p>
                        </div>
                        <button class="id-${elem.id} getBtn">Get it now</button>
                </div>
            `
          
            tabProductElm.insertAdjacentHTML('beforeend', htmlElm)
            buttonDisabled(document.querySelectorAll('.getBtn'))
        }
    }


    document.addEventListener('DOMContentLoaded', e => {

        const productBox = document.querySelectorAll('.getBtn')
        // console.log();
        for( let i = 0 ; i < productBox.length; i++){
            productBox[i].addEventListener('click', e => {
                e.preventDefault()
                window.location.replace('productsDetails.html')
                productBox[i].textContent = 'Added'
                productBox[i].style.cursor = 'not-allowed'
                productBox[i].style.backgroundColor = 'lightgray'
                productBox[i].setAttribute('disabled', '')
                const id = getId(e.target)
                addToCart(id)
            })
        }
    })


    function buttonDisabled(elem){
        let idFromLocalStorage = ''
        if(localStorage.getItem('productId')){
            idFromLocalStorage = JSON.parse(localStorage.getItem('productId'))
        }
            for(let i = 0; i < elem.length; i++){
                let buttonDisId = elem[i].classList[0].split('-')[1]
                for(let j = 0; j < idFromLocalStorage.length; j++){
                    // console.log(idFromLocalStorage[j]);
                    if(buttonDisId === idFromLocalStorage[j]){
                        // console.log(elem[i]);
                        elem[i].textContent = 'Added'
                        elem[i].style.cursor = 'not-allowed'
                        elem[i].style.backgroundColor = 'lightgray'
                        elem[i].setAttribute('disabled', '')
                    }
                }
            }   
    }


    
    
    


tab.tabSystem()
navClickBtn.navClick()

export {navClickBtn}
