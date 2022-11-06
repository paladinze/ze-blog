
export default function PostBody({ content }) {
  return (
    <div className="max-w-2xl mx-auto">
      <div
        className={"prose prose-stone lg:prose-lg dark:prose-invert"}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  )
}
