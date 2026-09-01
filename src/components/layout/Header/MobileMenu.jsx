import { useEffect } from 'react'
import Icon from '../../ui/Icon.jsx'
import { headerPhone, mainMenu, topBar, currentMenuIndex } from '../../../data/site.js'
import MenuItem from './MenuItem.jsx'

const logo = `${import.meta.env.BASE_URL}logo-lockup.png`

/**
 * MobileMenu — off-canvas panel behind the hamburger.
 *
 * The original swaps the horizontal menu for a slide-in panel once the nav
 * no longer fits (its JS measures widths and sets `btHideMenu`); we switch
 * at 1200px, which is where the 6 items + 140px logo + tools stop fitting.
 */
export default function MobileMenu({ open, onClose }) {
  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open, onClose])

  return (
    <>
      <div
        className={`btMobileScrim ${open ? 'on' : ''}`.trim()}
        onClick={onClose}
        aria-hidden="true"
      />
      <div
        className={`btMobilePanel ${open ? 'on' : ''}`.trim()}
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
        aria-hidden={!open}
        inert={!open}
      >
        <div className="btMobileHead">
          <img className="btMobileLogo" src={logo} alt="Vision Business Setup" width="132" height="87" />
          <button type="button" className="btMobileClose" aria-label="Close menu" onClick={onClose}>
            <Icon name="close" size="large" />
          </button>
        </div>

        <nav aria-label="Primary (mobile)">
          <ul className="menu">
            {mainMenu.map((item, i) => (
              <MenuItem key={item.label} item={item} current={i === currentMenuIndex} />
            ))}
          </ul>
        </nav>

        <div className="btMobileFoot">
          <a href={headerPhone.href} className="bt_button_widget bt_button_widget_accent">
            <span className="bt_bb_button_text">{headerPhone.label}</span>
            <Icon name="phone" size="small" />
          </a>

          <div className="btMobileSocial">
            {topBar.social.map((link) => (
              <a key={link.icon} href={link.href} aria-label={link.label}>
                <Icon name={link.icon} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
