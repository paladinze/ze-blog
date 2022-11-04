export default function TabMenu() {
  return <section>
    <ul className="px-4 flex flex-wrap text-sm font-medium text-center text-gray-500 dark:text-gray-400 ">
      <li className="mr-2">
        <a href="#" className="inline-block py-3 px-4 text-white bg-gray-800 rounded-lg active"
           aria-current="page">Projects</a>
      </li>
      <li className="mr-2">
        <a href="#"
           className="inline-block py-3 px-4 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white">Thoughts</a>
      </li>
      <li className="mr-2">
        <a href="#"
           className="inline-block py-3 px-4 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white">About</a>
      </li>
    </ul>
  </section>
}
