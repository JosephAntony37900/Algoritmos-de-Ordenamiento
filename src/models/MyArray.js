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
                if (this.datos[j].business > this.datos[j + 1].business) {
                    [this.datos[j], this.datos[j + 1]] = [this.datos[j + 1], this.datos[j]];
                }
            }
        }
    }

    mergeSort() {
        this.datos = this.#mergeSortRec(this.datos);
    }

    #mergeSortRec(array) {
        if (array.length <= 1) return array;

        const mid = Math.floor(array.length / 2);
        const left = this.#mergeSortRec(array.slice(0, mid));
        const right = this.#mergeSortRec(array.slice(mid));

        return this.#merge(left, right);
    }

    #merge(left, right) {
        let result = [], lIndex = 0, rIndex = 0;

        while (lIndex < left.length && rIndex < right.length) {
            if (left[lIndex].business < right[rIndex].business) {
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
        const array = this.datos;

        if (array.length === 0) return array;

        const getMaxDigits = (nums) => {
            let maxDigits = 0;
            for (let num of nums) {
                maxDigits = Math.max(maxDigits, Math.floor(Math.log10(Math.abs(num.business))) + 1);
            }
            return maxDigits;
        };

        const getDigit = (num, place) => {
            return Math.floor(Math.abs(num.business) / Math.pow(10, place)) % 10;
        };

        const maxDigits = getMaxDigits(array);

        let buckets = Array.from({ length: 10 }, () => []);

        for (let k = 0; k < maxDigits; k++) {
            for (let i = 0; i < 10; i++) {
                buckets[i] = [];
            }

            for (let i = 0; i < array.length; i++) {
                let digit = getDigit(array[i], k);
                buckets[digit].push(array[i]);
            }

            array = [].concat(...buckets);
        }

        this.datos = array;
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