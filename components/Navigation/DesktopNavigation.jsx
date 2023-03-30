import { useState, useEffect, useRef } from 'react';
import { gsap, ScrollTrigger } from '../../config/gsapConfig';
import classes from './Navigation.module.css';
import NavItem from './NavItem';


const DesktopNavigation = () => {
    const navRef = useRef(null);
    const [active, setActive] = useState(0);


    useEffect(() => {
        const element = navRef.current;
        const lbs = element.querySelectorAll(".lb");

        const aboutTab = lbs[0];
        const workTab = lbs[1];
        const experienceTab = lbs[2];
        const testimonialsTab = lbs[3];
        const contactTab = lbs[4]

        /* About Tab Animation */
        gsap.to(aboutTab, {
            duration: 0.6,
            y: -40,
            ease: "bounce.out",
            delay: 0.4,
            scrollTrigger: {
                trigger: "#about",
                start: "top center",
                endTrigger: '#work', 
                end: 'top center',
                toggleActions: "play reverse restart none",
                fastScrollEnd: 3000,
                onEnter: () => {setActive(0)},
                onEnterBack: () => {setActive(0)}
            }
        })

        /* Work Tab Animation */
        gsap.to(workTab, {
            duration: 0.6,
            y: -40,
            ease: "bounce.out",
            delay: 0.4,
            scrollTrigger: {
                trigger: "#work",
                start: "top center",
                endTrigger: '#experience',
                end: 'top center',
                toggleActions: "play reverse restart reverse",
                fastScrollEnd: 3000,
                onEnter: () => {setActive(1)},
                onEnterBack: () => {setActive(1)}
            }
        })

        /* Experience Tab Animation */
        gsap.to(experienceTab, {
            duration: 0.6,
            y: -40,
            ease: "bounce.out",
            delay: 0.4,
            scrollTrigger: {
                trigger: "#experience",
                start: "top center",
                endTrigger: '#testimonials',
                end: 'top center',
                toggleActions: "play reverse restart reverse",
                fastScrollEnd: 3000,
                onEnter: () => {setActive(2)},
                onEnterBack: () => {setActive(2)}
            }
        })

        /* Testimonials Tab Animation */
        gsap.to(testimonialsTab, {
            duration: 0.6,
            y: -40,
            ease: "bounce.out",
            delay: 0.4,
            scrollTrigger: {
                trigger: "#testimonials",
                start: "top center",
                endTrigger: '#contact',
                end: 'top center',
                toggleActions: "play reverse restart reverse",
                fastScrollEnd: 3000,
                onEnter: () => {setActive(3)},
                onEnterBack: () => {setActive(3)}
            }
        })

        /* Contact Tab Animation */
        gsap.to(contactTab, {
            duration: 0.6,
            y: -40,
            ease: "bounce.out",
            delay: 0.4,
            scrollTrigger: {
                trigger: "#contact",
                start: "top center",
                end: 'bottom max',
                toggleActions: "play reverse restart reverse",
                fastScrollEnd: 3000,
                onEnter: () => {setActive(4)},
                onEnterBack: () => {setActive(4)}
            }
        })

        /* Sticky Toggle Trigger */

        const setFixed = () => gsap.set(navRef.current, {
            position: 'fixed'
        })

        const setAbsolute = () => gsap.set(navRef.current, {
            position: 'absolute'
        })

        ScrollTrigger.create({
            trigger: document.querySelector('#about'),
            start: "top top",
            end: 99999,
            onEnter: () => setFixed(),
            onLeaveBack: () => setAbsolute()
        })

        /* Show/Hide Animation */

        const showNav = gsap.fromTo(navRef.current, {
                    opacity: 0,
                    yPercent: -100
                },
                {
                    opacity: 1,
                    yPercent: 0,
                    duration: 0.3,
                    paused: true
                }
                ).progress(1)
        
        ScrollTrigger.create({
            trigger: document.querySelector('#skills'),
            start: "top 30%",
            end: 99999,
            onUpdate: (self) => {
                self.direction === -1 ? showNav.play() : showNav.reverse()
            }
        });

    }, [])

    return (
        <div ref={navRef} className={classes.header} >
            <nav className={classes.menu}>
                <ul>
                    <NavItem 
                        index={0}
                        isActive={active}
                        label="About"
                        linkId="about"
                    />
                    <NavItem 
                        index={1}
                        isActive={active}
                        label="Work"
                        linkId="work"
                    />
                    <NavItem 
                        index={2}
                        isActive={active}
                        label="Experience"
                        linkId="experience"
                    />
                    <NavItem 
                        index={3}
                        isActive={active}
                        label="Testimonials"
                        linkId="testimonials"
                    />
                    <NavItem 
                        index={4}
                        isActive={active}
                        label="Contact"
                        linkId="contact"
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
        </div>
    )
}

export default DesktopNavigation;