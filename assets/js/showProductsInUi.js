import selectors from "./allSelectors.js"
import allproducts from "./allproduct.js"
import getId from "./gettingId.js"
import addToCart from "./addProductInCart.js"

const fetchingproduct = {
    fetching (){
        allproducts.map( elem => {
            showAllProduct.showInui(elem)
        })
    }
}

let isFunction = false

const filterProduct = {
    filterSystem(){
        const {
            genderFilterELm
        } = selectors.allSelectors()
        
        genderFilterELm.addEventListener('change', () => {
            const{
                allProductDiv
            } = selectors.allSelectors()
            allProductDiv.innerHTML = ''
    
            console.log(genderFilterELm.value);
            allproducts.find( elem => {
                if(elem.category === genderFilterELm.value){
                    
                    showAllProduct.showInui(elem)
                }
            })
        })
    }
}



const showAllProduct = {
   
    showInui(elem){
        const {
            allProductDiv
        } = selectors.allSelectors()

        const htmlElm = 
        `
            <div class="id-${elem.id} allProBox">
                <div class="proImg">
                    <img src="${elem.ProductsImage}" alt="${elem.ProductsName}">
                </div>
                <div class="proDetials">
                    <p><span id="proName">${elem.ProductsName}</span> <br>
                    <span id="protype">${elem.ProductsType}</span><br>
                    <span id="proprice"><b>${elem.ProductsPrice}</b></span></p>
                </div>
                <button class="id-${elem.id} getBtn">Get Now</button>
            </div>
        `

        allProductDiv.insertAdjacentHTML('beforeend', htmlElm)

        

        const AllGetBtn = document.querySelectorAll('.getBtn')
        for(let i = 0 ; i < AllGetBtn.length; i++){
            AllGetBtn[i].addEventListener('click', (e) => {
                // const proId = AllGetBtn[i].classList[0].split('-')[1]
                e.preventDefault()
                window.location.replace('productsDetails.html')
                AllGetBtn[i].textContent = 'Added'
                AllGetBtn[i].style.cursor = 'not-allowed'
                AllGetBtn[i].style.backgroundColor = 'lightgray'
                AllGetBtn[i].setAttribute('disabled', '')
                const id = getId(e.target)
                // addToCart(id)
                if(isFunction === false){
                    addToCart(id)
                    isFunction = true
                }
                
            })
        }
    }
}


const initializer = {
    initialize(){
        fetchingproduct.fetching()
        filterProduct.filterSystem()
    }
}

export default initializer