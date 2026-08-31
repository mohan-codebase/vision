import { useCallback } from 'react'
import { footerBottom } from '../../../data/site.js'
import Icon from '../../ui/Icon.jsx'

/**
 * FooterBottom — the `btSiteFooterCopyMenu` bar. In the dark skin it's an
 * accent (#e94d65) strip: copyright on the left, the footer menu on the
 * right (each link gets a `#181818` dash on hover), plus a back-to-top.
 */
export default function FooterBottom() {
  const { copyright, menu } = footerBottom

  const toTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  return (
    <div className="siteFooterBar">
      <div className="siteFooterBar__port">
        <p className="siteFooterBar__copy">{copyright}</p>

        <ul className="siteFooterBar__menu">
          {menu.map((item) => (
            <li key={item.label}>
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
          <li>
            <button type="button" className="siteFooterBar__top" onClick={toTop}>
              Back to top
              <span className="siteFooterBar__topIcon">
                <Icon name="chevron-down" />
              </span>
            </button>
          </li>
        </ul>
      </div>
    </div>
  )
}
