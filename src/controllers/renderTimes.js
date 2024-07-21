function renderTimes(timesLinkedList, timesArray){
    document.getElementById('insert-linkedList').textContent += "  " + timesLinkedList[0] 
    document.getElementById('bubble-linkedList').textContent += "  " + timesLinkedList[1] 
    document.getElementById('merge-linkedList').textContent += "  " + timesLinkedList[2] 
    document.getElementById('radix-linkedList').textContent += "  " + timesLinkedList[3] 
    document.getElementById('search-linkedList').textContent += "  " + timesLinkedList[4] 
    
    document.getElementById('insert-array').textContent += "  " + timesArray[0] 
    document.getElementById('bubble-array').textContent += "  " + timesArray[1] 
    document.getElementById('merge-array').textContent += "  " + timesArray[2] 
    document.getElementById('radix-array').textContent += "  " + timesArray[3] 
    document.getElementById('search-array').textContent += "  " + timesArray[4] 
}

export default renderTimes