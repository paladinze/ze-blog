
export default function PostBody({ content }) {
  return (
    <div className="max-w-2xl mx-auto">
      <div
        className={"prose prose-stone lg:prose-lg"}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  )
}
