import React, { useRef, useEffect, useState } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import withWidth from '@material-ui/core/withWidth'
import Img from 'gatsby-image'
import BackgroundImage from 'gatsby-background-image'
import gsap from 'gsap'
import { Draggable } from 'gsap/Draggable'
import speakeri1 from '../images/speakerImages/speaker1.png'
import speakeri2 from '../images/speakerImages/speaker2.png'
import speakeri3 from '../images/speakerImages/speaker3.png'
import speakeri4 from '../images/speakerImages/speaker4.png'
import speakeri5 from '../images/speakerImages/speaker5.png'
import speakeri6 from '../images/speakerImages/speaker6.png'
import speakeri7 from '../images/speakerImages/speaker7.png'
import speakeri8 from '../images/speakerImages/speaker8.png'

import '../styles/images.css'
import { Grid } from '@material-ui/core'


const Images = ({ image, width, children, styles }) => {
    const [backPos, setBackPos] = useState(35)
    useEffect(() => {
        gsap.from('.leftImage', {
            ease: 'power3.InOut',
            scrollTrigger: {
                trigger: '.about',
                // markers: true,
                scrub: true,
                onUpdate: (self) => setBackPos(35 + self.progress * 35),
            },
        })

        //Draggable carousel
        gsap.registerPlugin(Draggable)

        const wrapper = document.querySelector('.image-wrapper')
        const boxes = document.querySelector('.boxes')
        const proxy = document.createElement('div')

        const numBoxes = 10
        const boxWidth = Math.round(0.36 * window.innerWidth)
        const boxHeight = Math.round(0.82 * window.innerHeight)
        const imgWidth = boxWidth
        const imgHeight = boxHeight
        const viewWidth = window.innerWidth
        const wrapWidth = numBoxes * boxWidth
        const wrapVal = gsap.utils.wrap(0, wrapWidth)
        const offset = boxWidth - window.innerWidth * 0.125 + 24

        gsap.set([wrapper], { height: '100%' })
        gsap.set(boxes, { left: -boxWidth })

        const speakers = [
            {simage:`${speakeri1}`,sname:"speaker Names"},
            {simage:`${speakeri2}`,sname:"speaker Names"},
            {simage:`${speakeri3}`,sname:"speaker Names"},
            {simage:`${speakeri4}`,sname:"speaker Names"},
            {simage:`${speakeri5}`,sname:"speaker Names"},
            {simage:`${speakeri6}`,sname:"speaker Names"},
            {simage:`${speakeri7}`,sname:"speaker Names"},
            {simage:`${speakeri8}`,sname:"speaker Names"},
        ]
        for (let i = 0; i < speakers.length; i++) {
            const src = speakers[i]['simage']

            const img = document.createElement('img')
            img.src = src
            img.width = imgWidth
            img.height = imgHeight
            img.style.paddingLeft = '24px'
            img.style.paddingRight = '24px'

            const box = document.createElement('div')

            box.className = 'box'
            box.paddingRight = 24

            const speakerInfo = document.createElement("div")

            speakerInfo.className="speakerInfo"

            const name = document.createElement('p')

            speakerInfo.appendChild(name)

            speakerInfo.appendChild(document.createElement('br'))

            name.innerHTML=speakers[i]['sname']
            name.className="name"
<<<<<<< HEAD
            const position = document.createElement('p')
=======
            name.style.backgroundColor = 'black'
            const position = document.createElement('Typography')
>>>>>>> 5e89265bbd51f3f8b0bb3538619af2b60e51320a

            speakerInfo.appendChild(position)
            position.innerHTML="Speaker designation"
            position.className="position"
            position.style.backgroundColor = 'black'

            box.appendChild(img)
            box.appendChild(speakerInfo)
<<<<<<< HEAD
=======

>>>>>>> 5e89265bbd51f3f8b0bb3538619af2b60e51320a
            boxes.appendChild(box)

            gsap.set(box, {
                x: i * boxWidth - offset,
                width: boxWidth,
                height: boxHeight,
            })
        }

        const animation = gsap.to('.box', {
            duration: 1,
            x: `+=${wrapWidth}`,
            ease: 'none',
            paused: true,
            modifiers: {
                x: function (x, target) {
                    x = parseInt(x) % wrapWidth
                    target.style.visibility =
                        x - boxWidth > viewWidth ? 'hidden' : 'visible'
                    return `${x}px`
                },
            },
        })

        Draggable.create(proxy, {
            type: 'x',
            trigger: '.image-wrapper',
            // inertia: true,
            onDrag: updateProgress,
            onThrowUpdate: updateProgress,
            snap: {
                x: (x) => {
                    return Math.round(x / boxWidth) * boxWidth
                },
            },
        })

        window.addEventListener('resize', resize)

        function updateProgress() {
            animation.progress(wrapVal(this.x) / wrapWidth)
        }

        function resize() {
            animation.render(animation.time(), false, true)
        }

        return () => {}
    }, [])

    const overlay = 0.24
    const image1 = useRef()
    const image2 = useRef()
    const data = useStaticQuery(graphql`
        query {
            aboutImage1: file(relativePath: { eq: "saveOurFuture.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 1080, fit: INSIDE) {
                        aspectRatio
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            aboutImage2: file(relativePath: { eq: "planetB.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 1080, fit: INSIDE) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            starry: file(relativePath: { eq: "Starry.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 1080) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            boxedWater: file(relativePath: { eq: "boxedWater.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 1080) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            iceHand: file(relativePath: { eq: "iceHand.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 1080) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            speaker1: file(relativePath: { eq: "speaker1.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 1080) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            band: file(relativePath: { eq: "band.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 1080) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `)

    useEffect(() => {}, [])

    if (image === 'countdownLogo') {
        if (!data?.fileName?.childImageSharp?.fluid) {
            return <div>Picture not found</div>
        }
        return (
            <div style={{ width: '32vw', height: '100%' }}>
                <Img fluid={data.fileName.childImageSharp.fluid} />
            </div>
        )
    }

    if (image === 'aboutImage1') {
        if (!data?.aboutImage2?.childImageSharp?.fluid) {
            return <div>Picture not found</div>
        }

        return (
            <div
                style={{
                    height: '100%',
                    width: '84%',
                }}
            >
                <BackgroundImage
                    Tag='div'
                    fluid={data.aboutImage2.childImageSharp.fluid}
                    backgroundColor={`#f1ff39`}
                    style={{
                        height: '100%',
                        width: '100%',
                        position: 'relative',
                        backgroundPosition: `center ${backPos}%`,
                    }}
                    ref={image1}
                    className='leftImage'
                >
                    <div
                        style={{
                            position: 'absolute',
                            height: '100%',
                            width: '100%',
                            zIndex: 2,
                            backgroundColor: `rgba(0,0,0,${overlay})`,
                        }}
                    />
                </BackgroundImage>
            </div>
        )
    }

    if (image === 'starry') {
        if (!data?.starry?.childImageSharp?.fluid) {
            return <div>Picture not found</div>
        }
        return (
            <BackgroundImage
                Tag='div'
                fluid={data.starry.childImageSharp.fluid}
                style={{
                    minHeight: '100vh',
                    width: '100%',
                    position: 'relative',
                }}
            >
                {' '}
                {children}
            </BackgroundImage>
        )
    }

    if (image === 'boxedWater') {
        if (!data?.boxedWater?.childImageSharp?.fluid) {
            return <div>Picture not found</div>
        }
        return (
            <BackgroundImage
                Tag='span'
                fluid={data.boxedWater.childImageSharp.fluid}
                style={{
                    height: 480,
                    width: 720,
                    position: 'relative',
                    display: 'inline',
                    ...styles,
                }}
            >
                <div
                    style={{
                        position: 'absolute',
                        height: '100%',
                        width: '100%',
                        zIndex: 2,
                        backgroundColor: `rgba(0,0,0,${overlay})`,
                    }}
                ></div>
            </BackgroundImage>
        )
    }
    if (image === 'iceHand') {
        if (!data?.iceHand?.childImageSharp?.fluid) {
            return <div>Picture not found</div>
        }
        return (
            <BackgroundImage
                Tag='span'
                fluid={data.iceHand.childImageSharp.fluid}
                style={{
                    height: 480,
                    width: 480,
                    position: 'relative',
                    display: 'inline',
                }}
            >
                <div
                    style={{
                        position: 'absolute',
                        height: '100%',
                        width: '100%',
                        zIndex: 2,
                        backgroundColor: `rgba(0,0,0,${overlay})`,
                    }}
                ></div>
            </BackgroundImage>
        )
    }

    if (image === 'band') {
        if (!data?.band?.childImageSharp?.fluid) {
            return <div>Picture not found</div>
        }
        return (
            <div
                style={{
                    display: 'flex',
                    height: '100vh',
                    width: '50vw',
                    position: 'relative',
                }}
                className='slide'
            >
                <Img
                    style={{ height: '100%', width: '100%' }}
                    fluid={data.band.childImageSharp.fluid}
                />
            </div>
        )
    }

    if (image === 'speaker1') {
        if (!data?.speaker1?.childImageSharp?.fluid) {
            return <div>Picture not found</div>
        }
        return (
            <>
                <div className='image-wrapper'>
                    <div className='boxes'/>
                </div>
            </>
        )
    }
}
export default withWidth()(Images)
