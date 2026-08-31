import { useEffect, useState } from 'react'

/**
 * Mirrors the theme's `btStickyHeaderActive` body class: once the page has
 * scrolled past `offset`, the header pins to the top and its 140px rows
 * collapse to 70px.
 */
export default function useStickyHeader(offset = 140) {
  const [stuck, setStuck] = useState(false)

  useEffect(() => {
    let frame = 0

    const onScroll = () => {
      if (frame) return
      frame = requestAnimationFrame(() => {
        frame = 0
        setStuck(window.scrollY > offset)
      })
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [offset])

  return stuck
}
