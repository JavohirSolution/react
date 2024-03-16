import { useEffect, useState } from "react"

const CounterItem = ({ countergenerate }) => {
    const [item, setItem] = useState([])

    useEffect(() => {
        const newArr = countergenerate()
        setItem(newArr)
        console.log("Rendered");
    }, [countergenerate])

    return (
        <ul>
            {item.map(e => {
                <li key={e}>{e}</li>
            })}
        </ul>
    )
}

export default CounterItem