import { navItem, active } from './Navigation.module.css'
import classNames from 'classnames/bind';

let cx = classNames.bind({
    navItem: navItem,
    active: active
})

const NavItem = ({
    index,
    isActive,
    label,
    onClick
}) => {
    const handleClick = () => onClick(index);

    return (
        <li 
            className={cx({
                navItem: true,
                active: index === isActive ? true : false
            })}
            onClick={() => handleClick()}
        >{label}</li>
    )
    
}

export default NavItem;