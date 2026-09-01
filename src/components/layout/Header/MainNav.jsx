import Icon from '../../ui/Icon.jsx'
import { headerPhone, mainMenu, currentMenuIndex } from '../../../data/site.js'
import MenuItem from './MenuItem.jsx'

const logo = `${import.meta.env.BASE_URL}logo-lockup.png`

/**
 * MainNav — the white logo area (`.btLogoArea`).
 *
 * Layout is the theme's `btMenuRight`: the logo floats left, the nav plus the
 * phone-number button float right.
 */
export default function MainNav({ onOpenMobile, mobile }) {
  return (
    <div className="btLogoArea menuHolder">
      <div className="port">
        {mobile && (
          <button
            type="button"
            className="btHorizontalMenuTrigger"
            aria-label="Open menu"
            onClick={onOpenMobile}
          >
            <Icon name="bars" size="large" />
          </button>
        )}

        <div className="logo">
          <a href="#top" aria-label="Vision Business Setup — home">
            <img className="btMainLogo" src={logo} alt="Vision Business Setup" />
          </a>
        </div>

        <div className="menuPort">
          <div className="topBarInMenu">
            <div className="topBarInMenuCell">
              <div className="btBox widget_bt_button_widget">
                <a
                  href={headerPhone.href}
                  className="bt_button_widget bt_button_widget_accent"
                  title={`Call ${headerPhone.label}`}
                >
                  <Icon name="phone" size="small" />
                  <span className="bt_bb_button_text">{headerPhone.label}</span>
                </a>
              </div>
            </div>
          </div>

          {!mobile && (
            <nav aria-label="Primary">
              <ul className="menu">
                {mainMenu.map((item, i) => (
                  <MenuItem
                    key={item.label}
                    item={item}
                    current={i === currentMenuIndex}
                  />
                ))}
              </ul>
            </nav>
          )}
        </div>
      </div>
    </div>
  )
}
