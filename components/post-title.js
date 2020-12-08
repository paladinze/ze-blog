export default function PostTitle({ children }) {
  return (
    <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold tracking-tighter
    leading-tight mb-12 text-center">
      {children}
    </h1>
  )
}
