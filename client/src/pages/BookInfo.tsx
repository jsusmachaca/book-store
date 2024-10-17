import { useEffect, useState } from 'react'
import apiClient from '../api/client'
import { useNavigate, useParams } from 'react-router-dom'
import { AxiosError } from 'axios'
import { Book } from '../types/global'
import Rating from '../components/Raiting'
import Carousell from '../components/Carousell'

const BookInfo = () => {
  const [book, setBooks] = useState<Book>({
    id: 0,
    title: '',
    description: '',
    price: 0,
    discountPercentage: 0,
    rating: 0,
    stock: 0,
    author: '',
    category: '',
    thumbnail: '',
    images: []
  })
  const navigate = useNavigate()
  const { id }= useParams()

  useEffect(() => {
    const getBooks = async () => {
      try {
        const res = await apiClient.get(`/api/books/${id}`)
        console.log('obtaining data')
        setBooks(res.data)
      } catch (err) {
        console.error((err as AxiosError).response?.data)
      }
    }

    if (id) {
      getBooks()
    } else {
      navigate('/')
    }
  }, [id, navigate])

  return (
    <section className='w-fit grid grid-cols-2 gap-10 justify-items-center mt-40'>
      <Carousell images={book.images} />
      <article>
        <h1 className='text-6xl font-extrabold'>{ book.title }</h1>
        <div className='space-y-4'>
          <p className='w-96 text-lg'>by { book.author }</p>

          <Rating value={book.rating} />

          <div className="space-y-2">
            <p className="text-2xl font-bold">${ book.price }</p>
            <p className="text-sm text-gray-600">
              <span className="line-through">${ (book.price / (1 - book.discountPercentage / 100)).toFixed(2) }</span>
              <span className="ml-2 text-green-600">-{ book.discountPercentage }%</span>
            </p>
          </div>
          <p className="text-sm text-gray-600">Stock available: { book.stock }</p>

          <p className="bg-gray-200 w-fit text-gray-800 px-2 py-1 rounded-full text-sm">
            { book.category }
          </p>
          <p className='w-96 text-gray-700'>{ book.description }</p>
        </div>
      </article>
    </section>
  )
}

export default BookInfo
