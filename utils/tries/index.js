
import { Node } from "./tries.js";

export class MyTrie {
    
    constructor() {
        this.root = new Node(null)
    }

    getIndex(char) {
        return char.charCodeAt(0) - 'a'.charCodeAt(0)
    }

    insert(word) {

        console.log("inserting word: ", word)
        let levels = word.toLowerCase().split("")
        let currentTrieNode = this.root

        levels.forEach( l => {
           let lIndex = this.getIndex(l) 
           if(!currentTrieNode.children[lIndex]) {
            currentTrieNode.children[lIndex] = new Node(l)
           }
           currentTrieNode = currentTrieNode.children[lIndex]
        });
        currentTrieNode.isFinalLetter = true
    }

    search(word) {
        console.log("SEarching for word: ", word)
        let currentTrieNode = this.root

        for(let level = 0; level < word.length; level++) {
           let lIndex = this.getIndex(word[level]) 
           if(!currentTrieNode.children[lIndex]) {
            return false;
           }

           currentTrieNode = currentTrieNode.children[lIndex]
        }

        if(currentTrieNode.label != null) {
            if(currentTrieNode.isFinalLetter) return "full-match"
            else return "partial-match"
        }
        return false
 
    }

}
