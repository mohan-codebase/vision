import { useEffect, useRef, useState } from 'react'

/**
 * IntersectionObserver hook — drives counter animations, progress rings and
 * scroll reveals.
 *
 * Returns `[ref, inView]`. Attach `ref` to the element to watch; `inView`
 * flips true when it crosses `threshold`. With `once` (the default) the
 * observer disconnects after the first hit so the state never flips back.
 *
 * @param {{threshold?: number, rootMargin?: string, once?: boolean}} [options]
 */
export default function useInView({
  threshold = 0.2,
  rootMargin = '0px 0px -10% 0px',
  once = true,
} = {}) {
  const ref = useRef(null)
  // No IntersectionObserver (SSR / very old browsers): start visible so the
  // content is never stuck hidden.
  const [inView, setInView] = useState(
    () => typeof IntersectionObserver === 'undefined',
  )

  useEffect(() => {
    const el = ref.current
    if (!el || typeof IntersectionObserver === 'undefined') return undefined

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          if (once) observer.disconnect()
        } else if (!once) {
          setInView(false)
        }
      },
      { threshold, rootMargin },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold, rootMargin, once])

  return [ref, inView]
}
