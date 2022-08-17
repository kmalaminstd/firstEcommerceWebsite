import allproducts from "./allproduct.js";
import selectors from "./allSelectors.js";
import getId from "./gettingId.js";
// import { navClickBtn } from "./indexPage.js";

const navClickBtn = {
    navClick(){
        const {
            indexNavMainMenuElm,
            indexnavSubMenuElm
        } = selectors.allSelectors()

        indexNavMainMenuElm.addEventListener('click', (e) => {
            e.preventDefault()
            console.log(indexNavMainMenuElm);
            // console.log(indexnavSubMenuElm);
            indexnavSubMenuElm.classList.toggle('show')
            
        })
        
    }
}

navClickBtn.navClick()


const womensProduct = {
    
    womenProduct(){

        const {
            womenShoppingPageElm,
            allProductDiv
        } = selectors.allSelectors()

        // console.log(womenShoppingPageElm);

        allproducts.find( elem => {
            if(elem.category === 'women'){
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
                    <button class="id-${elem.id} getBtn">Details</button>
                </div>
             `
             womenShoppingPageElm.insertAdjacentHTML('beforeend', htmlElm)
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

function addedId(id){
    localStorage.setItem('ProductId', JSON.stringify(id))
}


womensProduct.womenProduct()