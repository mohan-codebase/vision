/**
 * Grid / Column — reproduces `bt_bb_row` + `bt_bb_column`.
 *
 * Bold Builder uses a 12-unit row. Columns declare a width per breakpoint,
 * e.g. <Column lg={4} md={6} sm={12}>. `gutter` matches --grid-gutter (30px).
 *
 * TODO(structure-only): implement.
 */
export function Grid({ gutter = 'normal', align = 'top', className = '', children }) {
  return (
    <div className={`btRow btGutter-${gutter} btVAlign-${align} ${className}`.trim()}>
      {children}
    </div>
  )
}

export function Column({ lg = 12, md, sm, xs, className = '', children }) {
  const classes = [
    'btColumn',
    `btCol-lg-${lg}`,
    md ? `btCol-md-${md}` : '',
    sm ? `btCol-sm-${sm}` : '',
    xs ? `btCol-xs-${xs}` : '',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <div className={classes}>
      <div className="btColumnContent">{children}</div>
    </div>
  )
}
