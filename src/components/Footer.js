import React from 'react'
import InstagramIcon from '@material-ui/icons/Instagram'
import MailOutlineIcon from '@material-ui/icons/MailOutline'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import FacebookIcon from '@material-ui/icons/Facebook'
import Typography from '@material-ui/core/Typography'

const Footer = () => {
    const fontSize = 24
    return (
        <div className='footer'>
            <div style={{ backgroundColor: 'black' }} className='container'>
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        paddingTop: 24,
                        paddingBottom: 24,
                    }}
                >
                    <div>
                        <Typography
                            variant='subtitle2'
                            style={{ color: 'white' }}
                        >
                            Designed by Vinay Sateesh
                        </Typography>
                    </div>
                    <div>
                        {' '}
                        <a href='mailto:contact@tedxpesu.com'>
                            <MailOutlineIcon
                                style={{
                                    fontSize: fontSize,
                                    color: 'white',
                                    margin: '24px',
                                }}
                            />
                        </a>
                        <a href='https://linkedin.com/company/tedxpesu'>
                            {' '}
                            <LinkedInIcon
                                style={{
                                    fontSize: fontSize,
                                    color: 'white',
                                    margin: '24px',
                                }}
                            />
                        </a>
                        <a href='https://instagram.com/tedxpesu'>
                            {' '}
                            <InstagramIcon
                                style={{
                                    fontSize: fontSize,
                                    color: 'white',
                                    margin: '24px',
                                }}
                            />
                        </a>
                        <a href='https://facebook.com/tedxpesu'>
                            {' '}
                            <FacebookIcon
                                style={{
                                    fontSize: fontSize,
                                    color: 'white',
                                    margin: '24px',
                                }}
                            />
                        </a>
                    </div>
                    <div>
                        {' '}
                        <Typography
                            variant='subtitle2'
                            style={{ color: 'white' }}
                        >
                            Co-developed by Afif ahmed
                        </Typography>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
