import cn from 'classnames'

export default function CoverImage({title, src, slug, customStyles}) {
  return (
    <div className="sm:mx-0">
      <img
        src={src}
        alt={`Cover Image for ${title}`}
        className={cn(`w-full aspect-video ${customStyles}`)}
      />
    </div>
  )
}
