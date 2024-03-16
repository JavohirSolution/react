import './app-filter.css'
const AppFilter = ({ updateFilterHandler, filter }) => {
    return (
        <div className="btn-group mt-3">
            {btnsArr.map(btn => (
                <button key={btn.name} className={`btn ${filter === btn.name ? "btn-dark ":"btn-outline-dark"}`} type="button" onClick={() => updateFilterHandler(btn.name)}>
                    {btn.label}
                </button>
            ))}

            {/* <button className="btn btn-outline-dark" type="button">
                Mashhur kinolar
            </button>
            <button className="btn btn-outline-dark" type="button">
                Barcha kinolar
            </button> */}
        </div>
    )
}

const btnsArr = [
    { name: "all", label: "Barcha kinolar" },
    { name: "popular", label: "Mashhur kinolar" },
    { name: "mostViews", label: "BarchEng ko'p ko'rilgan kinolar" },
]

export default AppFilter