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

export const revalidate = 3

export const dynamicParams = true

export default async function Page() {
  const notes: Notes = await fetch(
    `https://service.pace11.my.id/api/notes`,
  ).then((res) => res.json())
  return (
    <main>
      <ul>
        {notes.data.map((note) => {
          ;<li
            key={note.id}
            style={{ border: '1px solid black', marginBottom: '10px' }}
          >
            <a href={`/notes/isr/$(note.id)`}>{note.title}</a>
          </li>
        })}
      </ul>
    </main>
  )
}
