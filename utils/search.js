import {MyTrie} from './tries/index.js'

let TSearch = null

function loadIndex(t) {
    let myWords = ["fernando", "tries", "search", "awesome"]

    myWords.forEach(t.insert.bind(t))
}

export function getSearch() {
    if(!TSearch) {
        console.log("Creating new search index...")
        TSearch =  new MyTrie()
        loadIndex(TSearch)
    }
    return TSearch
}
