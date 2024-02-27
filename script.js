class HashMap {
    constructor () {
        this.buckets = []
        this.capacity = 16
        this.loadFactor = 0.75
    }


    hash(key) {

        let hashCode = 0;
      
        const primeNumber = 31;

        for (let i = 0; i < key.length; i++) {
            hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.capacity;
        }

        return hashCode
        
    }


    set(key, value) {

        const index = this.hash(key)

        // if (!this.buckets[index]) {
        //     this.buckets[index] = []
        // }

        // this.buckets[index].push({key, value})

        if(this.buckets[index] === undefined) {

            this.buckets[index] = ({key, value})

            if (this.buckets.length >= map.capacity * map.loadFactor) {

                this.capacity = this.capacity * 2

                const index = this.hash(key)

                this.buckets[index] = ({key, value })


            }

        }
        else {
            this.buckets[index] = ({key, value })
        }

        

        return this.buckets

    }

    
    get (key) {

        const index = this.hash(key)

        if (this.buckets[index]) {

            if (this.buckets[index].key === key) {
                return this.buckets[index].value
            }
            else {
                return null
            }
        }
        else {
            return null
        }
 
    }

    
    has (key) {

        const index = this.hash(key)

        if (this.buckets[index]) {

            if (this.buckets[index].key === key) {
                return true
            }
            else {
                return false
            }
            
        }
        else {
            return null
        }
    }


    remove (key) {

        const index = this.hash(key)

        if (this.buckets[index]) {

            if (this.buckets[index].key === key) {

                this.buckets[index] = null

                // this.buckets.splice(index, 1)
                return true
                
            }
            else {
                return false
            }
            
        }
        else {
            return false
        }

        

    }


    length () {
        return this.buckets.length
    }


    clear () {
        this.buckets = []
        return this.buckets
    }


    keys () {

        let keysArray = []

        for (let i = 0; i < this.buckets.length; i++) {

            if (this.buckets[i]) {
                keysArray.push(this.buckets[i].key)
            }

        }
        return keysArray
    }


    values () {

        let valuesArray = []

        for (let i = 0; i < this.buckets.length; i++) {

            if (this.buckets[i]) {
                valuesArray.push(this.buckets[i].value)
            }

        }
        return valuesArray
    }

    entries () {

        let pairArray = []


        for (let i = 0; i < this.buckets.length; i++) {

            if (this.buckets[i]) {

                let pair = []

                pair.push(this.buckets[i].key, this.buckets[i].value)

                pairArray.push(pair)
            }

        }
        return pairArray

    }

}


const map = new HashMap

console.log(map.set("love", "cool"))
console.log(map.set("see", "yolo"))
console.log(map.buckets.length)
console.log(map.has("love"))
//console.log(map.remove("love"))
console.log(map.length())
//console.log(map.clear())
console.log(map.keys())
console.log(map.values())
console.log(map.entries())