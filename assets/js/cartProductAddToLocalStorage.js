

let localArr = []

function addToLocalStorage(elem){

    if(localStorage.getItem('CartProduct')){
        localArr = JSON.parse(localStorage.getItem('CartProduct'))
        localArr.push(elem)
        localStorage.setItem('CartProduct', JSON.stringify(localArr))
    }else{
        localArr = []
        localArr.push(elem)
        localStorage.setItem('CartProduct', JSON.stringify(localArr))
    }
    
    
}

export default addToLocalStorage