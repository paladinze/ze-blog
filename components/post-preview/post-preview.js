import DateFormatter from '../../utils/date-formatter'
import CoverImage from '../common/cover-image'
import Link from 'next/link'

export default function PostPreview({
                                      title,
                                      coverImage,
                                      date,
                                      excerpt,
                                      author,
                                      slug,
                                      externalLink,
                                    }) {
  const linkHref = externalLink || "/posts/[slug]";
  const linkAs = externalLink ? undefined : `/posts/${slug}`;
  return (
    <Link as={linkAs} href={linkHref}>
      <div className="cursor-pointer  px-4 py-6 rounded-lg transform transition duration-500 hover:scale-105">
        <div className="mb-5">
          <CoverImage slug={slug} title={title} src={coverImage}/>
        </div>
        <h3 className="truncate text-2xl sm:text-3xl font-medium mb-3 leading-snug">
          {title}
        </h3>
        <div className="text-base mb-4 text-slate-500">
          📆 <DateFormatter dateString={date}/>
        </div>
        <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
      </div>
    </Link>
  )
}
