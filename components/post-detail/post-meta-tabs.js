import cn from 'classnames';

const ACTION_TYPES = {
  DATE: 'DATE',
  REPO: 'REPO',
  DEMO: 'DEMO'
};

export default function PostMetaTabs(props) {
  const {date, repo, repoLink, demo, demoLink} = props;
  const actionList = [
    {
      name: date,
      type: ACTION_TYPES.DATE
    },
    {
      name: repo,
      type: ACTION_TYPES.REPO,
      url: repoLink,
    },
    {
      name: demo,
      type: ACTION_TYPES.DEMO,
      url: demoLink
    }
  ]

  return <ul
    className="truncate text-xs lg:text-base font-medium text-center text-gray-500 rounded-lg divide-x divide-stone-200 shadow flex dark:divide-stone-700 dark:text-stone-500">
    {actionList.map((item, index) => {
      const enabled = !!item.url || item.type === ACTION_TYPES.DATE;
      const name = item.type === ACTION_TYPES.REPO && !item.url
        ? 'Closed Source'
        : item.name;

      return <li className="w-full" key={index}>
        <a
          href={item.url} target={'_blank'}
          className={cn("inline-block p-4 w-full bg-white focus:outline-none dark:bg-stone-800",
            {
            "capitalize dark:text-white dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-700": enabled
          })}>
          {name}
        </a>
      </li>
    })}
  </ul>
}
