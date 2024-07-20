import LinkedList from "../models/LinkedList/LinkedList.js";
import MyArray from "../models/MyArray.js";

async function fetchData() {
    let response = await fetch("./src/controllers/bussines.json");
    let data = await response.json();

    return data
}

const processData = fetchData().then(data => {
    let list = new LinkedList();
    let arrayData = new MyArray()
    
    try {

        const startInsertArray = performance.now();
        for (let i = 0; i < 1000; i++) {
            arrayData.push(data[i]);
        }
        const endInsertArray = performance.now();

        let timeInsertArray = endInsertArray - startInsertArray;

        const startInsertLinkedList = performance.now();
        for (let i = 0; i < 1000; i++) {//Insercion en LinkedList
            list.add(data[i]);
        }
        const endInsertLinkedList = performance.now();

        let timeInsertLinkedList = endInsertLinkedList - startInsertLinkedList;

        return {list, arrayData, timeInsertArray, timeInsertLinkedList}
    } catch (err) {
        console.error(err);
    }
})

export { processData };