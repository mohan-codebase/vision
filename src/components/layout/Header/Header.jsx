import { useCallback, useState } from 'react'
import useMediaQuery from '../../../hooks/useMediaQuery.js'
import useStickyHeader from '../../../hooks/useStickyHeader.js'
import MainNav from './MainNav.jsx'
import MobileMenu from './MobileMenu.jsx'
import TopBar from './TopBar.jsx'
import './Header.css'

/**
 * Header — `.mainHeader` on the reference site.
 *
 * Two rows: the navy TopBar and the white 140px logo area. Body classes on
 * the original that shape this: btAlternateGradientHeader (navy top bar +
 * white header with a drop shadow), btMenuHorizontal, btMenuRight,
 * btStickyEnabled, btLightSkin.
 */
export default function Header() {
  const stuck = useStickyHeader(140)
  const mobile = useMediaQuery('(max-width: 1200px)')
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = useCallback(() => setMenuOpen(false), [])

  // Derived, not stored: leaving the mobile breakpoint can't strand it open.
  const panelOpen = menuOpen && mobile

  return (
    <>
      <header
        id="top"
        className={`mainHeader ${stuck ? 'btStickyHeaderActive' : ''} ${
          mobile ? 'btHideMenu' : ''
        }`.trim()}
      >
        <div className="mainHeaderInner">
          <TopBar />
          <MainNav mobile={mobile} onOpenMobile={() => setMenuOpen(true)} />
        </div>
      </header>

      {mobile && <MobileMenu open={panelOpen} onClose={closeMenu} />}

      {/* The header is fixed, so the page needs its height back. */}
      <div className={`btHeaderSpacer ${stuck ? 'isStuck' : ''}`.trim()} />
    </>
  )
}
