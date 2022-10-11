
export class Node {
    
    constructor(label, isEnd = false) {
        this.children = new Array(26)
        this.label = label
        this.isFinalLetter = isEnd
    }

    toString(){
        return JSON.stringify(this)
    }
}