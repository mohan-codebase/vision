import './Icon.css'

/**
 * Icon — the original loads FontAwesome 4 as a webfont and injects glyphs via
 * `data-ico-*` attributes. We use an SVG sprite (public/icons.svg) with
 * stand-ins for the same glyphs, so no font is fetched from the reference site.
 *
 * @param {string} name  symbol id in the sprite
 * @param {'small'|'normal'|'large'} size
 */
export default function Icon({ name, size = 'normal', className = '' }) {
  return (
    <span className={`btIcon btIcon-${size} ${className}`.trim()} aria-hidden="true">
      <svg focusable="false">
        <use href={`${import.meta.env.BASE_URL}icons.svg#${name}`} />
      </svg>
    </span>
  )
}
