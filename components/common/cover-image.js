import cn from 'classnames'

export default function CoverImage({title, src, slug}) {
  const image = (
    <img
      src={src}
      alt={`Cover Image for ${title}`}
      className={cn('w-full aspect-video')}
    />
  )
  return (
    <div className="sm:mx-0">
      {image}
    </div>
  )
}
