export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <p>Blog layout</p>
      {children}
    </div>
  )
}
