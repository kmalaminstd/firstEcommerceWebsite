import allproducts from "./allproduct.js";
import selectors from "./allSelectors.js";
import getId from "./gettingId.js";
import navClickBtn from "./navClick.js";

const womensProduct = {
    
    womenProduct(){

        const {
            mensShoppingPageElm
        } = selectors.allSelectors()

        // console.log(womenShoppingPageElm);

        allproducts.find( elem => {
            if(elem.category === 'men'){
                // console.log(elem);
                // console.log(elem);
                    const htmlElm =      `
                <div class="id-${elem.id} allProBox">
                    <div class="proImg">
                        <img src="${elem.ProductsImage}" alt="${elem.ProductsName}">
                    </div>
                    <div class="proDetials">
                        <p><span id="proName">${elem.ProductsName}</span> <br>
                        <span id="protype">${elem.ProductsType}</span><br>
                        <span id="proprice"><b>${elem.ProductsPrice}</b></span></p>
                    </div>
                    <button class="id-${elem.id} getBtn"><a href="/cartPage.html">Details</a></button>
                </div>
             `
             mensShoppingPageElm.insertAdjacentHTML('beforeend', htmlElm)
            }
            
            
        })
    }
}

document.addEventListener('DOMContentLoaded', e => {
    const productBox = document.querySelectorAll('.getBtn')
    for( let i = 0 ; i < productBox.length; i++){
            productBox[i].addEventListener('click', e => {
                const id = getId(e.target)
                addedId(id)
                
        })
    }
})

function getId(){
    const prodId = localStorage.getItem('ProductId')
    return prodId
}

function addedId(id){
    localStorage.setItem('ProductId', JSON.stringify(id))
}


womensProduct.womenProduct()
navClickBtn.navClick()