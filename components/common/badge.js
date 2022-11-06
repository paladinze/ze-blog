import cn from 'classnames';

export const BADGE_COLORS = {
  PINK: 'PINK',
  YELLOW: 'YELLOW',
  BLUE: 'BLUE',
}

export default function Badge(props) {
  const {label, color} = props;
  return <div
    className={cn("mb-4 inline-block text-sm font-medium mr-2 px-3 py-2 rounded ",
      {
        "bg-blue-100 text-blue-800 dark:bg-blue-200 dark:text-blue-800": color === BADGE_COLORS.BLUE
      },
      {
        "bg-pink-100 text-pink-800 dark:bg-pink-200 dark:text-pink-900": color === BADGE_COLORS.PINK
      },
      {
        "bg-yellow-100 text-yellow-800 dark:bg-yellow-200 dark:text-yellow-900": color === BADGE_COLORS.YELLOW
      }
    )}>
    {label}
  </div>
}
