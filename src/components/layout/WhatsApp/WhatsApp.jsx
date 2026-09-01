import { whatsappLink } from '../../../config/contact.js'
import Icon from '../../ui/Icon.jsx'
import './WhatsApp.css'

/**
 * Floating "Chat Now" WhatsApp button — fixed to the lower-right of every
 * viewport. The number and prefilled message are configured in
 * `src/config/contact.js`.
 */
export default function WhatsApp() {
  return (
    <a
      className="waFloat"
      href={whatsappLink}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with Vision Business Setup on WhatsApp"
    >
      <span className="waFloat__icon">
        <Icon name="whatsapp" />
      </span>
      <span className="waFloat__label">Chat Now</span>
    </a>
  )
}
