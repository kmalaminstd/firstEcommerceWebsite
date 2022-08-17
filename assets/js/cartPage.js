import allproducts from "./allproduct.js";
import selectors from "./allSelectors.js";

const {
    cartedProductElm,
    addToCartBtnElm
} = selectors.allSelectors()

let cartProductArr = []
let productSize = ''
let productColor =''

const productIdFromLocalStorage = JSON.parse(localStorage.getItem('CartProduct'))

document.querySelector('#contShopt').setAttribute('hidden', '')

productIdFromLocalStorage.forEach( elem => {
        // console.log(elem.id == productIdFromLocalStorage[i]);
        console.log(elem);
            let htmlElm = `
                <div class="carted">
                <div class="cartLeftSide">
                    <div class="addedProduct">
                        <p id="close">close</p>
                        <div class="proImage">
                            <img src="${elem.ProductsImage}" alt="">
                        </div>
                        <div class="proDetails">
                            <p><span>${elem.ProductsName}</span></p>
                            <p><span>${elem.ProductsType}</span></p>
                            
        
                            <div class="quantity">
                                <button id="minusQuan">-</button>
                                <input type="number" min="1" value="1">
                                <button id="plusQuan">+</button>
                            </div>
                        </div>
                    </div>
                </div>
        
                <div class="cartRightSide">
                    
                    <div class="cartAdd">
                        <p><span>Price:</span> <span><b>${elem.ProductsPrice}</b></span></p>
                        <p><span>Shipping</span> <span><b>calculated</b>
                        </span></p>
                        
                    </div>
        
                    <button id="checkOutBtn">Checkout</button>
        
                    <div class="extBtns">
                        <button id="contShop">continue shopping</button>
                        <button id="cartClear">clear cart</button>
                    </div>
                </div>
            </div>
            `
            cartedProductElm.insertAdjacentHTML('beforeend', htmlElm)

            const checkout = document.querySelectorAll('#checkOutBtn')
            const clearCart = document.querySelectorAll('#cartClear')
            const continueShop = document.querySelectorAll('#contShop')
            for(let i = 0; i < clearCart.length; i++){
                clearCart[i].addEventListener('click', () => {
                    cartedProductElm.innerHTML = ''
                    localStorage.removeItem('CartProduct')
                    // document.querySelector('#contShopt').removeAttribute('hidden')
                })
            }
            for(let i = 0; i < continueShop.length; i++){
                continueShop[i].addEventListener('click', () => {
                    window.location.replace('allProducts.html')
                })
            }
            for(let i = 0; i < checkout.length; i++){
                checkout[i].addEventListener('click', () => {
                    alert('Happy shopping')
                })
            }
        
    })

