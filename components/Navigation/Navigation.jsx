import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import classes from './Navigation.module.css';
import NavItem from './NavItem';


const Navigation = () => {
    const speed = 500; //move this many pixels in one second.

    const listRef = useRef(null);
    const lineDashRef = useRef(null);

    const [dashOrigin, setDashOrigin] = useState(-38); // pixels
    const [selectedLi, setSelectedLi] = useState(-38); // pixels
    const [distance, setDistance] = useState(0);
    const [time, setTime] = useState(0);

    const [liNodes, setLiNodes] = useState([]);
    const [lbNodes, setLbNodes] = useState([]);

    function pushDownLb() {
        for(let k = 0; k < lbNodes.length; ++k) {
            gsap.to(lbNodes[k], {
                duration: 0.5,
                y: 0,
                ease:  "power3.out"
            });
        }
    }

    useEffect(() => {
        const lis = document.querySelectorAll("li");
        const lbs = document.querySelectorAll(".lb");
        const lineDash = document.querySelector(".lineDash")
        setLiNodes(lis);
        setLbNodes(lbs);

        

        gsap.to(lbs[0], {
            duration: 0.6,
            y: -43,
            ease: "bounce.out",
            delay: 1
        })

        lis[0].classList.add("active");

    }, [])

    const handleMouseEnter = (index) => {
        let newDistance = Math.abs(-270 * index - 38 - dashOrigin);
        let newTime = newDistance / speed;
        setDistance(newDistance);
        setTime(newTime)
        setDashOrigin(-270 * index - 38)

        if (time && lineDashRef.current) {
            gsap.to(lineDashRef.current, {
                duration: newTime,
                strokeDashoffset:  -270 * index -38,
                ease: "bounce.out"
            })
        }
    }

    const handleClick = (index) => {
        setSelectedLi(-300 * index - 38);
		pushDownLb();
		let current = document.getElementsByClassName("active");
		current[0].classList.remove("active");
		liNodes[index].classList.add("active");
		gsap.to(lbNodes[index], {
                    duration: 0.5,
					y: -43,
					ease: "bounce.out"
				});
	
    }

    return (
        <section className={classes.header}>
            <nav className={classes.menu}>
                <svg className={classes.lineTop} width="1000" height="15" viewBox="0, 0 1350, 20">
                    <line 
                        className="lineDash"
                        ref={lineDashRef}
                        x1={0}
                        y1={15}
                        x2={1350}
                        y2={15}
                        style={{
                            stroke: 'orange', 
                            strokeWidth: '2', 
                            strokeLinecap: 'round', 
                            strokeDasharray: '180 1300', 
                            strokeDashoffset: "-38"
                        }}
                    />
                </svg>
                <ul ref={listRef}>
                    <NavItem 
                        index={0}
                        label="About"
                        onMouseEnter={handleMouseEnter}
                        onClick={handleClick}
                    />
                    <NavItem 
                        index={1}
                        label="Work"
                        onMouseEnter={handleMouseEnter}
                        onClick={handleClick}
                    />
                    <NavItem 
                        index={2}
                        label="Experience"
                        onMouseEnter={handleMouseEnter}
                        onClick={handleClick}
                    />
                    <NavItem 
                        index={3}
                        label="Testimonials"
                        onMouseEnter={handleMouseEnter}
                        onClick={handleClick}
                    />
                    <NavItem 
                        index={4}
                        label="Contact"
                        onMouseEnter={handleMouseEnter}
                        onClick={handleClick}
                    />
                </ul>
                <svg className={classes.lineBottom} width="1000" height="30" viewBox="0,0 1350,40">
                    <polygon className="lb" points="38,53 118,53 128,43 138,53 218,53" />
                    <polygon className="lb" points="288,53 368,53 378,43 388,53 468,53" />

                    <polygon className="lb" points="538,53 618,53 628,43 638,53 718,53" />

                    <polygon className="lb" points="788,53 868,53 878,43 888,53 968,53" />
                    <polygon className="lb" points="1038,53 1118,53 1128,43 1138,53 1218,53" />
                </svg>
            </nav>
        </section>
    )
}

export default Navigation;