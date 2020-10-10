import React, { useState } from 'react'
import HamburgerMenu from './HamburgerMenu'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import LogoWhite from '../svgs/LogoWhite.svg'
import LogoBlack from '../svgs/LogoBlack.svg'
import Menu from '../svgs/menuBlack.svg'
import MenuWhite from '../svgs/menuWhite.svg'
import { fadeIn } from '../utils/Animations'

const Header = ({ color }) => {
    const [disabled, setDisabled] = useState(false)
    const [initial, setInitial] = useState(true)
    const [menu, setMenu] = useState(false)

    return (
        <div>
            <div
                style={{
                    height: 96,
                    zIndex: 10,
                    position: 'relative',
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
            <HamburgerMenu show={menu} setMenu={setMenu} initial={initial} />
        </div>
    )
}

export default Header
