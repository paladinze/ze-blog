import Link from "next/link";
import cn from 'classnames';
import {TAGS} from "../../data/constants";

function TabLink(props) {
  const {link, label, selected, onClick} = props;

  const LinkComponent = <li
    onClick={onClick}
    className={cn("cursor-pointer mr-1 inline-block py-3 px-3 rounded-lg hover:text-stone-900 hover:bg-stone-100 dark:hover:bg-stone-700 dark:hover:text-white", {
      "bg-stone-700 text-white": selected
    })}>
    {label}
  </li>;

  if (!link) {
    return LinkComponent
  }

  return <Link href={link}>
    {LinkComponent}
  </Link>
}

const tabsData = [
  {
    label: 'All',
    tag: TAGS.ALL,
  },
  {
    label: 'Projects',
    tag: TAGS.PROJECT,
  },
  {
    label: 'Labs',
    tag: TAGS.LAB,
  },
  {
    label: 'Thoughts',
    tag: TAGS.THOUGHTS,
  },
  {
    label: 'About',
    link: "/about"
  },
]

export default function TabMenu(props) {
  const {selectedTag, setSelectedTag} = props;
  return <section>
    <ul className="lg:px-4 flex flex-wrap text-sm lg:text-lg font-medium text-center text-stone-500 dark:text-stone-300 ">
      {tabsData.map(({label, link, tag}, index) => {
        return <TabLink
          key={index} label={label} link={link}
          selected={selectedTag === tag}
          onClick={() => {
            if (!tag) return;
            setSelectedTag(tag);
          }}
        />
      })}
    </ul>
  </section>
}
