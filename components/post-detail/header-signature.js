import Link from 'next/link'
import {POST_DETAIL_SIGNATURE_TEXT} from "../../data/constants";

export default function HeaderSignature() {
  return (
    <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8 dark:text-white">
      <Link href="/" className="hover:underline">
        {POST_DETAIL_SIGNATURE_TEXT}
      </Link>
    </h2>
  )
}
