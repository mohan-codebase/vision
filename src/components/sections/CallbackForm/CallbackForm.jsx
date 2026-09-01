import { useState } from 'react'
import { callbackForm } from '../../../data/home.js'
import { contact, whatsappLink } from '../../../config/contact.js'
import Icon from '../../ui/Icon.jsx'
import './CallbackForm.css'

/**
 * Section 11 — Request a Callback form.
 *
 * Frontend-only: there is no backend configured, so submitting shows a
 * confirmation and logs the payload. Wire `onSubmit` to a real endpoint or
 * form service (Formspree, a serverless function, etc.) when one exists.
 */
export default function CallbackForm() {
  const { super: eyebrow, title, accent, text, points, fields, submitLabel } = callbackForm
  const [status, setStatus] = useState('idle') // idle | success

  function handleSubmit(event) {
    event.preventDefault()
    const data = Object.fromEntries(new FormData(event.currentTarget).entries())
    // TODO: replace with a real submission (API route / form service).
    // eslint-disable-next-line no-console
    console.info('[CallbackForm] submission', data)
    event.currentTarget.reset()
    setStatus('success')
  }

  return (
    <section className="callbackForm" id="request-callback">
      <div className="callbackForm__cell">
        <div className="callbackForm__grid">
          <div className="cbfIntro">
            <span className="cbfIntro__super">{eyebrow}</span>
            <h2 className="cbfIntro__title">
              <span className="cbfIntro__plain">{title}</span>{' '}
              <strong className="cbfIntro__accent">{accent}</strong>
            </h2>
            <p className="cbfIntro__text">{text}</p>

            <ul className="cbfIntro__points">
              {points.map((point) => (
                <li key={point}>
                  <span className="cbfIntro__check" aria-hidden="true">
                    <Icon name="check" />
                  </span>
                  {point}
                </li>
              ))}
            </ul>

            <div className="cbfIntro__contact">
              <a href={contact.phoneHref} className="cbfIntro__contactLink">
                <Icon name="phone" size="small" />
                {contact.phoneDisplay}
              </a>
              <a
                href={whatsappLink}
                className="cbfIntro__contactLink"
                target="_blank"
                rel="noreferrer"
              >
                <Icon name="whatsapp" size="small" />
                Chat on WhatsApp
              </a>
            </div>
          </div>

          <div className="cbfCard">
            {status === 'success' ? (
              <div className="cbfSuccess" role="status">
                <span className="cbfSuccess__icon" aria-hidden="true">
                  <Icon name="check" />
                </span>
                <h3 className="cbfSuccess__title">Thank you — request received</h3>
                <p className="cbfSuccess__text">
                  A Vision Business Setup consultant will be in touch shortly. For anything
                  urgent, call us on {contact.phoneDisplay}.
                </p>
                <button
                  type="button"
                  className="cbfSuccess__again"
                  onClick={() => setStatus('idle')}
                >
                  Send another request
                </button>
              </div>
            ) : (
              <form className="cbfForm" onSubmit={handleSubmit} noValidate>
                {fields.map((field) => (
                  <div
                    className={`cbfField${field.type === 'textarea' ? ' cbfField--full' : ''}`}
                    key={field.name}
                  >
                    <label htmlFor={`cbf-${field.name}`}>
                      {field.label}
                      {field.required && <span className="cbfField__req" aria-hidden="true"> *</span>}
                    </label>
                    {field.type === 'textarea' ? (
                      <textarea
                        id={`cbf-${field.name}`}
                        name={field.name}
                        rows="4"
                        required={field.required}
                      />
                    ) : (
                      <input
                        id={`cbf-${field.name}`}
                        name={field.name}
                        type={field.type}
                        autoComplete={field.autoComplete}
                        required={field.required}
                      />
                    )}
                  </div>
                ))}

                <button type="submit" className="cbfSubmit">
                  {submitLabel}
                </button>

                <p className="cbfForm__note">
                  By submitting this form you agree to be contacted by Vision Business Setup
                  about your enquiry.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
