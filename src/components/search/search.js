import { Component, useState } from 'react'
import './search.css'

const Search = ({ udateTermHandler }) => {
    const [term, setTerm] = useState("")

    const updateHandler = (e) => {
        const term = e.target.value.toLowerCase()
        setTerm(term)
        udateTermHandler(term)
    }
    return (
        <div>
            <input
                type="text"
                onChange={updateHandler}
                className="form-control search-input"
                placeholder="Kinolarni qidirish"
                value={term}
            />
        </div>
    )
}
export default Search