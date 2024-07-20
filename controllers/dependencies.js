import LinkedList from "../models/LinkedList/LinkedList.js";

let lista = new LinkedList()

fetch("./controllers/bussines.json")
.then(response => response.json())
.then(data => {
    //En esta parte unicamente se muestran los primeros 100 registros
    for (let x=0;x<10000;x++) {
        let item = document.createElement("li");
        item.textContent = data[x].name;
        root.appendChild(item)
    }
})
.catch(err => console.log(err))

export {lista}

