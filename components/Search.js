import { useRef, useState } from "react"

export default function Search() {

    const [matchType, setMatchType] = useState(null)

    const inputRef = useRef()

    async function performSearch() {
        let resp = await fetch('/api/search?q=' + inputRef.current.value)
        let jsonR = await resp.json()

        setMatchType(jsonR.matchType)
    }

    return (
        <div>
            <input type={"text"} onChange={performSearch} ref={inputRef}/>
            <div className={matchType + " search-results"}>
                {matchType == false ? "No results" : matchType}
            </div>
        </div>
    )
}