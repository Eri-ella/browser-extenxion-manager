import '../styles/NavBar.css';
import './Button'
import { Button } from './Button';


export default function NavBar() {
    function handleAll(){

    }

    function handleActive(){
        
    }

    function handleInactive(){
        
    }

    return(
        <>
            <section className='navBar'>
                <span className='col1'>
                    <p>Extensions List</p>
                </span>
                <span className='col2'>
                    <Button
                        className="button"
                        name="All"
                        onClick={handleAll}
                    />
                    <Button
                        className="button"
                        name="Active"
                        onClick={handleAll}
                    />
                    <Button
                        className="button"
                        name="Inactive"
                        onClick={handleInactive}
                    />
                </span>
            </section>
        </>
    )
}