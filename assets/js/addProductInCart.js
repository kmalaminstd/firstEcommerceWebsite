let productIdArr = []

function addToCart(id){
   console.log(id);
    if(localStorage.getItem('productId')){
        productIdArr = JSON.parse(localStorage.getItem('productId'))
        productIdArr.push(id)
        localStorage.setItem('productId', JSON.stringify(productIdArr))
    }else{
        productIdArr = []
        productIdArr.push(id)
        localStorage.setItem('productId', JSON.stringify(productIdArr))
    }
}


export default addToCart