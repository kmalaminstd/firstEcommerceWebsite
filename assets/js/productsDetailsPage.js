import selectors from "./allSelectors.js";
import allproducts from "./allproduct.js";
import addToLocalStorage from './cartProductAddToLocalStorage.js'

const {
    productsDetPageElm,
    addToCartBtnElm,
    productSizeOption,
    productColorOption
} = selectors.allSelectors()

function removeId(){
    localStorage.removeItem('productId')
}

setTimeout( () => {
    removeId()
}, 1000)

let idFromLocalStorage = JSON.parse(localStorage.getItem('productId'))
let productCartArr = []
let productSize = 0
let productColor = ''

for(let i = 0; i < idFromLocalStorage.length; i++){
    allproducts.forEach( elem => {
        if(Number(elem.id) === Number(idFromLocalStorage[i])){
            // console.log(elem);
            let htmlElm = `
            <div class="product-images">
            <img src="${elem.ProductsImage}" alt="">
            <img src="${elem.ProductsImage}" alt="">
            </div>

            <div class="product-all-types">
            <div class="prod-types">
                <p><span id="proName">
                    ${elem.ProductsName}
                </span><br>
                <span id="proprice">${elem.ProductsPrice}</span></p>
            </div>

            <div class="prod-colors">
                <p>Choose your color and
                     Size
                </p>

                <select name="" id="productColor">
                    <option value="0" disabled selected>Select Color</option>
                    <option value="black">Black</option>
                    <option value="green">Green</option>
                    <option value="lightblue">Lightblue</option>
                    <option value="yellow">Yellow</option>
                </select>

                <select name="" id="productSize">
                    <option value="" disabled selected>Select Size</option>
                    <option value="33">33</option>
                    <option value="35">35</option>
                    <option value="37">37</option>
                    <option value="38">38</option>
                    <option value="39">39</option>
                    <option value="40">40</option>
                </select>
            </div>

            <!--- <div class="prod-size">

            </div> -->

            <button id="addCartBtn">Add to cart</button>
            </div>
            `
            productsDetPageElm.insertAdjacentHTML('beforeend', htmlElm)

            document.querySelector('#productColor').addEventListener('change', () => {
                productColor = document.querySelector('#productColor').value
            })

            document.querySelector('#productSize').addEventListener('click', () => {
                productSize = document.querySelector('#productSize').value
            })
            document.querySelector('#addCartBtn').addEventListener('click', () => {
                productAddToCartArr(elem, productColor, productSize)
                alert('Product Added')
                window.location.replace('cartPage.html')
                // const proBx = document.querySelectorAll('.allProBox')
                // window.location.replace('allProducts.html')
            })
            
        }
    })
}

function productAddToCartArr(elem, productColor, productSize){
    elem.ProductColor = productColor
    elem.ProductSize = productSize
    productCartArr.push(elem)
    addToLocalStorage(elem)
}



