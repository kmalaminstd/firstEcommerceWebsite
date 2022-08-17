import selectors from "./allSelectors.js"
import allproducts from "./allproduct.js"

const fetchingproduct = {
    fetching (){
        allproducts.map( elem => {
            showAllProduct.showInui(elem)
        })
    }
}

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
            </div>
        `

        allProductDiv.insertAdjacentHTML('beforeend', htmlElm)
    }
}


const initializer = {
    initialize(){
        fetchingproduct.fetching()
        filterProduct.filterSystem()
    }
}

export default initializer