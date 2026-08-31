import { quoteBanner } from '../../../data/home.js'
import './QuoteBanner.css'

import bgnSearching from '../../../assets/images/bgn-searching.jpg'

/**
 * Section 9 — CTA / quote banner.
 *
 * Reference: `bt_bb_section.bt_bb_layout_boxed_1400`, bottom spacing large.
 * A centred teal box (`background-color: rgba(33,88,119,1)` + `bgn-searching.jpg`)
 * capped at 1400px; inside, a 1200-wide row — dark-scheme headline
 * `bt_bb_size_medium` + `bt_bb_dash_top` on the left, an accent
 * `bt_bb_style_filled` button (`bt_bb_align_right`) on the right. `bgn-searching.png`
 * decoration sits behind the section, bottom-aligned. Stacks/centres on mobile.
 */
export default function QuoteBanner() {
  const { super: eyebrow, title, cta } = quoteBanner

  return (
    <section className="quoteBanner">
      <span className="quoteBanner__decor" aria-hidden="true" />

      <div className="quoteBanner__cell">
        <div
          className="quoteBanner__box"
          style={{ backgroundImage: `url(${bgnSearching})` }}
        >
          <div className="quoteBanner__inner">
            <header className="qbHeadline">
              <span className="qbHeadline__super">{eyebrow}</span>
              <h3 className="qbHeadline__title">{title}</h3>
            </header>

            <a href="#" className="qbButton">
              <span className="qbButton__text">{cta}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
