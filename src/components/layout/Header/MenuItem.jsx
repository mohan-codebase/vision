import { useId, useState } from 'react'
import Icon from '../../ui/Icon.jsx'

/**
 * MenuItem — one `<li>` of the horizontal menu, at any depth.
 *
 * The theme drives dropdowns with an `.on` class (added by its own JS on
 * hover/tap) rather than `:hover`, so the panel can stay open while the
 * pointer crosses the gap. We do the same with React state, which also
 * gets us keyboard support the original doesn't have.
 *
 * @param {number} depth  0 = top level, 1 = dropdown, 2 = flyout
 */
export default function MenuItem({ item, depth = 0, current = false }) {
  const [open, setOpen] = useState(false)
  const id = useId()
  const hasChildren = Boolean(item.children?.length)

  const classes = [
    'menu-item',
    hasChildren ? 'menu-item-has-children' : '',
    current ? 'current-menu-item' : '',
    open ? 'on' : '',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <li
      className={classes}
      onMouseEnter={() => hasChildren && setOpen(true)}
      onMouseLeave={() => hasChildren && setOpen(false)}
      onFocus={() => hasChildren && setOpen(true)}
      onBlur={(e) => {
        if (hasChildren && !e.currentTarget.contains(e.relatedTarget)) {
          setOpen(false)
        }
      }}
    >
      <a
        href={item.href}
        aria-current={current ? 'page' : undefined}
        aria-expanded={hasChildren ? open : undefined}
        aria-controls={hasChildren ? id : undefined}
      >
        {item.label}
      </a>

      {hasChildren && (
        <>
          {/* Matches the theme's `.subToggler` — visible only in the mobile
              panel, where it toggles instead of hovering. */}
          <button
            type="button"
            className="subToggler"
            aria-label={`Toggle ${item.label} submenu`}
            aria-expanded={open}
            onClick={(e) => {
              e.preventDefault()
              setOpen((v) => !v)
            }}
          >
            <Icon name={depth === 0 ? 'chevron-down' : 'chevron-right'} size="small" />
          </button>

          <ul id={id} className="sub-menu">
            {item.children.map((child) => (
              <MenuItem key={child.label} item={child} depth={depth + 1} />
            ))}
          </ul>
        </>
      )}
    </li>
  )
}
