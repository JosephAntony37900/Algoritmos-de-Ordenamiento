function estimateTime(func) {
    const start = performance.now(); // Marca el tiempo de inicio
    func(); 
    const end = performance.now(); // Marca el tiempo de finalización
    return end - start; 
}

export default estimateTime