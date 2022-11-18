import {useRef} from "react";

function CommentItem() {
  return <article className="p-6 mb-6 text-base bg-white rounded-lg dark:bg-stone-900">
    <footer className="flex justify-between items-center mb-2">
      <div className="flex items-center">
        <p className="inline-flex items-center mr-3 text-sm text-stone-900 dark:text-white">
          Ze Cheng</p>
        <p className="text-sm text-stone-600 dark:text-stone-400">
          <time dateTime="2022-02-08"
                title="February 8th, 2022">Feb. 8, 2022
          </time>
        </p>
      </div>
    </footer>
    <p className="text-stone-500 dark:text-stone-400">Very straight-to-point article. Really worth time reading. Thank
      you! But tools are just the
      instruments for the UX designers. The knowledge of the design tools are as important as the
      creation of the design strategy.</p>
  </article>
}


export default function PostCommentsForm({ slug }) {

  const textRef = useRef();
  const nameRef = useRef();
  const emailRef = useRef();

  const clearForm = () => {
    textRef.current.value = '';
    nameRef.current.value = '';
    emailRef.current.value = '';
  }

  const submitHandler = async () => {
    event.preventDefault();

    const payload = {
      text: textRef.current.value,
      name: nameRef.current.value,
      email: emailRef.current.value
    }
    const result = await fetch(`/api/comments/${slug}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    })
    clearForm()
    alert('Thanks for your feedback!')
  }

  return (<section className="py-4 lg:py-8">
    <div className="max-w-2xl mx-auto px-4">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg lg:text-2xl font-bold text-stone-900 dark:text-white">Feedbacks</h2>
      </div>
      <form className="mb-6" onSubmit={submitHandler}>
        <div
          className="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-stone-200 dark:bg-stone-800 dark:border-stone-700">
          <textarea id="comment" rows="7" ref={textRef}
                    className="px-0 w-full text-sm text-stone-900 border-0 focus:ring-0 focus:outline-none dark:text-white dark:placeholder-stone-400 dark:bg-stone-800"
                    placeholder="Feedbacks are always welcome..." required/>
        </div>

        <div className="grid gap-6 mb-6 md:grid-cols-2 pt-4">
          <div>
            <label htmlFor="name" className="block mb-2 text-sm font-medium text-stone-900 dark:text-white">Nickname
              (optional)</label>
            <input type="text" id="name" ref={nameRef}
                   className="border border-stone-300 text-stone-900 text-sm rounded-lg block w-full p-2.5 dark:bg-stone-800 dark:border-stone-600 dark:placeholder-stone-400 dark:text-white"
                   placeholder="name"/>
          </div>
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-stone-900 dark:text-white">Email
              (optional)</label>
            <input type="email" id="email" ref={emailRef}
                   className=" border border-stone-300 text-stone-900 text-sm rounded-lg block w-full p-2.5 dark:bg-stone-800 dark:border-stone-600 dark:placeholder-stone-400 dark:text-white"
                   placeholder="email"/>
          </div>
        </div>

        <div>
          <button type="submit"
                  className="inline-flex items-center py-2.5 px-4 text-small font-medium text-center text-white bg-black rounded-lg">
            Submit
          </button>
        </div>
      </form>
    </div>
  </section>);
}
