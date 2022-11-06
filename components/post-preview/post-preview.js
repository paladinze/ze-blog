import DateFormatter from '../../utils/date-formatter'
import CoverImage from '../common/cover-image'
import Link from 'next/link'

export default function PostPreview({
                                      title,
                                      coverImage,
                                      date,
                                      excerpt,
                                      slug,
                                      externalLink,
                                    }) {
  const linkHref = externalLink || "/posts/[slug]";
  const linkAs = externalLink ? undefined : `/posts/${slug}`;
  return (
    <Link as={linkAs} href={linkHref}>
        <div className="cursor-pointer drop-shadow shadow-lg rounded-lg transform
        transition duration-500 hover:scale-105
      dark:text-white dark:bg-stone-800 dark:border-stone-700
      ">
        <div className="mb-5">
          <CoverImage slug={slug} title={title}
                      src={coverImage} customStyles={'rounded-t-lg'}/>
        </div>
        <div className={"px-4 py-6"}>
          <h3 className="truncate text-2xl lg:text-3xl font-medium mb-3 leading-snug">
            {title}
          </h3>
          <div className="text-base mb-4 text-slate-500 dark:text-slate-200">
            📆 <DateFormatter dateString={date}/>
          </div>
          <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
        </div>

      </div>

    </Link>
  )
}
