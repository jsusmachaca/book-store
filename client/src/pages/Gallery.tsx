import { useEffect, useState } from 'react'
import apiClient from '../api/client'
import { Book } from '../types/global'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { AxiosError } from 'axios'
import BookItem from '../components/BookItem'

const Gallery = () => {
  const [books, setBooks] = useState<Book[]>([])
  const [searchParam] = useSearchParams()
  const book = searchParam.get('search')
  const natigate = useNavigate()

  useEffect(() => {
    const getBooks = async () => {
      try {
        const res = await apiClient.get(`/api/books?q=${book}`)
        console.log('obtaining data')
        setBooks(res.data)
      } catch (err) {
        console.error((err as AxiosError).response?.data)
      }
    }

    if (book) {
      getBooks()
    } else {
      natigate('/')
    }
  }, [book])

  return (
    <section className='grid justify-items-center items-center transition-all'>
      <div className='mt-40 grid grid-cols-3 w-fit gap-6 items-center'>
        {books.map((d, i) =>(
          <BookItem key={i} {...d} />
        ))}
      </div>
    </section>
  )
}

export default Gallery
