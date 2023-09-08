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
    linkId,
}) => {

    return (
        <li 
            className={cx({
                navItem: true,
                active: index === isActive ? true : false
            })}
        >
            <a href={`#${linkId}`}>{label}</a>
        </li>
    )
    
}

export default NavItem;