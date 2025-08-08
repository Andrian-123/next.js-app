//Server Component
// export default async function BlogDetail({
//   params,
// }: {
//   params: Promise<{ id: string }>
// }) {
//   const id = (await params).id
//   return <div>About Detail Page{id}</div>
// }

'use client'
import { useParams, useSearchParams } from 'next/navigation'

export default function BlogDetail() {
  const params = useParams()
  const search = useSearchParams()
  const user = search.get('user')
  const query = Object.fromEntries(search.entries())
  const qparams = search.getAll
  return (
    <div>
      About Detail Page {`dynamic : ${params.id}, query param: ${user}`}
    </div>
  )
}
