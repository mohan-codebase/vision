import { callback } from '../../../data/home.js'
import Counter from '../../ui/Counter.jsx'
import Icon from '../../ui/Icon.jsx'
import './CallbackCounters.css'

import imgCallback from '../../../assets/images/img-callback.png'

/**
 * Section 7 — "Get your Business Right up There" (Callback + statistics).
 *
 * Reference: `bt_bb_section.bt_bb_layout_boxed_1200
 * .bt_bb_section_show_left_boxed_content`, top spacing medium, with
 * `bgn-experience.png` at `right 85%`. Left column (`bt_bb_vertical_align_middle`):
 * `bt_bb_size_large` headline + `bt_bb_dash_top`, paragraph, accent
 * `bt_bb_style_filled` button, a 2px `bt_bb_border_style_solid` rule, then a
 * `bt_bb_row_inner` of three counters (icon + `bt_bb_counter` + caption).
 * Right column: the triangular `img-callback.png` (`bt_bb_animation_move_left`).
 */
export default function CallbackCounters() {
  const { super: eyebrow, title, accent, text, cta, counters } = callback

  return (
    <section className="callback">
      <span className="callback__decor" aria-hidden="true" />

      <div className="callback__cell">
        <div className="callback__grid">
          <div className="callback__content">
            <header className="cbHeadline">
              <span className="cbHeadline__super">{eyebrow}</span>
              <h2 className="cbHeadline__title">
                <span className="cbHeadline__plain">{title}</span>
                <strong className="cbHeadline__accent">{accent}</strong>
              </h2>
              <p className="cbHeadline__sub">{text}</p>
            </header>

            <a href="#" className="cbButton">
              <span className="cbButton__text">{cta}</span>
            </a>

            <span className="cbRule" aria-hidden="true" />

            <ul className="cbStats">
              {counters.map((stat) => (
                <li className="cbStat" key={stat.text}>
                  <span className="cbStat__icon">
                    <Icon name={stat.icon} />
                  </span>
                  <Counter value={stat.value} suffix={stat.suffix} size="large" />
                  <p className="cbStat__caption">{stat.text}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="callback__media">
            <img
              src={imgCallback}
              alt="A consultant charting business growth"
              width="1237"
              height="1469"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
