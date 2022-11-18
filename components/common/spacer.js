export default function Spacer(props) {
  return (
    <div className={`inline-flex justify-center items-center w-full`}>
      <hr className={`w-96 h-px bg-stone-200 border-0 dark:bg-stone-700 ${props.classname}`}/>
    </div>
  )
}
