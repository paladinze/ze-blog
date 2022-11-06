import Link from 'next/link'

export default function HeaderSignature() {
  return (
    <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8 dark:text-white">
      <Link href="/">
        <a className="hover:underline">ZE.</a>
      </Link>
    </h2>
  )
}
