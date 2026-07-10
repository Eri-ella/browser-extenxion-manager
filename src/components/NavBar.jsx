import '../styles/NavBar.css';
import './Button'
import { Button } from './Button';
import Extension from './Extension';

export default function NavBar({appear, setAppear, focusBut, setFocusBut}) {

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
                        isFocused={appear == "all" ? true : false}
                        isHovered={true}
                    />
                    <Button
                        className="button"
                        name="Active"
                        onClick={() => setAppear("active")}
                        isFocused={appear == "active" ? true : false}
                        isHovered={true}
                    />
                    <Button
                        className="button"
                        name="Inactive"
                        onClick={() => setAppear("inactive")}
                        isFocused={appear == "inactive" ? true : false}
                        isHovered={true}
                    />
                </span>
            </section>
        </>
    )
}