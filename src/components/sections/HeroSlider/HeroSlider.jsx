import { useCallback, useEffect, useRef, useState } from 'react'
import { heroSlides } from '../../../data/home.js'
import './HeroSlider.css'

import imgSlider01 from '../../../assets/images/img-slider-01.jpg'
import imgSlider02 from '../../../assets/images/img-slider-02.jpg'
import imgSlider03 from '../../../assets/images/img-slider-03.jpg'

/** Data keeps the filename; the bundler resolves the real URL here. */
const IMAGES = {
  'img-slider-01.jpg': imgSlider01,
  'img-slider-02.jpg': imgSlider02,
  'img-slider-03.jpg': imgSlider03,
}

const AUTOPLAY_MS = 4500

/**
 * Section 1 — Hero slider.
 *
 * Full-bleed, 3 fading slides. Reproduces the reference `bt_bb_content_slider`
 * (Slick with `fade: true`, `autoplay`, `arrows: false`, `dots: true`,
 * dots pinned to the right). No jQuery — a small fade carousel in React.
 *
 * Slides are stacked in one CSS grid cell so the section keeps a stable
 * height (the tallest slide) and the crossfade never makes the page jump.
 */
export default function HeroSlider() {
  const [current, setCurrent] = useState(0)
  const count = heroSlides.length
  const timer = useRef(null)

  const goTo = useCallback((i) => setCurrent(((i % count) + count) % count), [count])
  const next = useCallback(() => setCurrent((c) => (c + 1) % count), [count])

  // Autoplay. `pauseOnHover` is false on the reference, so it just keeps going.
  useEffect(() => {
    timer.current = window.setInterval(next, AUTOPLAY_MS)
    return () => window.clearInterval(timer.current)
  }, [next])

  // A manual pick should restart the countdown, not fire straight after.
  const pick = useCallback(
    (i) => {
      window.clearInterval(timer.current)
      timer.current = window.setInterval(next, AUTOPLAY_MS)
      goTo(i)
    },
    [goTo, next],
  )

  return (
    <section className="heroSlider" aria-roledescription="carousel" aria-label="Intro">
      <div className="heroSlider__viewport">
        {heroSlides.map((slide, i) => (
          <article
            key={slide.title}
            className={`heroSlide heroSlide--${slide.side}${
              i === current ? ' is-active' : ''
            }`}
            style={{ backgroundImage: `url(${IMAGES[slide.image]})` }}
            aria-hidden={i === current ? undefined : true}
            aria-roledescription="slide"
            aria-label={`${i + 1} of ${count}`}
          >
            <div className="heroSlide__inner">
              <div className="heroSlide__row">
                <div className="heroSlide__col heroSlide__col--text">
                  <header className="heroHeadline">
                    <span className="heroHeadline__super">{slide.super}</span>
                    <h1 className="heroHeadline__title">
                      <span className="heroHeadline__plain">{slide.title}</span>
                      <strong className="heroHeadline__accent">{slide.accent}</strong>
                    </h1>
                    {slide.text && <p className="heroHeadline__sub">{slide.text}</p>}
                  </header>

                  <div className="heroButtons">
                    {slide.buttons.map((btn) => (
                      <a
                        key={btn.label}
                        href="#"
                        className={`heroButton heroButton--${btn.variant}`}
                        tabIndex={i === current ? 0 : -1}
                      >
                        <span className="heroButton__text">{btn.label}</span>
                      </a>
                    ))}
                  </div>
                </div>
                <div className="heroSlide__col heroSlide__col--media" aria-hidden="true" />
              </div>
            </div>
          </article>
        ))}
      </div>

      <ul className="heroDots" role="tablist" aria-label="Select a slide">
        {heroSlides.map((slide, i) => (
          <li key={slide.title} className={i === current ? 'is-active' : ''}>
            <button
              type="button"
              role="tab"
              aria-selected={i === current}
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => pick(i)}
            />
          </li>
        ))}
      </ul>
    </section>
  )
}
