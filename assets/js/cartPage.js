import allproducts from "./allproduct.js";
import selectors from "./allSelectors.js";
import addToLocalStorage from "./cartProductAddToLocalStorage.js";

const {
    cartedProductElm,
    addToCartBtnElm
} = selectors.allSelectors()

let cartProductArr = []
let productSize = ''
let productColor =''
let proQuantity = 1

const productIdFromLocalStorage = JSON.parse(localStorage.getItem('CartProduct'))


document.querySelector('#contShopt').setAttribute('hidden', '')

productIdFromLocalStorage.forEach( elem => {
        // console.log(elem.id == productIdFromLocalStorage[i]);
        // console.log(elem);
            let htmlElm = `
                <div class="id-${elem.id} carted">
                <div class="cartLeftSide">
                    <div class="addedProduct">
                        <p id="close">close</p>
                        <div class="proImage">
                            <img src="${elem.ProductsImage}" alt="">
                        </div>
                        <div class="proDetails">
                            <p><span>${elem.ProductsName}</span></p>
                            <p><span>${elem.ProductsType}</span></p>
                            <p><span> <b>Color :</b> ${elem.ProductColor}</span></p>
                            <p><span><b>Size :</b> ${elem.ProductSize}</span></p>
                            
        
                            <div class="quantity">
                                <button id="minusQuan" class="minusQuan">-</button>
                                <input type="number" min="1" value="${proQuantity}" id="proQuant">
                                <button id="plusQuan" class="plusQuan">+</button>
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

            const prodCloseBtn = document.querySelectorAll('#close')

            for(let i = 0; i < prodCloseBtn.length; i++){
                if(!cartedProductElm.innerHTML){
                    window.location.replace('index.html')
                }
                prodCloseBtn[i].style.cursor = 'pointer'
                prodCloseBtn[i].addEventListener('click', () => {
                    document.querySelectorAll('.carted')[i].style.display = 'none'
                })
            }
            
            const allCart = document.querySelectorAll('.carted')
            for(let i = 0; i < checkout.length; i++){
                // console.log(checkout[i]);
                checkout[i].addEventListener('click', () => {
                    alert('Happy Shopping')
                    if(!cartedProductElm.innerHTML){
                        window.location.replace('index.html')
                    }
                    allCart[i].style.display = 'none'
                    window.location.replace('index.html')
            })

            const allProIncrement = document.querySelectorAll('.quantity')
            let productQuan = document.querySelectorAll('#proQuant')

            const allCntShopBtn = document.querySelectorAll('#contShop')

            for(let i = 0; i < allCntShopBtn.length; i++){
                allCntShopBtn[i].addEventListener('click', () => {
                    window.location.replace('allProducts.html')
                })
            }
            

            for(let i = 0; i < allProIncrement.length; i++){
                allProIncrement[i].children[0].addEventListener('click', () => {
                    // console.log(--proQuantity);
                    productQuan[i].value = --proQuantity
                    // console.log(productQuan[i]);
                })

                allProIncrement[i].children[2].addEventListener('click', () => {
                    // console.log(++proQuantity);
                    productQuan[i].value = ++proQuantity
                })
            }
        }
    })


