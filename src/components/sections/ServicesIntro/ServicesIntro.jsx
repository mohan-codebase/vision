import { servicesIntro } from '../../../data/home.js'
import './ServicesIntro.css'

import bgnBoxes01 from '../../../assets/images/bgn-boxes-01.jpg'
import bgnBoxes02 from '../../../assets/images/bgn-boxes-02.jpg'
import bgnBoxes03 from '../../../assets/images/bgn-boxes-03.jpg'

const IMAGES = {
  'bgn-boxes-01.jpg': bgnBoxes01,
  'bgn-boxes-02.jpg': bgnBoxes02,
  'bgn-boxes-03.jpg': bgnBoxes03,
}

/**
 * Section 2 — three-column services intro.
 *
 * Reference: `bt_bb_section.bt_bb_layout_boxed_1200` pulled up over the hero
 * (`margin-top: -2.5em`), bottom spacing large. A `bt_bb_row.bt_bb_column_gap_10`
 * of three `col-4` columns; each column's `.bt_bb_column_content` gets the
 * faded photo background (`background-position: top; background-size: cover`),
 * a drop shadow (`bt_bb_highlight`) and `bt_bb_padding_text_indent` side
 * padding. Inside: eyebrow + accent dash + h4 + paragraph + small accent
 * button, spaced by the theme's separators.
 */
export default function ServicesIntro() {
  return (
    <section className="servicesIntro">
      <div className="servicesIntro__cell">
        <div className="servicesIntro__row">
          {servicesIntro.map((box) => (
            <div className="siBox" key={box.title}>
              <div
                className="siBox__content"
                style={{ backgroundImage: `url(${IMAGES[box.bg]})` }}
              >
                <header className="siHeadline">
                  <span className="siHeadline__super">{box.super}</span>
                  <h4 className="siHeadline__title">{box.title}</h4>
                  <p className="siHeadline__sub">{box.text}</p>
                </header>

                <a href="#" className="siButton">
                  <span className="siButton__text">{box.cta}</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
