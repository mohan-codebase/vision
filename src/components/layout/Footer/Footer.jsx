import FooterBottom from './FooterBottom.jsx'
import FooterWidgets from './FooterWidgets.jsx'
import './Footer.css'

/**
 * Footer — `btSiteFooter` in the theme's dark skin (`btDarkSkin`):
 *
 *   FooterWidgets  `#191919` band — three columns (Headquarters /
 *                  Our Locations + map / Avantage Social links)
 *   FooterBottom   accent (#e94d65) bar — copyright + footer menu + back-to-top
 */
export default function Footer() {
  return (
    <footer className="siteFooter">
      <FooterWidgets />
      <FooterBottom />
    </footer>
  )
}
