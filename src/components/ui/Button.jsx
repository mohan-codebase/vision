/**
 * Button — reproduces `bt_bb_button`.
 *
 * Variants seen on the homepage:
 *   filled   solid accent background (hero primary, "Request a Call Back")
 *   outline  transparent with border (hero secondary)
 *   link     text + arrow icon ("Avantage services", "Read more")
 */
export default function Button({
  as: Tag = 'a',
  href = '#',
  variant = 'filled',
  size = 'normal',
  icon,
  className = '',
  children,
  ...rest
}) {
  const classes = ['btButton', `btButton-${variant}`, `btButton-${size}`, className]
    .filter(Boolean)
    .join(' ')

  return (
    <Tag className={classes} href={Tag === 'a' ? href : undefined} {...rest}>
      <span className="btButtonText">{children}</span>
      {icon && <span className="btButtonIcon">{icon}</span>}
    </Tag>
  )
}
