/**
 * Carousel — the original uses Slick. We reimplement the subset actually
 * needed on the homepage so no jQuery is pulled in:
 *
 *   HeroSlider    1 slide  · fade · autoplay · arrows + dots
 *   Testimonials  3 slides · slide · arrows
 *   ClientLogos   9 logos  · continuous marquee-style autoplay
 *
 * @param {number} slidesToShow
 * @param {object} responsive  breakpoint -> slidesToShow overrides
 *
 * TODO(structure-only): implement.
 */
export default function Carousel({
  slidesToShow = 1,
  autoplay = false,
  interval = 5000,
  arrows = true,
  dots = false,
  responsive,
  children,
}) {
  return null
}
