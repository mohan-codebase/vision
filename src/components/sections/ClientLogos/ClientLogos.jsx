import { useCallback, useEffect, useRef, useState } from 'react'
import { clientLogos } from '../../../data/home.js'
import useMediaQuery from '../../../hooks/useMediaQuery.js'
import Icon from '../../ui/Icon.jsx'
import './ClientLogos.css'

import logoCeleste from '../../../assets/images/logo-celeste.png'
import logoApplauz from '../../../assets/images/logo-applauz.png'
import logoBello from '../../../assets/images/logo-bello.png'
import logoHotelBerg from '../../../assets/images/logo-hotel-berg.png'
import logoHotelCalifornia from '../../../assets/images/logo-hotel-california.png'
import logoEstato from '../../../assets/images/logo-estato.png'
import logoAddison from '../../../assets/images/logo-addison.png'
import logoUrbanist from '../../../assets/images/logo-urbanist.png'
import logoBoldNews from '../../../assets/images/logo-bold-news.png'

const SOURCES = {
  'logo-celeste.png': logoCeleste,
  'logo-applauz.png': logoApplauz,
  'logo-bello.png': logoBello,
  'logo-hotel-berg.png': logoHotelBerg,
  'logo-hotel-california.png': logoHotelCalifornia,
  'logo-estato.png': logoEstato,
  'logo-addison.png': logoAddison,
  'logo-urbanist.png': logoUrbanist,
  'logo-bold-news.png': logoBoldNews,
}

const AUTOPLAY_MS = 3000
const SLIDE_MS = 300
const N = clientLogos.length
const CLONES = 6 // widest `slidesToShow`, so clone runs never run short

// tail clones · originals · head clones
const TRACK = [
  ...clientLogos.slice(N - CLONES),
  ...clientLogos,
  ...clientLogos.slice(0, CLONES),
]

/**
 * Section 6 — client logo carousel.
 *
 * Reference: `bt_bb_slider.bt_bb_multiple_slides.bt_bb_animation_slide` —
 * Slick with `slidesToShow: 6`, `autoplay` every 3000ms, `speed 300`, large
 * transparent-dark arrows positioned outside, on a `#f5f5f5` band. Responsive
 * `slidesToShow`: 480→1, 768→2, 1024→3, else 6. Logo order preserved.
 *
 * No jQuery — an infinite track in React: the list is padded with six clones
 * on each side, and once a step lands on a clone the transform silently snaps
 * back by one loop's width.
 */
export default function ClientLogos() {
  const three = useMediaQuery('(max-width: 1024px)')
  const two = useMediaQuery('(max-width: 768px)')
  const one = useMediaQuery('(max-width: 480px)')
  const perView = one ? 1 : two ? 2 : three ? 3 : 6

  const [index, setIndex] = useState(CLONES)
  const [animated, setAnimated] = useState(true)
  const hovering = useRef(false)

  const next = useCallback(() => setIndex((i) => i + 1), [])
  const prev = useCallback(() => setIndex((i) => i - 1), [])

  // Autoplay — restarts on breakpoint change; holds while hovered.
  useEffect(() => {
    const id = setInterval(() => {
      if (!hovering.current) next()
    }, AUTOPLAY_MS)
    return () => clearInterval(id)
  }, [next, perView])

  // Landed on a clone → wait out the slide, then snap back a loop's width.
  useEffect(() => {
    if (index >= CLONES && index < CLONES + N) return undefined
    const t = setTimeout(() => {
      setAnimated(false)
      setIndex((i) => (i < CLONES ? i + N : i - N))
    }, SLIDE_MS + 20)
    return () => clearTimeout(t)
  }, [index])

  // Re-enable the transition the frame after a silent snap.
  useEffect(() => {
    if (animated) return undefined
    const raf = requestAnimationFrame(() => setAnimated(true))
    return () => cancelAnimationFrame(raf)
  }, [animated])

  const step = 100 / perView

  return (
    <section className="clientLogos">
      <div className="clientLogos__cell">
        <div
          className="clCarousel"
          onMouseEnter={() => {
            hovering.current = true
          }}
          onMouseLeave={() => {
            hovering.current = false
          }}
        >
          <button
            type="button"
            className="clArrow clArrow--prev"
            aria-label="Previous logos"
            onClick={prev}
          >
            <Icon name="chevron-left" />
          </button>

          <div className="clViewport" style={{ '--pv': perView }}>
            <ul
              className="clTrack"
              style={{
                transform: `translateX(-${index * step}%)`,
                transition: animated ? `transform ${SLIDE_MS}ms ease-out` : 'none',
              }}
            >
              {TRACK.map((logo, i) => (
                <li className="clItem" key={`${logo.src}-${i}`}>
                  <img src={SOURCES[logo.src]} alt={logo.name} loading="lazy" />
                </li>
              ))}
            </ul>
          </div>

          <button
            type="button"
            className="clArrow clArrow--next"
            aria-label="Next logos"
            onClick={next}
          >
            <Icon name="chevron-right" />
          </button>
        </div>
      </div>
    </section>
  )
}
