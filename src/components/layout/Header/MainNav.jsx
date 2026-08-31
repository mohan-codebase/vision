import Icon from '../../ui/Icon.jsx'
import { headerPhone, mainMenu, currentMenuIndex } from '../../../data/site.js'
import MenuItem from './MenuItem.jsx'
import logo from '../../../assets/logo.svg'

/**
 * MainNav — the white logo area (`.btLogoArea`), 140px tall.
 *
 * Layout is the theme's `btMenuRight`: logo floats left, and the nav plus
 * the tools cluster (search / cart / phone button) float right.
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
          <a href="#top" aria-label="Avantage — home">
            <img className="btMainLogo" src={logo} alt="Avantage Business Consulting" />
          </a>
        </div>

        <div className="menuPort">
          <div className="topBarInMenu">
            <div className="topBarInMenuCell">
              <div className="btTopBox btSearch">
                <button type="button" aria-label="Search">
                  <Icon name="search" />
                </button>
              </div>

              <div className="btTopBox btCartWidget">
                <button type="button" aria-label="View your shopping cart">
                  <Icon name="cart" />
                  <span className="cart-contents">0</span>
                </button>
              </div>

              <div className="btBox widget_bt_button_widget">
                <a
                  href={headerPhone.href}
                  className="bt_button_widget bt_button_widget_accent"
                  title={headerPhone.label}
                >
                  <span className="bt_bb_button_text">{headerPhone.label}</span>
                  <Icon name="phone" size="small" />
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
