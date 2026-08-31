import { experience } from '../../../data/home.js'
import useInView from '../../../hooks/useInView.js'
import Icon from '../../ui/Icon.jsx'
import './Experience.css'

import imgExperience from '../../../assets/images/img-experience.png'

const RADIUS = 54
const CIRCUMFERENCE = 2 * Math.PI * RADIUS

/**
 * One feature ring — reproduces `bt_bb_progress_bar_advanced` (type circle):
 * a #f5f5f5 track, an accent arc drawn to `percent`, and an icon in the
 * middle. The arc animates from 0 once `active` turns true.
 */
function Ring({ percent, icon, active }) {
  const offset = active ? CIRCUMFERENCE * (1 - percent / 100) : CIRCUMFERENCE

  return (
    <span className="expRing">
      <svg className="expRing__svg" viewBox="0 0 120 120" aria-hidden="true">
        <circle className="expRing__track" cx="60" cy="60" r={RADIUS} />
        <circle
          className="expRing__arc"
          cx="60"
          cy="60"
          r={RADIUS}
          style={{ strokeDasharray: CIRCUMFERENCE, strokeDashoffset: offset }}
        />
      </svg>
      <span className="expRing__icon">
        <Icon name={icon} />
      </span>
    </span>
  )
}

/**
 * Section 4 — "30 Years of Experience".
 *
 * Reference: `bt_bb_section.bt_bb_layout_boxed_1200.bt_bb_section_show_right_boxed_content`,
 * bottom spacing normal, with `bgn-experience.png` at `right 85%`. Left
 * column: the triangular `img-experience.png` (`bt_bb_animation_move_right`).
 * Right column (vertically centred): headline `bt_bb_size_large` +
 * `bt_bb_dash_top`, two paragraphs in a 2-up inner row, then three centred
 * `bt_bb_progress_bar_advanced` features (`bt_bb_size_small` titles).
 */
export default function Experience() {
  const { super: eyebrow, title, accent, paragraphs, features } = experience
  const [featuresRef, featuresInView] = useInView({ threshold: 0.3 })

  return (
    <section className="experience">
      <span className="experience__decor" aria-hidden="true" />

      <div className="experience__cell">
        <div className="experience__grid">
          <div className="experience__media">
            <img
              src={imgExperience}
              alt="The Avantage consulting team"
              width="1237"
              height="1469"
              loading="lazy"
            />
          </div>

          <div className="experience__content">
            <header className="expHeadline">
              <span className="expHeadline__super">{eyebrow}</span>
              <h2 className="expHeadline__title">
                <span className="expHeadline__plain">{title}</span>
                <strong className="expHeadline__accent">{accent}</strong>
              </h2>
            </header>

            <div className="expText">
              {paragraphs.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </div>

            <ul className="expFeatures" ref={featuresRef}>
              {features.map((f) => (
                <li className="expFeature" key={f.title}>
                  <Ring percent={f.percent} icon={f.icon} active={featuresInView} />
                  <h4 className="expFeature__title">{f.title}</h4>
                  <p className="expFeature__text">{f.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
