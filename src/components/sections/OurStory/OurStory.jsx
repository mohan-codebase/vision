import { ourStory } from '../../../data/home.js'
import useInView from '../../../hooks/useInView.js'
import Icon from '../../ui/Icon.jsx'
import './OurStory.css'

import imgStory from '../../../assets/images/img-experience.png'

const RADIUS = 54
const CIRCUMFERENCE = 2 * Math.PI * RADIUS

/** A decorative accent ring that draws itself in around the feature icon. */
function Ring({ icon, active }) {
  const offset = active ? 0 : CIRCUMFERENCE

  return (
    <span className="storyRing">
      <svg className="storyRing__svg" viewBox="0 0 120 120" aria-hidden="true">
        <circle className="storyRing__track" cx="60" cy="60" r={RADIUS} />
        <circle
          className="storyRing__arc"
          cx="60"
          cy="60"
          r={RADIUS}
          style={{ strokeDasharray: CIRCUMFERENCE, strokeDashoffset: offset }}
        />
      </svg>
      <span className="storyRing__icon">
        <Icon name={icon} />
      </span>
    </span>
  )
}

/**
 * Section 3 — Why Vision / Our Story.
 *
 * Avantage two-column "experience" treatment: triangular photo on the left,
 * headline + two paragraphs + three feature medallions on the right.
 */
export default function OurStory() {
  const { super: eyebrow, title, accent, paragraphs, features } = ourStory
  const [featuresRef, featuresInView] = useInView({ threshold: 0.3 })

  return (
    <section className="ourStory" id="our-story">
      <span className="ourStory__decor" aria-hidden="true" />

      <div className="ourStory__cell">
        <div className="ourStory__grid">
          <div className="ourStory__media">
            <img
              src={imgStory}
              alt="The Vision Business Setup consulting team"
              width="1237"
              height="1469"
              loading="lazy"
            />
          </div>

          <div className="ourStory__content">
            <header className="storyHeadline">
              <span className="storyHeadline__super">{eyebrow}</span>
              <h2 className="storyHeadline__title">
                <span className="storyHeadline__plain">{title}</span>
                <strong className="storyHeadline__accent">{accent}</strong>
              </h2>
            </header>

            <div className="storyText">
              {paragraphs.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </div>

            <ul className="storyFeatures" ref={featuresRef}>
              {features.map((f) => (
                <li className="storyFeature" key={f.title}>
                  <Ring icon={f.icon} active={featuresInView} />
                  <h3 className="storyFeature__title">{f.title}</h3>
                  <p className="storyFeature__text">{f.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
