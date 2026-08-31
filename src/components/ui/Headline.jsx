/**
 * Headline — reproduces `bt_bb_headline`.
 *
 * The theme's headline is always three stacked parts:
 *   superheadline  small uppercase eyebrow  (e.g. "PLAN, THEN DO")
 *   title          heading, usually two-toned — a plain part plus an
 *                  accent-colored part rendered as <strong>
 *   subheadline    body paragraph under the title
 *
 * Pass `accent` for the highlighted half of the title:
 *   <Headline title="Consultancy" accent="Industries" />
 *
 * @param {'h1'|'h2'|'h3'|'h4'|'h5'|'h6'} tag
 * @param {'left'|'center'|'right'} align
 * @param {'inline'|'block'} accentDisplay  accent on same line or new line
 */
export default function Headline({
  tag: Tag = 'h2',
  superheadline,
  title,
  accent,
  accentDisplay = 'block',
  subheadline,
  align = 'left',
  dash = false,
  className = '',
  children,
}) {
  const classes = ['btHeadline', `btAlign-${align}`, className]
    .filter(Boolean)
    .join(' ')

  return (
    <div className={classes}>
      {superheadline && (
        <span className="btHeadlineSuper">{superheadline}</span>
      )}

      {(title || accent) && (
        <Tag className="btHeadlineTitle">
          {title}
          {accent && (
            <strong className={`btHeadlineAccent btAccent-${accentDisplay}`}>
              {accent}
            </strong>
          )}
        </Tag>
      )}

      {dash && <span className="btHeadlineDash" aria-hidden="true" />}

      {subheadline && <p className="btHeadlineSub">{subheadline}</p>}

      {children}
    </div>
  )
}
