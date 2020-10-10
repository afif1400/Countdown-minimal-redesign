import React, { useState, useEffect } from 'react'
import HamburgerMenu from './HamburgerMenu'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import LogoWhite from '../svgs/LogoWhite.svg'
import LogoBlack from '../svgs/LogoBlack.svg'
import Menu from '../svgs/menuBlack.svg'
import MenuWhite from '../svgs/menuWhite.svg'
import { fadeIn } from '../utils/Animations'
import { navHeight } from '../constants'

const Header = ({ color, scrollFunction }) => {
    const [disabled, setDisabled] = useState(false)
    const [initial, setInitial] = useState(true)
    const [menu, setMenu] = useState(false)
    const [canScroll, setCanScroll] = useState(false)

   const scrollTo = (y) => {
    !!canScroll && scrollFunction(y)
  }

    useEffect(() => {
        setCanScroll(typeof scrollFunction === 'function')
        return () => {}
    }, [scrollFunction])

    return (
        <Grid container justify='center'>
            <div
                style={{
                    height: navHeight,
                    zIndex: 10,
                    position: 'relative',
                    width: '100%',
                }}
            >
                <Grid
                    container
                    jusitfy='center'
                    alignItems='center'
                    style={{ height: '100%', width: '100%' }}
                >
                    <Grid container justify='space-between' alignItems='center'>
                        <Grid item>
                            <Button
                                sm={3}
                                style={{ padding: 0, margin: 0 }}
                                disabled={disabled}
                                onClick={() => {
                                    if (initial) setInitial(false)
                                    setMenu(!menu)
                                    setDisabled(true)
                                    setTimeout(() => {
                                        setDisabled(false)
                                    }, 800)
                                }}
                            >
                                <>
                                    {color === 'white' && !menu ? (
                                        <Menu
                                            style={{
                                                height: 18,
                                            }}
                                        />
                                    ) : (
                                        <MenuWhite
                                            style={{
                                                height: 18,
                                            }}
                                        />
                                    )}
                                </>
                            </Button>
                            <Button
                                color='primary'
                                variant='outlined'
                                size='large'
                                style={{
                                    fontSize: '1rem',
                                    marginLeft: 32,
                                }}

                                onClick={() => {
                                  setTimeout(() => {
                                    scrollTo(
                                      window.innerHeight * 9.2 +
                                      96
                                    ) //put in the value you wanna scroll to
                                  }, 200)
                                }}
                            >
                                Register Now
                            </Button>
                        </Grid>
                        <Grid item>
                            {!!!menu &&
                                (color === 'white' ? (
                                    <LogoBlack style={{ width: 128 }} />
                                ) : (
                                    <LogoWhite style={{ width: 128 }} />
                                ))}
                        </Grid>
                    </Grid>
                </Grid>
            </div>
            <HamburgerMenu
                show={menu}
                setMenu={setMenu}
                initial={initial}
                canScroll={canScroll}
                scrollFunction={scrollFunction}
            />
        </Grid>
    )
}

export default Header
