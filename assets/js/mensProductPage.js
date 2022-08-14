import allproducts from "./allproduct.js";
import selectors from "./allSelectors.js";

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
                <div class="allProBox">
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
             mensShoppingPageElm.insertAdjacentHTML('beforeend', htmlElm)
            }
            
            
        })
    }
}

womensProduct.womenProduct()