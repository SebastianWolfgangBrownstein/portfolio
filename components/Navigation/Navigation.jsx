import { useState, useEffect } from 'react';
import { gsap } from 'gsap';
import classes from './Navigation.module.css';
import NavItem from './NavItem';


const Navigation = () => {
    const [active, setActive] = useState(0)

    const [lbNodes, setLbNodes] = useState([]);

    useEffect(() => {
        const lbs = document.querySelectorAll(".lb");
        setLbNodes(lbs);

        gsap.to(lbs[0], {
            duration: 0.6,
            y: -40,
            ease: "bounce.out",
            delay: 1
        })

    }, [])

    function pushDownLb() {
        for(let k = 0; k < lbNodes.length; ++k) {
            gsap.to(lbNodes[k], {
                duration: 0.5,
                y: 0,
                ease:  "power3.out"
            });
        }
    }

    const handleClick = (index) => {
		pushDownLb();
        setActive(index)
		gsap.to(lbNodes[index], {
                    duration: 0.5,
					y: -40,
					ease: "bounce.out"
				});
    }

    return (
        <section className={classes.header}>
            <nav className={classes.menu}>
                <ul>
                    <NavItem 
                        index={0}
                        isActive={active}
                        label="About"
                        onClick={handleClick}
                    />
                    <NavItem 
                        index={1}
                        isActive={active}
                        label="Work"
                        onClick={handleClick}
                    />
                    <NavItem 
                        index={2}
                        isActive={active}
                        label="Experience"
                        onClick={handleClick}
                    />
                    <NavItem 
                        index={3}
                        isActive={active}
                        label="Testimonials"
                        onClick={handleClick}
                    />
                    <NavItem 
                        index={4}
                        isActive={active}
                        label="Contact"
                        onClick={handleClick}
                    />
                </ul>
                <svg className={classes.lineBottom} width="1000" height="30" viewBox="0,0 1350,40">
                    <polygon className="lb" points="43,53 123,53 133,43 143,53 223,53" />
                    <polygon className="lb" points="313,53 393,53 403,43 413,53 493,53" />
                    <polygon className="lb" points="583,53 663,53 673,43 683,53 761,53" />
                    <polygon className="lb" points="853,53 933,53 943,43 953,53 1033,53" />
                    <polygon className="lb" points="1123,53 1203,53 1213,43 1223,53 1303,53" />
                </svg>
            </nav>
        </section>
    )
}

export default Navigation;