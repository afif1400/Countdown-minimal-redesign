import React, { useRef, useEffect } from 'react'
import gsap from 'gsap'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'

import './menu.scss'
import { staggerRevealClose } from '../utils/Animations'

const HamburgerMenu = ({ show, setMenu, initial }) => {
    let menu = useRef(null)
    const reveal1 = useRef()
    const reveal2 = useRef()

    useEffect(() => {
        document.body.style.overflow = 'auto'
        if (!show && !initial) {
            staggerRevealClose(reveal2.current, reveal1.current)

            gsap.to(menu, { duration: 1, css: { display: 'none' } })

            setMenu(false)
        }
        if (show) {
            menu.style.display = 'block'

            document.body.style.overflow = 'hidden'
            gsap.to([reveal1.current, reveal2.current], {
                duration: 0,
                height: '100vh',
                opacity: 1,
            })
            gsap.from([reveal1.current, reveal2.current], {
                duration: 0.8,
                height: 0,
                transformOrigin: 'right top',
                skewY: 2,
                ease: 'power3.inOut',
                stagger: {
                    amount: 0.1,
                },
            })
        }
        return () => {}
    }, [show])

    return (
        <header style={{ height: 0 }}>
            <div ref={(el) => (menu = el)} className='hamburger-menu'>
                <div
                    ref={reveal1}
                    className='menu-secondary-background-color'
                ></div>
                <div ref={reveal2} className='menu-layer'>
                    <div className='menu-city-background'></div>
                    <div className='container'>
                        <div className='wrapper'>
                            <div className='menu-links'>
                                <Grid
                                    container
                                    justify='center'
                                    alignItems='center'
                                    style={{
                                        marginTop: 240,
                                        width: '75%',
                                        paddingBottom: 240,
                                    }}
                                >
                                    <nav>
                                        <ul>
                                            <li>
                                                <Typography
                                                    variant='h1'
                                                    component='span'
                                                >
                                                    About
                                                </Typography>
                                            </li>
                                            <li>
                                                <Typography
                                                    variant='h1'
                                                    component='span'
                                                >
                                                    Speakers
                                                </Typography>
                                            </li>
                                            <li>
                                                <Typography
                                                    variant='h1'
                                                    component='span'
                                                >
                                                    Performances
                                                </Typography>
                                            </li>
                                        </ul>
                                    </nav>
                                </Grid>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default HamburgerMenu
