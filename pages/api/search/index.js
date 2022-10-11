import { getSearch } from "../../../utils/search"

export default function handler(req, res) {

    const {q} = req.query
    const TSearch = getSearch()

    let match = TSearch.search(q)

    res.status(200).json({ matchType: match })
}
