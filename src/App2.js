import { useCallback, useEffect, useState } from "react"
import CounterItem from "./counter-item"

const User = (props) => {
    const [counter, setCounter] = useState(0)
    const [active, setActive] = useState(true)

    const colors = {
        color: active ? "green" : "red"
    }


    const countergenerate = useCallback(() => {
        return new Array(counter).fill('').map((_, idx) => `Counter number ${idx + 1}`)
    }, [counter])

    return (
        <div style={{ width: "50%", margin: "auto" }}>
            <div className="text-center" style={{ border: "1px solid black", padding: "3px", marginTop: "5px" }}>
                <p style={colors}>
                    {active ? "User Active " : "User UnActive "}
                    {counter}</p>
                <div>
                    <button className="btn btn-success" onClick={() => setCounter(prevState => prevState + 1)}>+</button>
                    <button className="btn btn-warning mx-1" onClick={() => setActive(prevState => !prevState)}>Toogle</button>
                </div>
                <CounterItem countergenerate={countergenerate} />
            </div>
        </div>
    )
}


function App2() {

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos?_start=0&_limit=5')
            .then(response => response.json())
            .then(json => {
                const newArr = json.map(item => ({ name: item.title, id: item.id}))
                console.log(newArr);
            })
    }, [])

    return (
        <div>
            <User firstName="Samar" lastName="Badriddinov" link="http://youtube.com" />
        </div>
    )
}

export default App2