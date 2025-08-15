'use client'

import { useEffect, useState } from 'react'

export default function Notes() {
  const [data, setData] = useState([])
  const [Loading, setLoading] = useState(true)
  useEffect(() => {
    fetch(`https://service.pace11.my.id/api/notes`).then((res) =>
      res
        .json()
        .then((data) => setData(data?.data || []))
        .finally(() => setLoading(false)),
    )
  }, [])
  if (Loading) return <div>...Loading</div>
  return (
    <ul>
      {data.map((el: { id: string; title: string }) => (
        <li key={el.id}>{el.title}</li>
      )) || []}
    </ul>
  )
}
