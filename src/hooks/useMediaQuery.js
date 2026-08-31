import { useCallback, useSyncExternalStore } from 'react'

/**
 * Subscribes to a media query. Used to swap the desktop menu for the
 * hamburger at the width where the 6-item nav stops fitting.
 *
 * useSyncExternalStore rather than useState+useEffect: matchMedia is an
 * external store, so this reads it during render and avoids the extra
 * render pass an effect would cause.
 */
export default function useMediaQuery(query) {
  const subscribe = useCallback(
    (onChange) => {
      const mql = window.matchMedia(query)
      mql.addEventListener('change', onChange)
      return () => mql.removeEventListener('change', onChange)
    },
    [query],
  )

  return useSyncExternalStore(
    subscribe,
    () => window.matchMedia(query).matches,
    () => false, // server snapshot: assume desktop
  )
}
