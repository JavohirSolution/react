import { Component, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import './movie-add-form.css'


const MovieAddForm = ({ addForm }) => {
    const [state, setState] = useState({ name: "", views: "" })

    const changeHandler = (e) => {
        setState({ ...state, [e.target.name]: e.target.value })
    }
    const addFormHandler = (e) => {
        e.preventDefault()
        if(state.name === "" || state.views === "") return
        const data = { name: state.name, viewers: state.views }
        addForm(data)
        setState({
            name: "",
            views: "",
        })
    }
    return (
        <div className="movie-add-form">
            <h3>Yangi kino qo'shish</h3>
            <form className='add-form d-flex' action="" onSubmit={addFormHandler}>
                <input
                    type="text"
                    className='form-control new-post-label'
                    placeholder='Qanday kino?'
                    value={state.name}
                    onChange={changeHandler}
                    name='name'
                />
                <input
                    type="number"
                    className='form-control new-post-label'
                    placeholder="Necha marta ko'rilgan?"
                    value={state.views}
                    onChange={changeHandler}
                    name='views' />
                <button className='btn btn-outline-dark' type='submit'>
                    Qo'shish
                </button>
            </form>
        </div>
    )
}
export default MovieAddForm