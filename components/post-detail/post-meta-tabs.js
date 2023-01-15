import cn from 'classnames';
import Alert from "../common/alert";
import {PLATFORMS} from "../../data/constants";
import {useState} from "react";
import {isOnMobile} from "../../utils/feature-detection";

const ACTION_TYPES = {
  DATE: 'DATE',
  REPO: 'REPO',
  DEMO: 'DEMO'
};

export default function PostMetaTabs(props) {
  const {date, repo, repoLink, demoLink, platforms} = props;

  const isDesktopOnly = platforms?.length === 1 && platforms[0] === PLATFORMS.DESKTOP
  const demoLabel = isDesktopOnly ? `🖥️ Desktop` : '🔗 Live Demo'

  const [showDesktopAlert, setDesktopAlert] = useState(false);

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
      name: demoLabel,
      type: ACTION_TYPES.DEMO,
      url: demoLink
    }
  ]

  const handleItemClick = (event, item) => {
    if (item.type !== ACTION_TYPES.DEMO) return;

    if (isDesktopOnly && isOnMobile()) {
      setDesktopAlert(true);
      event.preventDefault();
    }
  }

  return <>
    {showDesktopAlert && <Alert onConfirm={() => {
      setDesktopAlert(false);
    }}>
      <span slot="title">Desktop only</span>
      <span slot="description">This project is developed for the Desktop environment. Please open it on a laptop or PC.</span>
    </Alert>}
    <ul
      className="truncate text-xs lg:text-base font-medium text-center text-gray-500 rounded-lg divide-x divide-stone-200 shadow flex dark:divide-stone-700 dark:text-stone-500">
      {actionList.map((item, index) => {
        const enabled = !!item.url || item.type === ACTION_TYPES.DATE;
        const name = item.type === ACTION_TYPES.REPO && !item.url
          ? 'Closed Source'
          : item.name;

        return <li className="w-full" key={index}>
          <a
            onClickCapture={(event) => {
              handleItemClick(event, item)
            }}
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
  </>
}
