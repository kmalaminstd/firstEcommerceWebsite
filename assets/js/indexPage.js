import selectors from "./allSelectors.js"
import allproducts from "./allproduct.js"

const tab = {
    tabSystem(){
        const {
            bestSaleBtnElm,
            summerSaleBtnElm,
            newInBtnElm,
            tabProductElm
            
        } = selectors.allSelectors()

        const numberArr = []

        

       bestSaleBtnElm.addEventListener('click', () => {
        tabProductElm.innerHTML = ''
        allproducts.find( elem =>{
            numberArr.push(elem.SoldTime)
            numberArr.sort((a,b) => a - b);
            if(numberArr[numberArr.length-1] === elem.SoldTime){
                showTabProduct.showPorduct(elem)
            }
            })
       })

       allproducts.find( elem =>{
        
        numberArr.push(elem.SoldTime)
        numberArr.sort((a,b) => a - b);
        if(numberArr[numberArr.length-1] === elem.SoldTime){
            showTabProduct.showPorduct(elem)
        }
        
    })
    }
}

const showTabProduct = {
    showPorduct(elem){
        const {
            tabProductElm
        } = selectors.allSelectors()
        tabProductElm.innerHTML = ''

        const htmlElm = 
        `
           <div class="productBox">
                    <div class="prodImg">
                        <img src="${elem.ProductsImage}" alt="">
                    </div>
                    <div class="prod-details">
                        <p id="prodName">${elem.ProductsName}</p>
                        <p id="prodType">${elem.ProductsType}</p>
                        <p id="prodPice">${elem.ProductsPrice}</p>
                    </div>
            </div>
        `
        tabProductElm.insertAdjacentHTML('beforeend', htmlElm)
        
    }
    }

tab.tabSystem()
