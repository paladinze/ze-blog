import cn from 'classnames'

export default function CoverImage({title, src, slug}) {
  const image = (
    <img
      src={src}
      alt={`Cover Image for ${title}`}
      className={cn('shadow-small w-full aspect-video', {
        'hover:shadow-medium transition-shadow duration-200': slug,
      })}
    />
  )
  return (
    <div className="sm:mx-0">
      {image}
    </div>
  )
}
