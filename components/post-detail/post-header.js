import DateFormatter from '../../utils/date-formatter'
import CoverImage from '../common/cover-image'
import PostTitle from './post-title'

export default function PostHeader({title, coverImage, date, author}) {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="max-w-2xl mx-auto mb-8 md:mb-16">
        <CoverImage title={title} src={coverImage}/>
      </div>
      <div className="max-w-2xl mx-auto">
        <div className="mb-6 text-lg text-slate-500">
          📆 <DateFormatter dateString={date}/>
        </div>
      </div>
    </>
  )
}
