import { useEffect, useRef, useState } from 'react'
import useInView from '../../hooks/useInView.js'
import './Counter.css'

/**
 * Counter — reproduces `bt_bb_counter`.
 *
 * The original slides a 0-9 digit strip per column; we count up to `value`
 * once the number scrolls into view (visually equivalent, far less markup).
 *
 * @param {number} value    target number
 * @param {string} suffix   e.g. "+"
 * @param {number} duration ms for the count-up
 * @param {string} size     `bt_bb_size_*` → `btCounter-*`
 */
export default function Counter({
  value,
  suffix = '+',
  duration = 1600,
  size = 'large',
  className = '',
}) {
  const [ref, inView] = useInView({ threshold: 0.4 })
  const [display, setDisplay] = useState(0)
  const started = useRef(false)

  useEffect(() => {
    if (!inView || started.current) return undefined
    started.current = true

    // First frame lands inside rAF, so no synchronous setState in the effect.
    const start = performance.now()
    let raf
    const tick = (now) => {
      const p = Math.min((now - start) / duration, 1)
      const eased = 1 - (1 - p) ** 3 // easeOutCubic
      setDisplay(Math.round(eased * value))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, value, duration])

  return (
    <span ref={ref} className={`btCounter btCounter-${size} ${className}`.trim()}>
      {display.toLocaleString()}
      {suffix && <span className="btCounterSuffix">{suffix}</span>}
    </span>
  )
}
