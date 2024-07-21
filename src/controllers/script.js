import { renderCharts } from "./renderCharts.js";
import { processData } from "./dependencies.js";
import searchData from "./searchData.js";
import renderData from "./renderData.js";
import renderTimes from "./renderTimes.js";


processData.then(({list, arrayData, timeInsertArray, timeInsertLinkedList}) => {
    // Ordenamiento
    const startBubbleArray = performance.now(); 
    arrayData.bubbleSort();
    const endBubbleArray = performance.now(); 

    const startMergeArray = performance.now(); 
    arrayData.mergeSort();
    const endMergeeArray = performance.now(); 

    const startRadixArray = performance.now(); 
    arrayData.radixSort();
    const endRadixArray = performance.now(); 

   const startBublleLinkedList = performance.now();
  list.bubbleSort();
    const endBublleLinkedList = performance.now();

    const startMergeLinkedList = performance.now();
   list.mergeSort();
    const endMergeLinkedList = performance.now();

    const startRadixLinkedList = performance.now();
    list.radixSort();
    const endRadixLinkedList = performance.now();
    
    // Búsqueda en Array
    const startSearchArray = performance.now();
    const searchResultArray = arrayData.linearSearch(arrayData.get(999).name); // Buscando el último elemento insertado
    const endSearchArray = performance.now()

    // Búsqueda en LinkedList
    const startSearchLinkedList = performance.now();
    const searchResultLinkedList = list.linearSearch(arrayData.get(999).name); // Buscando el último elemento insertado
    const endSearchLinkedList = performance.now();
    
    // Añadir evento de búsqueda
            
    document.getElementById("search-form").addEventListener("submit", (event) => searchData(event, arrayData));

    // Renderizar gráficas
    renderCharts({
        insertionTimes: [timeInsertArray, timeInsertLinkedList],
        sortingTimes: [
            (endBubbleArray - startBubbleArray),
            (endMergeeArray - startMergeArray),
            (endRadixArray - startRadixArray),
            (endBublleLinkedList - startBublleLinkedList),
            (endMergeLinkedList -startMergeLinkedList),
            (endRadixLinkedList - startBublleLinkedList)
        ],
        searchTimes: [(endSearchArray - startSearchArray), (endSearchLinkedList -startSearchLinkedList)]
    });
    renderTimes([
                    timeInsertArray, 
                    (endBubbleArray - startBubbleArray),
                    (endMergeeArray - startMergeArray),
                    (endRadixArray - startRadixArray),
                    (endSearchArray - startSearchArray)
                ],
                [
                    timeInsertLinkedList,
                    (endBublleLinkedList - startBublleLinkedList),
                    (endMergeLinkedList -startMergeLinkedList),
                    (endRadixLinkedList - startBublleLinkedList),
                    (endSearchLinkedList -startSearchLinkedList)
                ]);
    renderData(arrayData);
    console.log(list);
    console.log(arrayData);
})