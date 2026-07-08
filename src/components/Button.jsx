import "../styles/Button.css";

export function Button({name, onClick}) {
    return(
        <>
            <button onClick={onClick} className="clicker">
                {name}
            </button>
        </>
    )
}