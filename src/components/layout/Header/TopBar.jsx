import IconWidget from '../../ui/IconWidget.jsx'
import { topBar } from '../../../data/site.js'

/**
 * TopBar — the navy (#1b4962) utility strip above the logo area.
 * Left: the Vision tagline. Right: a "speak to a consultant" phone line and
 * social links. Hidden once the header sticks (see Header.css).
 */
export default function TopBar() {
  return (
    <div className="topBar">
      <div className="topBarPort port">
        <div className="topTools btTopToolsLeft">
          <IconWidget icon={topBar.hours.icon} title={topBar.hours.title} />
        </div>

        <div className="topTools btTopToolsRight">
          <IconWidget
            icon={topBar.phone.icon}
            title={`Call us: ${topBar.phone.text}`}
            href={topBar.phone.href}
            label="Call Vision Business Setup"
          />
          {topBar.social.map((link) => (
            <IconWidget key={link.icon} icon={link.icon} href={link.href} label={link.label} />
          ))}
        </div>
      </div>
    </div>
  )
}
