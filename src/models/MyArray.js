class MyArray {
    datos

    constructor(){
        this.datos = []
    }

    push(value) {
        this.datos.push(value);
    }

    get(index){
        return this.datos[index];
    }

    bubbleSort() {
        let len = this.datos.length;
        for (let i = 0; i < len; i++) {
            for (let j = 0; j < len - i - 1; j++) {
                if (this.datos[j] > this.datos[j + 1]) {
                    [this.datos[j], this.datos[j + 1]] = [this.datos[j + 1], this.datos[j]];
                }
            }
        }
    }
    
    mergeSort() {
        this.datos = this.#mergeSortRec(this.datos)
    }

    #mergeSortRec(array){
        if (array.length <= 1) return array;
    
        const mid = Math.floor(array.length / 2);
        const left = this.#mergeSortRec(array.slice(0, mid));
        const right = this.#mergeSortRec(array.slice(mid));
    
        return this.#merge(left, right);

    }
    
    #merge(left, right) {
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
    
    radixSort() {
        const maxNum = Math.max(...this.datos);
        let digit = 1;
        while (digit <= maxNum) {
            let buckets = [...Array(10)].map(() => []);
            for (let num of this.datos) {
                buckets[Math.floor(num / digit) % 10].push(num);
            }
            this.datos = [].concat(...buckets);
            digit *= 10;
        }
    }
    
    linearSearch(target) {
        for (let i = 0; i < this.datos.length; i++) {
            if (this.datos[i].business === target) {
                return this.datos[i];
            }
        }
        return null;
    }
}

export default MyArray;