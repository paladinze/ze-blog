import cn from 'classnames'

export default function CoverImage({title, src, slug, customStyles}) {
  const image = (
    <img
      src={src}
      alt={`Cover Image for ${title}`}
      className={cn(`w-full aspect-video ${customStyles}`)}
    />
  )
  return (
    <div className="sm:mx-0">
      {image}
    </div>
  )
}
