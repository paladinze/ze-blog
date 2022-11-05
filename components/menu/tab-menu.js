import Link from "next/link";
import cn from 'classnames';
import {TAGS} from "../../data/constants";

function TabLink(props) {
  const {link, label, selected, onClick} = props;

  if (!link) {
    return <li
      onClick={onClick}
      className={cn("cursor-pointer mr-2 inline-block py-3 px-4 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white", {
        "bg-gray-800 text-white": selected
      })}>
      {label}
    </li>
  }

  return <Link href={link}>
    <li
      className={cn("cursor-pointer mr-2 inline-block py-3 px-4 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white", {
        "bg-gray-800 text-white": selected
      })}>
      {label}
    </li>
  </Link>
}

const tabsData = [
  {
    label: 'Projects',
    tag: TAGS.PROJECT,
  },
  {
    label: 'Labs',
    tag: TAGS.LAB,
  },
  {
    label: 'About',
    link: "/about"
  },
]

export default function TabMenu(props) {
  const {selectedTag, setSelectedTag} = props;
  return <section>
    <ul className="px-4 flex flex-wrap text-sm font-medium text-center text-gray-500 dark:text-gray-400 ">
      {tabsData.map(({label, link, tag}, index) => {
        return <TabLink
          key={index} label={label} link={link}
          selected={selectedTag === tag}
          onClick={() => {
            if (!tag) return;
            console.log('click')
            setSelectedTag(tag);
          }}
        />
      })}
    </ul>
  </section>
}
