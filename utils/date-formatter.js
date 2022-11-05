import { parseISO, format } from 'date-fns'
import { enCA } from 'date-fns/locale'

export default function DateFormatter({ dateString }) {
  const date = parseISO(dateString)
  return <time dateTime={dateString}>{format(date, 'yyyy-MM-dd', {
    locale: enCA
  })}</time>
}
