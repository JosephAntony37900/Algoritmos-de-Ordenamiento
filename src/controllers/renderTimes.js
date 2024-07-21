function renderTimes(timesLinkedList, timesArray){
    document.getElementById('insert-linkedList').textContent += "  " + timesLinkedList[0] + " ms"
    document.getElementById('bubble-linkedList').textContent += "  " + timesLinkedList[1] + " ms"
    document.getElementById('merge-linkedList').textContent += "  " + timesLinkedList[2] + " ms"
    document.getElementById('radix-linkedList').textContent += "  " + timesLinkedList[3] + " ms"
    document.getElementById('search-linkedList').textContent += "  " + timesLinkedList[4] + " ms"
    
    document.getElementById('insert-array').textContent += "  " + timesArray[0] + " ms"
    document.getElementById('bubble-array').textContent += "  " + timesArray[1] + " ms"
    document.getElementById('merge-array').textContent += "  " + timesArray[2] + " ms"
    document.getElementById('radix-array').textContent += "  " + timesArray[3] + " ms"
    document.getElementById('search-array').textContent += "  " + timesArray[4] + " ms"
}

export default renderTimes