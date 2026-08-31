import IconWidget from '../../ui/IconWidget.jsx'
import { topBar } from '../../../data/site.js'

/**
 * TopBar — the navy (#1b4962) utility strip above the logo area.
 *
 * `btAlternateGradientHeader` overlays it with a left-to-right
 * transparent→black gradient at 15% opacity; that's the `::before` in
 * Header.css, which is why `.port` here is z-indexed above it.
 */
export default function TopBar() {
  return (
    <div className="topBar">
      <div className="topBarPort port">
        <div className="topTools btTopToolsLeft">
          <IconWidget
            icon={topBar.hours.icon}
            title={topBar.hours.title}
            text={topBar.hours.text}
          />
          <IconWidget
            icon={topBar.offices.icon}
            title={topBar.offices.title}
            text={topBar.offices.text}
          />
        </div>

        <div className="topTools btTopToolsRight">
          <IconWidget title={topBar.social.title} accent={false} />
          {topBar.social.links.map((link) => (
            <IconWidget
              key={link.icon}
              icon={link.icon}
              href={link.href}
              label={link.icon}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
