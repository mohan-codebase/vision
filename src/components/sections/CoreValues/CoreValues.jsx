import { coreValues } from '../../../data/home.js'
import Icon from '../../ui/Icon.jsx'
import './CoreValues.css'

import bgnQuotes from '../../../assets/images/bgn-quotes.jpg'
import bgnQuotesTop from '../../../assets/images/bgn-quotes-top.png'
import bgnQuotesBottom from '../../../assets/images/bgn-quotes-bottom.png'

/**
 * Section 9 — Our Core Values.
 *
 * Avantage dark-teal band with diagonal white coverage on the top and bottom
 * edges. Seven documented values as icon cards.
 */
export default function CoreValues() {
  const { super: eyebrow, title, accent, items } = coreValues

  return (
    <section className="coreValues" id="values" style={{ backgroundImage: `url(${bgnQuotes})` }}>
      <img
        className="coreValues__coverage coreValues__coverage--top"
        src={bgnQuotesTop}
        alt=""
        aria-hidden="true"
      />

      <div className="coreValues__cell">
        <header className="cvHeadline">
          <span className="cvHeadline__super">{eyebrow}</span>
          <h2 className="cvHeadline__title">
            <span className="cvHeadline__plain">{title}</span>{' '}
            <strong className="cvHeadline__accent">{accent}</strong>
          </h2>
        </header>

        <ul className="cvGrid">
          {items.map((item) => (
            <li className="cvCard" key={item.title}>
              <span className="cvCard__icon">
                <Icon name={item.icon} />
              </span>
              <h3 className="cvCard__title">{item.title}</h3>
              <p className="cvCard__text">{item.text}</p>
            </li>
          ))}
        </ul>
      </div>

      <img
        className="coreValues__coverage coreValues__coverage--bottom"
        src={bgnQuotesBottom}
        alt=""
        aria-hidden="true"
      />
    </section>
  )
}
