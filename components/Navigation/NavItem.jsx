import { gsap } from 'gsap'
import classes from './Navigation.module.css'

const NavItem = ({
    index,
    label,
    onMouseEnter,
    onClick
}) => {
    const handleMouseEnter = () => onMouseEnter(index);
    const handleClick = () => onClick(index);

    return (
        <li 
            className={classes.navItem}
            onMouseEnter={() => handleMouseEnter()}
            onClick={() => handleClick()}
        >{label}</li>
    )
    
}

export default NavItem;