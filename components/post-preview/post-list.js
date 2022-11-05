import PostPreview from './post-preview'

export default function PostList({posts}) {
  return (
    <section>
      <div className="mx-auto mb-32 grid grid-cols-1 gap-x-8 md:grid-cols-2 md:gap-y-8 xl:grid-cols-3">
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
