import Link from "next/link";
import cn from 'classnames';

function TabLink(props) {
  const {link, label, selected} = props;
  return <Link href={link}>
      <li className={cn("cursor-pointer mr-2 inline-block py-3 px-4 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white", {
        "bg-gray-800 text-white": selected
      })}>
      {label}
      </li>
    </Link>
}

const tabsData = [
  {
    label: 'Projects',
    link: "/about"
  },
  {
    label: 'Labs',
    link: "/about"
  },
  {
    label: 'About',
    link: "/about"
  },
]

export default function TabMenu() {
  return <section>
    <ul className="px-4 flex flex-wrap text-sm font-medium text-center text-gray-500 dark:text-gray-400 ">
      {tabsData.map(({label, link}, index) => {
        return <TabLink label={label} link={link} selected={index === 0}/>
      })}
    </ul>
  </section>
}
