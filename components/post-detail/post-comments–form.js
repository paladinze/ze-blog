function CommentItem() {
  return <article className="p-6 mb-6 text-base bg-white rounded-lg dark:bg-gray-900">
    <footer className="flex justify-between items-center mb-2">
      <div className="flex items-center">
        <p className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
          Ze Cheng</p>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          <time dateTime="2022-02-08"
                title="February 8th, 2022">Feb. 8, 2022
          </time>
        </p>
      </div>
    </footer>
    <p className="text-gray-500 dark:text-gray-400">Very straight-to-point article. Really worth time reading. Thank
      you! But tools are just the
      instruments for the UX designers. The knowledge of the design tools are as important as the
      creation of the design strategy.</p>
  </article>
}


export default function PostCommentsForm() {

  return (<section className="py-4 lg:py-16">
    <div className="max-w-2xl mx-auto px-4">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg lg:text-2xl font-bold text-gray-900 dark:text-white">Feedbacks</h2>
      </div>
      <form className="mb-6" onSubmit={(event) => {
        event.preventDefault();
        alert('submit!')
      }}>
        <div
          className="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
          <textarea id="comment" rows="5"
                    className="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none dark:text-white dark:placeholder-gray-400 dark:bg-gray-800"
                    placeholder="Write a comment..." required></textarea>
        </div>

        <div className="grid gap-6 mb-6 md:grid-cols-2">
          <div>
            <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nickname (optional)</label>
            <input type="text" id="first_name"
                   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                   placeholder="name" required/>
          </div>
          <div>
            <label htmlFor="last_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email (optional)</label>
            <input type="text" id="last_name"
                   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                   placeholder="email" required/>
          </div>
        </div>

        <div>
          <button type="submit"
                  className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-black rounded-lg">
            Post comment
          </button>
        </div>
      </form>
    </div>
  </section>);
}
