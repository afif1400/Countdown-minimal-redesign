import React, { useState, useEffect } from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import gsap, { TweenMax } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from '../components/Link';
import Header from '../components/Header';
import '../styles/index.scss';
import ASScroll from '../utils/scrollSsr';
import About from '../components/About';
import { Hero, Speakers, Performances, Form, Footer } from '../components';
import { navHeight } from '../constants';

export default function Index() {
  const [mobile, setMobile] = useState(false);
  const [scrollFunction, setScrollFunction] = useState();
  useEffect(() => {
    const userAgent =
      typeof window.navigator === 'undefined' ? '' : navigator.userAgent;
    const mobile = Boolean(
      userAgent.match(
        /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i
      )
    );
    console.log('mobile', mobile);
    setMobile(mobile);
    if (mobile) {
      window.location.replace('https://tedxpesu.com');
    }
    //setup smooth scroll plus scrollTrigger
    const asscroll = new ASScroll({
      customScrollbar: true,
    });

    const scrollTo = () => asscroll.scrollTo;

    setScrollFunction(scrollTo);

    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.defaults({
      scroller: '#scroll-container',
    });
    ScrollTrigger.scrollerProxy('#scroll-container', {
      scrollTop(value) {
        return arguments.length
          ? asscroll.scrollTo(value)
          : -asscroll.smoothScrollPos;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
    });
    asscroll.on('raf', ScrollTrigger.update);
    asscroll.on('scroll', ScrollTrigger.update);
    ScrollTrigger.addEventListener('refresh', () => asscroll.onResize());
    ScrollTrigger.addEventListener('scrollStart', () => {
      return asscroll.onResize();
    });

    asscroll.enable(false, true, document.querySelector('#scroll-container'));
    //done setup
    const toMove =
      window.innerHeight * 1.7 +
      navHeight +
      document.querySelector('.about').offsetHeight;

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
        onLeave: () => ScrollTrigger.refresh(),
      },
    });

    gsap.to('.slide', {
      xPercent: -100 * 2,
      ease: 'none',
      scrollTrigger: {
        trigger: '.performanceSlide',
        pin: true,
        // pinReparent: true,
        scrub: 1,
        snap: 1 / (4 - 1),
        // base vertical scrolling on how wide the container is so it feels more natural.
        // markers: true,
        end: () =>
          '+=' + document.querySelector('.performanceSlide').offsetWidth,
      },
    });
    gsap.to('.form', 0.6, {
      scrollTrigger: {
        trigger: '.form',
        // markers: true,
        start: 'top top',
        end: 'bottom bottom ',
        onEnter: () => setColor('#f1ff39'),
        onLeaveBack: () => setColor('black'),
      },
    });

    return () => {
      asscroll.off('scroll', ScrollTrigger.update);
    };
  }, []);

  const [color, setColor] = useState('black');
  const [loading, setLoading] = useState(true);

  return (
    <>
      <div
        className='asscroll-container'
        style={{
          backgroundColor: color,
        }}
      >
        <div id='scroll-container'>
          <div className='container' style={{ backgroundColor: color }}>
            <Header color={color} scrollFunction={scrollFunction} />
          </div>
          <Hero color={color} loading={loading} setLoading={setLoading} />
          <About color={color} />
          <Speakers color={color} />
          <Performances color={color} />
          <Form color={color} />
          <Footer color={color} />
        </div>
      </div>
    </>
  );
}
