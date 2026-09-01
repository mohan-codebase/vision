import { testimonials } from '../../../data/home.js'
import Icon from '../../ui/Icon.jsx'
import './Testimonials.css'

import bgnQuotes from '../../../assets/images/bgn-quotes.jpg'
import bgnQuotesTop from '../../../assets/images/bgn-quotes-top.png'
import bgnQuotesBottom from '../../../assets/images/bgn-quotes-bottom.png'
import imgQuote01 from '../../../assets/images/img-quote-01.jpg'
import imgQuote02 from '../../../assets/images/img-quote-02.jpg'
import imgQuote03 from '../../../assets/images/img-quote-03.jpg'

const IMAGES = {
  'img-quote-01.jpg': imgQuote01,
  'img-quote-02.jpg': imgQuote02,
  'img-quote-03.jpg': imgQuote03,
}

/**
 * Section — "Trusted by some Biggest Names" (testimonials).
 *
 * Faithful rebuild of the Avantage Business reference: a dark teal band
 * (#215876 + `bgn-quotes` texture) with diagonal white coverage shapes on the
 * top and bottom edges, a dash-top headline, and a static three-up row of
 * testimonial cards — rounded avatar, quote title, quote body, a five-star
 * rating and the reviewer's name + company. No carousel; the columns simply
 * stack on smaller screens as they do in the original.
 */
export default function Testimonials() {
  const { super: eyebrow, title, accent, items } = testimonials

  return (
    <section className="testimonials" id="testimonials" style={{ backgroundImage: `url(${bgnQuotes})` }}>
      <img
        className="testimonials__coverage testimonials__coverage--top"
        src={bgnQuotesTop}
        alt=""
        aria-hidden="true"
      />

      <div className="testimonials__cell">
        <header className="tHeadline">
          <span className="tHeadline__super">{eyebrow}</span>
          <h2 className="tHeadline__title">
            <span className="tHeadline__plain">{title}</span>
            <br />
            <strong className="tHeadline__accent">{accent}</strong>
          </h2>
        </header>

        <ul className="tGrid">
          {items.map((item) => (
            <li className="tCard" key={item.name}>
              <div className="tCard__avatar">
                <img src={IMAGES[item.image]} alt={item.name} width="200" height="200" loading="lazy" />
              </div>

              <h4 className="tCard__title">{item.title}</h4>
              <p className="tCard__quote">{item.quote}</p>

              <div className="tCard__rating" aria-label={`${item.rating} out of 5`}>
                {Array.from({ length: item.rating }).map((_, i) => (
                  <span className="tCard__star" key={i} aria-hidden="true">
                    <Icon name="star" />
                  </span>
                ))}
              </div>

              <span className="tCard__name">{item.name}</span>
              <span className="tCard__company">{item.company}</span>
            </li>
          ))}
        </ul>
      </div>

      <img
        className="testimonials__coverage testimonials__coverage--bottom"
        src={bgnQuotesBottom}
        alt=""
        aria-hidden="true"
      />
    </section>
  )
}
