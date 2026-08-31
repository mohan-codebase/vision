import { latestNews } from '../../../data/home.js'
import './LatestNews.css'

import blogPost01 from '../../../assets/images/blog-post-01.jpg'

/** Only the featured (first) post shows an image in the highlighted layout. */
const IMAGES = {
  'blog-post-01.jpg': blogPost01,
}

/**
 * Section 10 — "Latest News".
 *
 * Reference: `bt_bb_section.bt_bb_layout_boxed_1200`, bottom spacing large.
 * Headline `bt_bb_size_large` + `bt_bb_dash_top`, then a `bt_bb_latest_posts`
 * widget — `bt_bb_columns_4 bt_bb_gap_small bt_bb_look_standard_highlighted
 * bt_bb_date_design_triangle bt_bb_show_dash_true`. Per that theme layout:
 * post 1 is a 50%-wide featured image card, posts 2–3 are text-only tinted
 * cards, post 4 is hidden.
 */
export default function LatestNews() {
  const { super: eyebrow, title, accent, posts } = latestNews

  return (
    <section className="latestNews">
      <div className="latestNews__cell">
        <header className="lnHeadline">
          <span className="lnHeadline__super">{eyebrow}</span>
          <h2 className="lnHeadline__title">
            <span className="lnHeadline__plain">{title}</span>{' '}
            <strong className="lnHeadline__accent">{accent}</strong>
          </h2>
        </header>

        <div className="lnGrid">
          {posts.map((post, i) => {
            const [day, month] = post.date.split(' ')
            const featured = i === 0

            return (
              <article
                className={`lnItem${featured ? ' lnItem--featured' : ''}`}
                key={post.title}
              >
                {featured && (
                  <div className="lnItem__media">
                    <img src={IMAGES[post.image]} alt={post.title} loading="lazy" />
                  </div>
                )}

                <div className="lnItem__body">
                  <span className="lnDate" aria-hidden="true">
                    <span className="lnDate__day">{day}</span>
                    <span className="lnDate__month">{month}</span>
                  </span>

                  <div className="lnItem__cats">
                    {post.categories.map((cat) => (
                      <a className="lnItem__cat" href="#" key={cat}>
                        {cat}
                      </a>
                    ))}
                  </div>

                  <h5 className="lnItem__title">
                    <a href="#">{post.title}</a>
                  </h5>

                  <p className="lnItem__excerpt">{post.excerpt}</p>

                  <div className="lnItem__more">
                    <a href="#">Read more</a>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
