import { ourStory } from '../../../data/home.js'
import useInView from '../../../hooks/useInView.js'
import Icon from '../../ui/Icon.jsx'
import './OurStory.css'

import imgStory from '../../../assets/images/our-story.avif'

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
      <div className="ourStory__decor ourStory__decor--left" aria-hidden="true" />
      <div className="ourStory__decor ourStory__decor--right" aria-hidden="true" />

      <div className="ourStory__cell">
        <div className="ourStory__grid">
          {/* Left Column: Visual Media Presentation */}
          <div className="ourStory__media">
            <div className="ourStory__mediaCard">
              <div className="ourStory__mediaShape">
                <img
                  src={imgStory}
                  alt="The Vision Business Setup consulting team"
                  className="ourStory__image"
                  loading="lazy"
                />
                <div className="ourStory__overlayGradient" aria-hidden="true" />
                <div className="ourStory__imageTag">
                  <span className="ourStory__tagDot" />
                  <span>Trusted Business Advisors</span>
                </div>
              </div>
              
              <div className="ourStory__statFloating">
                <span className="ourStory__statNum">10+</span>
                <span className="ourStory__statLabel">Years of Excellence in UAE Formation</span>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial & Value Proposition */}
          <div className="ourStory__content">
            <header className="storyHeadline">
              <span className="storyHeadline__super">{eyebrow}</span>
              <h2 className="storyHeadline__title">
                <span className="storyHeadline__plain">{title}</span>
                <strong className="storyHeadline__accent">{accent}</strong>
              </h2>
            </header>

            <p className="storyLead">{paragraphs[0]}</p>

            <div className="storyHighlights">
              <div className="storyHighlight">
                <div className="storyHighlight__icon">
                  <Icon name="compass" />
                </div>
                <div className="storyHighlight__text">
                  <h4>Strategic Guidance</h4>
                  <p>Advisory that aligns jurisdiction, banking, and structure with your long-term goals.</p>
                </div>
              </div>

              <div className="storyHighlight">
                <div className="storyHighlight__icon">
                  <Icon name="handshake" />
                </div>
                <div className="storyHighlight__text">
                  <h4>Client-First Focus</h4>
                  <p>Dedicated consultant support from initial idea to operational launch and beyond.</p>
                </div>
              </div>
            </div>

            <div className="storyActions">
              <a href="#request-callback" className="storyBtn storyBtn--primary">
                <span>Request Consultation</span>
              </a>
              <a href="#business-setup" className="storyBtn storyBtn--secondary">
                <span>Explore Jurisdictions</span>
              </a>
            </div>
          </div>
        </div>

        {/* Feature Medallions Strip */}
        <div className="ourStory__featuresStrip" ref={featuresRef}>
          <ul className="storyFeatures">
            {features.map((f) => (
              <li className="storyFeature" key={f.title}>
                <div className="storyFeature__inner">
                  <Ring icon={f.icon} active={featuresInView} />
                  <h3 className="storyFeature__title">{f.title}</h3>
                  <p className="storyFeature__text">{f.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
