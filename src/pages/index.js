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

        return () => {}
    }, [])

    const [color, setColor] = useState('white')
    return (
        <div
            className='asscroll-container'
            style={{
                backgroundColor: color,
            }}
        >
            <div id='scroll-container'>
                {/* Put the body here */}
                <div className='container'>
                    <Header color={color} />
                    <Box
                        my={4}
                        style={{ height: '100vh', backgroundColor: 'red' }}
                    >
                        <Typography variant='h4' component='h1' gutterBottom>
                            Gatsby v4-beta example
                        </Typography>
                    </Box>{' '}
                    <Box
                        my={4}
                        style={{ height: '100vh', backgroundColor: 'blue' }}
                    >
                        <Typography variant='h4' component='h1' gutterBottom>
                            Gatsby v4-beta example
                        </Typography>
                    </Box>
                </div>
            </div>
        </div>
    )
}
