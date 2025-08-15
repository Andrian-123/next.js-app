type listnotes = {
  id: string
  title: string
  description: string
  created_at: string
  updated_at: string
}
type Notes = {
  success: boolean
  message: string
  data: listnotes
}
type detailnotes = {
  success: boolean
  message: string
  data: listnotes
}
export const revalidate = 3

export const dynamicParams = true

export async function generateStaticParams() {
  const notes: Notes = await fetch(
    `https://service.pace11.my.id/api/notes`,
  ).then((res) => res.json())
  return notes.data.map((note: listnotes) => ({
    id: String(note.id),
  }))
}

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const id = (await params).id

  const notes: detailnotes = await fetch(
    `https://service.pace11.my.id/api/notes/${id}`,
  ).then((res) => res.json())
  return (
    <main>
      <h1>{notes.data.title}</h1>
      <p>{notes.data.description}</p>
    </main>
  )
}
