import '../styles/Switch.css'

export function Switch ({turnOn, switchCkecked, setSwitchCkecked}) {
    return (
        <>
            <label className='box'>
                {/*<input type="checkbox" defaultChecked={turnOn && "checked"} checked={switchCkecked} onClick={() => this.checked ? setSwitchCkecked(true) : setSwitchCkecked(false)}/>*/}
                <input type="checkbox" defaultChecked={turnOn && "checked"} onClick={() => this.checked ? setSwitchCkecked(true) : setSwitchCkecked(false)}/>
                <span className='slider'></span>
            </label>
        </>
    )
}