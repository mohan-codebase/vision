import { industries } from '../../../data/home.js'
import Icon from '../../ui/Icon.jsx'
import './Industries.css'

/**
 * Section 3 — "Consultancy Industries".
 *
 * Reference: `bt_bb_section.bt_bb_layout_boxed_1200`, bottom spacing medium,
 * with a faint triangle graphic (`bgn-industries.png`) pinned to the top
 * (`background-size: contain`). A half-width headline
 * (`bt_bb_dash_top bt_bb_superheadline bt_bb_size_large`), then two rows of
 * three `bt_bb_service` items — `bt_bb_style_borderless bt_bb_size_xlarge`,
 * accent icon (`--service-primary-color:#e94d65`) that turns dark on hover
 * (`--service-secondary-color:#191919`), navy `<u>` title, body copy —
 * then a 2px rule and a navy "View all Industries" button.
 */
export default function Industries() {
  const { super: eyebrow, title, accent, intro, cta, items } = industries

  return (
    <section className="industries">
      <div className="industries__cell">
        <header className="industries__head">
          <span className="industries__super">{eyebrow}</span>
          <h2 className="industries__title">
            <span className="industries__titlePlain">{title}</span>
            <strong className="industries__titleAccent">{accent}</strong>
          </h2>
          <p className="industries__intro">{intro}</p>
        </header>

        <ul className="industries__grid">
          {items.map((item) => (
            <li className="indService" key={item.title}>
              <span className="indService__icon">
                <Icon name={item.icon} />
              </span>
              <div className="indService__body">
                <h3 className="indService__title">{item.title}</h3>
                <p className="indService__text">{item.text}</p>
              </div>
            </li>
          ))}
        </ul>

        <div className="industries__foot">
          <span className="industries__rule" aria-hidden="true" />
          <a href="#" className="industries__button">
            <span className="industries__buttonText">{cta}</span>
          </a>
        </div>
      </div>
    </section>
  )
}
