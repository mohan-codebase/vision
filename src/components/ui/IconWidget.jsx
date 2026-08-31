import Icon from './Icon.jsx'
import './IconWidget.css'

/**
 * IconWidget — reproduces `.btIconWidget`.
 *
 * Layout: an optional icon, then a content block holding a title and
 * (optionally) a text line. Two shapes appear in the header top bar:
 *   with text  — icon + "Monday - Friday" / "8AM - 9PM"  (inline, side by side)
 *   icon only  — the social links
 *
 * `accent` maps to `.btAccentIconWidget`, which tints the icon accent
 * (#e94d65) — the top bar's default treatment on this demo.
 */
export default function IconWidget({
  icon,
  title,
  text,
  href,
  accent = true,
  label,
  className = '',
}) {
  const Tag = href ? 'a' : 'div'
  const classes = [
    'btIconWidget',
    accent ? 'btAccentIconWidget' : '',
    text || title ? 'btWidgetWithText' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <Tag
      className={classes}
      {...(href && {
        href,
        target: href.startsWith('http') ? '_blank' : undefined,
        rel: href.startsWith('http') ? 'noreferrer' : undefined,
        'aria-label': label,
      })}
    >
      {icon && (
        <span className="btIconWidgetIcon">
          <Icon name={icon} />
        </span>
      )}
      {(title || text) && (
        <span className="btIconWidgetContent">
          {title && <span className="btIconWidgetTitle">{title}</span>}
          {text && <span className="btIconWidgetText">{text}</span>}
        </span>
      )}
    </Tag>
  )
}
