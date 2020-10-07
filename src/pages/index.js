import React, { useState, useEffect } from 'react'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import Link from '../components/Link'
import Header from '../components/Header'
import '../styles/index.scss'
import ASScroll from '../utils/scrollSsr'
import Hero from '../components/Hero'
import About from '../components/About'

export default function Index() {
    useEffect(() => {
        //setup smooth scroll plus scrollTrigger
        const asscroll = new ASScroll({
            customScrollbar: true,
        })
        gsap.registerPlugin(ScrollTrigger)
        ScrollTrigger.defaults({
            scroller: '#scroll-container',
        })
        ScrollTrigger.scrollerProxy('#scroll-container', {
            scrollTop(value) {
                return arguments.length
                    ? asscroll.scrollTo(value)
                    : -asscroll.smoothScrollPos
            },
            getBoundingClientRect() {
                return {
                    top: 0,
                    left: 0,
                    width: window.innerWidth,
                    height: window.innerHeight,
                }
            },
        })
        asscroll.on('raf', ScrollTrigger.update)
        ScrollTrigger.addEventListener('refresh', () => asscroll.onResize())
        asscroll.enable(
            false,
            true,
            document.querySelector('#scroll-container')
        )
        //done setup
        const toMove =
            window.innerHeight * 1.7 +
            96 +
            document.querySelector('.about').offsetHeight

        //parallax video
        gsap.to('.video', {
            y: toMove,
            ease: 'none',
            scrollTrigger: {
                trigger: '#scroll-container',
                start: '0 0',
                end: 'bottom top ',
                scrub: true,
                endTrigger: '.about',
            },
        })

        return () => {}
    }, [])

    const [color, setColor] = useState('black')

    return (
        <>
            <div
                className='asscroll-container'
                style={{
                    backgroundColor: color,
                }}
            >
                <div id='scroll-container'>
                    <div
                        className='container'
                        style={{ backgroundColor: color }}
                    >
                        <Header color={color} />
                    </div>{' '}
                    <Hero color={color} />
                    <About color={color} />
                    <div
                        style={{ height: '100vh', backgroundColor: 'white' }}
                    ></div>
                </div>
            </div>
        </>
    )
}
