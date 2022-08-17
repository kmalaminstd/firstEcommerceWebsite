

function getId(elem){
    const id = elem.classList[0].split('-')[1];
    console.log(id);
    return id
}

export default getId