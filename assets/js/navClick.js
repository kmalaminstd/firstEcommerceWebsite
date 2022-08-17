import selectors from "./allSelectors.js"

const navClickBtn = {
    navClick(){
        const {
            indexNavMainMenuElm,
            indexnavSubMenuElm
        } = selectors.allSelectors()

        indexNavMainMenuElm.addEventListener('click', (e) => {
            e.preventDefault()
            console.log(indexNavMainMenuElm);
            indexnavSubMenuElm.classList.toggle('show')
            
        })
        
    }
}

export default navClickBtn