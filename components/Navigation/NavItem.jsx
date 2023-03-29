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
        <a href={`#${linkId}`}>
            <li 
                className={cx({
                    navItem: true,
                    active: index === isActive ? true : false
                })}
            >{label}</li>
        </a>
        
    )
    
}

export default NavItem;