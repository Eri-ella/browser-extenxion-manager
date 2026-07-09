import '../styles/NavBar.css';
import './Button'
import { Button } from './Button';
import Extension from './Extension';

export default function NavBar({appear, setAppear}) {
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
                        onClick={() => setAppear("all")}
                    />
                    <Button
                        className="button"
                        name="Active"
                        onClick={() => setAppear("active")}
                    />
                    <Button
                        className="button"
                        name="Inactive"
                        onClick={() => setAppear("inactive")}
                    />
                </span>
            </section>
        </>
    )
}