function searchData(event, array) {
    event.preventDefault();
    console.log(array);
    const searchInput = document.getElementById("search-input").value;
    
    const start = performance.now(); // Marca el tiempo de inicio
    const business = array.linearSearch(searchInput)
    const end = performance.now(); // Marca el tiempo de finalización

    const searchResults = document.getElementById("search-results");

    if (business) {
        console.log("si");
        searchResults.innerHTML = `
                                <p id="time-result">Tiempo: ${end - start} </p>
                                <h3 >Resultado</h3>
                                <table id="result">
                                    <tr>
                                        <th>ID</th>
                                        <th>Nombre</th>
                                        <th>Ciudad</th>
                                    </tr>
                                    <tr class="results-row">
                                        <td>${business.business}</td>
                                        <td>${business.name}</td>
                                        <td>${business.city}</td>
                                    </tr>
                                </table>`;
    } else {
        console.log("no");
        searchResults.innerHTML = `
                                    <p id="time-result">Tiempo: ${end - start} </p>
                                    <span id="no-result">Sin coincidencias</span>`;
    }
}

export default searchData;