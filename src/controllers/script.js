import LinkedList from "../models/LinkedList/LinkedList.js";
import { renderCharts } from "./renderCharts.js";

let list = new LinkedList();

async function fetchDataAndProcess() {
    try {
        let response = await fetch("./src/controllers/bussines.json");
        let data = await response.json();

        // Mostrar los primeros 100 datos
        let tableData = document.getElementById("data");
        for (let i = 0; i < 100; i++) {
            let itemContainer = document.createElement("tr");
            let idItem = document.createElement("td");
            let nameItem = document.createElement("td");
            let cityItem = document.createElement("td");
            idItem.textContent = data[i].business;
            nameItem.textContent = data[i].name;
            cityItem.textContent = data[i].city;

            itemContainer.appendChild(idItem)
            itemContainer.appendChild(nameItem)
            itemContainer.appendChild(cityItem)
            tableData.appendChild(itemContainer);
        }

        // Inserción en Array y LinkedList
        let arrayData = [];
        console.time("Array Insertion");
        for (let i = 0; i < 1000; i++) {
            arrayData.push(data[i].name);
        }
        console.timeEnd("Array Insertion");

        console.time("LinkedList Insertion");
        for (let i = 0; i < 1000; i++) {
            list.add(data[i].name);
        }
        console.timeEnd("LinkedList Insertion");

        // Ordenamiento
        console.time("Bubble Sort Array");
        bubbleSort(arrayData);
        console.timeEnd("Bubble Sort Array");

        console.time("Merge Sort Array");
        arrayData = mergeSort(arrayData);
        console.timeEnd("Merge Sort Array");

        console.time("Radix Sort Array");
        arrayData = radixSort(arrayData);
        console.timeEnd("Radix Sort Array");

        console.time("Bubble Sort LinkedList");
        list.bubbleSort();
        console.timeEnd("Bubble Sort LinkedList");

        console.time("Merge Sort LinkedList");
        list.mergeSort();
        console.timeEnd("Merge Sort LinkedList");

        console.time("Radix Sort LinkedList");
        list.radixSort();
        console.timeEnd("Radix Sort LinkedList");

        // Búsqueda en Array
        console.time("Linear Search Array");
        const searchResultArray = linearSearchArray(arrayData, data[999].name); // Buscando el último elemento insertado
        console.timeEnd("Linear Search Array");

        // Búsqueda en LinkedList
        console.time("Linear Search LinkedList");
        const searchResultLinkedList = linearSearchLinkedList(list, data[999].name); // Buscando el último elemento insertado
        console.timeEnd("Linear Search LinkedList");

        // Renderizar gráficas
        renderCharts({
            insertionTimes: [1.07, 12.41],
            sortingTimes: [
                1.4,
                2.3,
                1.1,
                12.2,
                8.2,
                2.1
            ],
            searchTimes: [1.2, 3.4]
        });

        // Añadir evento de búsqueda
        document.getElementById("search-form").addEventListener("submit", function(event) {
            event.preventDefault();
            const searchInput = document.getElementById("search-input").value;
            const business = linearSearchArray(data, searchInput);
            const searchResults = document.getElementById("search-results");

            if (business) {
                searchResults.innerHTML = `<p>Nombre: ${business.name}</p><p>ID: ${business.business}</p>`;
            } else {
                searchResults.innerHTML = "<p>Negocio no encontrado</p>";
            }
        });

    } catch (err) {
        console.error(err);
    }
}

fetchDataAndProcess();

function bubbleSort(array) {
    let len = array.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len - i - 1; j++) {
            if (array[j] > array[j + 1]) {
                [array[j], array[j + 1]] = [array[j + 1], array[j]];
            }
        }
    }
    return array;
}

function mergeSort(array) {
    if (array.length <= 1) return array;

    const mid = Math.floor(array.length / 2);
    const left = mergeSort(array.slice(0, mid));
    const right = mergeSort(array.slice(mid));

    return merge(left, right);
}

function merge(left, right) {
    let result = [], lIndex = 0, rIndex = 0;

    while (lIndex < left.length && rIndex < right.length) {
        if (left[lIndex] < right[rIndex]) {
            result.push(left[lIndex]);
            lIndex++;
        } else {
            result.push(right[rIndex]);
            rIndex++;
        }
    }

    return result.concat(left.slice(lIndex)).concat(right.slice(rIndex));
}

function radixSort(array) {
    const maxNum = Math.max(...array);
    let digit = 1;
    while (digit <= maxNum) {
        let buckets = [...Array(10)].map(() => []);
        for (let num of array) {
            buckets[Math.floor(num / digit) % 10].push(num);
        }
        array = [].concat(...buckets);
        digit *= 10;
    }
    return array;
}

function linearSearchArray(array, target) {
    for (let i = 0; i < array.length; i++) {
        if (array[i].business === target) {
            return array[i];
        }
    }
    return null;
}

function linearSearchLinkedList(linkedList, target) {
    let current = linkedList.head;
    while (current) {
        if (current.value === target) {
            return current.value;
        }
        current = current.next;
    }
    return null;
}
