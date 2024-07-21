function renderData(arrayData) {
    // Mostrar los primeros 100 datos
    let tableData = document.getElementById("data");
    for (let i = 0; i < 100; i++) {
        let itemContainer = document.createElement("tr");
        let idItem = document.createElement("td");
        let nameItem = document.createElement("td");
        let cityItem = document.createElement("td");
        idItem.textContent = arrayData.get(i).business;
        nameItem.textContent = arrayData.get(i).name;
        cityItem.textContent = arrayData.get(i).city;

        itemContainer.appendChild(idItem);
        itemContainer.appendChild(nameItem);
        itemContainer.appendChild(cityItem);
        tableData.appendChild(itemContainer);
    }
}

export default renderData;
