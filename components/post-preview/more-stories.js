import PostPreview from './post-preview'

export default function MoreStories({posts}) {
  return (
    <section>
      <div className="mx-auto mb-32 grid grid-cols-1 md:grid-cols-2 md:gap-y-32 xl:grid-cols-3">
        {posts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
            slug={post.slug}
            excerpt={post.excerpt}
            externalLink={post.externalLink}
          />
        ))}
      </div>
    </section>
  )
}
