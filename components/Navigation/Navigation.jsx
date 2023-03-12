import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import classes from './Navigation.module.css';
import NavItem from './NavItem';
import useScrollPosition from '../../hooks/useScrollPosition';


const Navigation = () => {
    gsap.registerPlugin(ScrollTrigger)
    const navRef = useRef(null);
    const [isSticky, setIsSticky] = useState(false);
    const [active, setActive] = useState(0);
    const [lbNodes, setLbNodes] = useState([]);

    const scrollPosition = useScrollPosition();

    useEffect(() => {
        const element = navRef.current;
        const lbs = element.querySelectorAll(".lb");
        setLbNodes(lbs);

        gsap.to(lbs[0], {
            duration: 0.6,
            y: -40,
            ease: "bounce.out",
            delay: 1
        })
    }, [])

    useEffect(() => {
        const showNav = gsap.fromTo(navRef.current, {
            opacity: 0,
        },
        {
            opacity: 1,
            duration: 0.5,
            paused: true
        }
        ).progress(1)

        ScrollTrigger.create({
            trigger: document.querySelector('#about'),
            start: 1000,
            end: 99999,
            onUpdate: (self) => {
                if (isSticky) {
                    self.direction === -1 ? showNav.play() : showNav.reverse()
                }
            }
        });
    }, [isSticky])

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


    useEffect(() => {
        const sectionTops = { // Y Position of Tops of Sections
            about: 915,
            work: 2486,
            experience: 3234,
            testimonials: 4418,
            contact: 5300
        };

        // Toggle nav sticky behavior after about section
        if (!isSticky && scrollPosition >= sectionTops.about) {
            setIsSticky(true);
        } else if (isSticky && scrollPosition < sectionTops.about) {
            setIsSticky(false);
        }

        function pushDown() {
            gsap.to(lbNodes[active], {
                duration: 0.5,
                y: 0,
                ease:  "power3.out"
            });
        }

        function popUp(index) {
            gsap.to(lbNodes[index], {
                duration: 0.5,
                y: -40,
                ease: "bounce.out"
            });
        }

        // Sync active nav item with page position
        if (scrollPosition < sectionTops.work && active !== 0) { // Are we in the About section?
            pushDown();
            setActive(0);
            popUp(0);
        } else if (scrollPosition < sectionTops.experience && scrollPosition >= sectionTops.work && active !== 1) { // Are we in the Work section?
            pushDown();
            setActive(1);
            popUp(1);
        } else if (scrollPosition < sectionTops.testimonials && scrollPosition >= sectionTops.experience && active !== 2) { // Are we in the Experience section?
            pushDown();
            setActive(2);
            popUp(2);
        } else if (scrollPosition < sectionTops.contact && scrollPosition >= sectionTops.testimonials && active !== 3) { // Are we in the Testimonials section?
            pushDown();
            setActive(3);
            popUp(3);
        } else if (scrollPosition > sectionTops.contact && active !== 4) {
            pushDown();
            setActive(4);
            popUp(4);
        }
    }, [isSticky, scrollPosition, active, lbNodes])

    return (
        <section ref={navRef} className={classes.header} style={isSticky ? {position: 'fixed'}:{}}>
            <nav className={classes.menu}>
                <ul>
                    <NavItem 
                        index={0}
                        isActive={active}
                        label="About"
                        linkId="about"
                        onClick={handleClick}
                    />
                    <NavItem 
                        index={1}
                        isActive={active}
                        label="Work"
                        linkId="work"
                        onClick={handleClick}
                    />
                    <NavItem 
                        index={2}
                        isActive={active}
                        label="Experience"
                        linkId="experience"
                        onClick={handleClick}
                    />
                    <NavItem 
                        index={3}
                        isActive={active}
                        label="Testimonials"
                        linkId="testimonials"
                        onClick={handleClick}
                    />
                    <NavItem 
                        index={4}
                        isActive={active}
                        label="Contact"
                        linkId="contact"
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