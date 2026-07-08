import '../styles/Switch.css'

export function Switch ({turnOn}) {
    return (
        <>
            <label className='box'>
                <input type="checkbox" defaultChecked={turnOn && "checked"}/>
                <span className='slider'></span>
            </label>
        </>
    )
}