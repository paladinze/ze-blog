import { parseISO, format } from 'date-fns'
import { zhCN } from 'date-fns/locale'

export default function DateFormatter({ dateString }) {
  const date = parseISO(dateString)
  return <time dateTime={dateString}>{format(date, 'yyyy年MM月dd日', {
    locale: zhCN
  })}</time>
}
