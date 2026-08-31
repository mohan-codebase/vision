/**
 * Section — reproduces the Bold Builder `bt_bb_section` wrapper.
 *
 * The theme nests: section > .btPort > .btCell > .btColumn ...
 * We keep the same three-level nesting because the boxed-width and
 * spacing rules are applied at different levels.
 *
 * @param {'wide'|'boxed1200'|'boxed1400'} layout  max content width
 * @param {'none'|'normal'|'medium'|'large'} topSpacing
 * @param {'none'|'normal'|'medium'|'large'} bottomSpacing
 * @param {boolean} dark  applies the `bt_bb_color_scheme_1` dark scheme
 */
export default function Section({
  layout = 'boxed1200',
  topSpacing = 'none',
  bottomSpacing = 'none',
  dark = false,
  className = '',
  id,
  style,
  children,
}) {
  const classes = [
    'btSection',
    `btLayout-${layout}`,
    `btPt-${topSpacing}`,
    `btPb-${bottomSpacing}`,
    dark ? 'btSchemeDark' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <section id={id} className={classes} style={style}>
      <div className="btPort">
        <div className="btCell">{children}</div>
      </div>
    </section>
  )
}
