import { testimonials } from '../../../data/home.js'
import Icon from '../../ui/Icon.jsx'
import './Testimonials.css'

import imgQuote01 from '../../../assets/images/img-quote-01.jpg'
import imgQuote02 from '../../../assets/images/img-quote-02.jpg'
import imgQuote03 from '../../../assets/images/img-quote-03.jpg'
import bgnQuotes from '../../../assets/images/bgn-quotes.jpg'
import bgnQuotesTop from '../../../assets/images/bgn-quotes-top.png'
import bgnQuotesBottom from '../../../assets/images/bgn-quotes-bottom.png'

const AVATARS = {
  'img-quote-01.jpg': imgQuote01,
  'img-quote-02.jpg': imgQuote02,
  'img-quote-03.jpg': imgQuote03,
}

/**
 * Section 5 — "Trusted by some Biggest Names".
 *
 * Reference: `bt_bb_section.bt_bb_color_scheme_1.bt_bb_layout_boxed_1200`,
 * top/bottom spacing large, `background-color:#215876` + `bgn-quotes.jpg`,
 * with white diagonal coverage images on the top and bottom edges. A
 * half-width `bt_bb_size_large` headline (eyebrow + accent dash), then a
 * static 3-column row (`bt_bb_column_gap_20`) of quote cards — this section
 * is NOT a carousel on the reference.
 */
export default function Testimonials() {
  const { super: eyebrow, title, accent, items } = testimonials

  return (
    <section
      className="testimonials"
      style={{ backgroundImage: `url(${bgnQuotes})` }}
    >
      <img
        className="testimonials__coverage testimonials__coverage--top"
        src={bgnQuotesTop}
        alt=""
        aria-hidden="true"
      />

      <div className="testimonials__cell">
        <header className="tmHeadline">
          <span className="tmHeadline__super">{eyebrow}</span>
          <h2 className="tmHeadline__title">
            <span className="tmHeadline__plain">{title}</span>
            <strong className="tmHeadline__accent">{accent}</strong>
          </h2>
        </header>

        <ul className="tmGrid">
          {items.map((item) => (
            <li className="tmCard" key={item.author}>
              <div className="tmCard__avatar">
                <img src={AVATARS[item.image]} alt={item.author} loading="lazy" />
              </div>

              <h4 className="tmCard__heading">{item.heading}</h4>
              <p className="tmCard__quote">{item.quote}</p>

              <div className="tmCard__stars" aria-label={`${item.rating} out of 5`}>
                {Array.from({ length: item.rating }, (_, i) => (
                  <span className="tmCard__star" key={i}>
                    <Icon name="star" />
                  </span>
                ))}
              </div>

              <span className="tmCard__author">{item.author}</span>
              <h5 className="tmCard__company">{item.company}</h5>
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
