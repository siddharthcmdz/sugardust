

class IDpool {
    private ranges : number[][]

    constructor() {
        this.ranges = []
    }

    findLastRange() : number {
        //find a range
        for (let r = 0; r < numRanges-1; r++) {
            const range = this.ranges[r]
            const nextRangeIdx = r + 1
            // if(nextRangeIdx)
        }

    }

    createID() : number {
        if(this.ranges.length === 0) {
            this.ranges = [[0, 1]]
            return 0
        }

        let last : number = 0
        const numRanges : number = this.ranges.length

        return last
    }

    disposeID(id : number) : boolean {
        return false
    }

    createRange(numIDs : number) : number {
        return -1
    } 

    disposeRange(id : number, numids : number) : boolean {
        return false
    }

    dispose() : boolean {
        return false
    }
}