import Image from 'next/image';
import useTheme from "../hooks/useTheme";
import {THEME_MODE} from "../../data/constants";

const shimmerDay = (w, h) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#ccc" offset="20%" />
      <stop stop-color="#ddd" offset="50%" />
      <stop stop-color="#ccc" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#ccc" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`

const shimmerDark = (w, h) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#333" offset="20%" />
      <stop stop-color="#222" offset="50%" />
      <stop stop-color="#333" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#333" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`

const toBase64 = (str) =>
  typeof window === 'undefined'
    ? Buffer.from(str).toString('base64')
    : window.btoa(str)

export default function CoverImage({title, src, customStyles}) {
  const {theme} = useTheme();

  const shimmer = theme === THEME_MODE.DAY ? shimmerDay : shimmerDark;


  return (
    <div className={`relative aspect-video ${customStyles}`}>
      <Image
        src={src}
        alt={`Cover Image for ${title}`}
        width='0'
        height='0'
        sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
        placeholder="blur"
        blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`}
        className={`w-full h-full object-cover ${customStyles}`}
      />
    </div>
  )
}
