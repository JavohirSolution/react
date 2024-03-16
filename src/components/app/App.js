import { Component, useContext, useEffect, useState } from "react"
import { v4 as uuidv4 } from 'uuid';
import AppFilter from "../app-filter/app-filter"
import AppInfo from "../app-info/app-info"
import MovieAddForm from "../movie-add-form/movie-add-form"
import MovieList from "../movie-list/movie-list"
import Search from "../search/search"
import './app.css'
import { Context } from "../../context";

const App = () => {
    const [data, setData] = useState([])
    const [term, setTerm] = useState('')
    const [filter, setFilter] = useState('all')
    const [isLoading, setisLoading] = useState(false)

    const value = useContext(Context)

    const onDelete = (id) => {
        const newArr = data.filter(c => c.id !== id)
        setData(newArr)
    }
    const addForm = (item) => {
        const newItem = { name: item.name, viewers: item.viewers, id: uuidv4(), favourite: false, like: false }
        const newArr = [...data, newItem]
        setData(newArr)
    }
    const onToggleProp = (id, prop) => {
        const newArr = data.map(item => {
            if (item.id === id) {
                return { ...item, [prop]: !item[prop] }
            }
            return item
        })
        setData(newArr)
    }
    const searchHandler = (arr, term) => {
        if (term === 0) {
            return arr
        }
        return arr.filter(item => item.name.toLowerCase().indexOf(term) > -1)
    }
    const filterHandler = (arr, filter) => {
        switch (filter) {
            case 'popular':
                return arr.filter(c => c.like)
            case 'mostViews':
                return arr.filter(c => c.viewers > 500)
            default:
                return arr
        }
    }
    const udateTermHandler = (term) => {
        setTerm(term)
    }
    const updateFilterHandler = (filter) => {
        setFilter(filter)
    }
    useEffect(() => {
        setisLoading(true)
        fetch('https://jsonplaceholder.typicode.com/todos?_start=0&_limit=20')
            .then(response => response.json())
            .then(json => {
                const newArr = json.map(item => ({
                    name: item.title,
                    id: item.id,
                    viewers: item.id * 10,
                    favourite: false,
                    like: false
                }))
                setData(newArr)
            })
            .catch(err => console.log(err))
            .finally(() => setisLoading(false))
    }, [])


    return (
        <div className="app font-monospace">
            <div className="content">
                <AppInfo allMoviesCount={data.length} favouriteMovies={data.filter(c => c.favourite).length} />
                <div className="search-panel">
                    <Search udateTermHandler={udateTermHandler} />
                    <AppFilter filter={filter} updateFilterHandler={updateFilterHandler} />
                </div>
                {isLoading && "Loading..."}
                <MovieList data={filterHandler(searchHandler(data, term), filter)} onDelete={onDelete} onToggleProp={onToggleProp} />
                <MovieAddForm addForm={addForm} />
            </div>
        </div>
    )
}
export default App