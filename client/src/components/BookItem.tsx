import { useNavigate } from "react-router-dom"
import { Book } from "../types/global"

const BookItem = (props: Book) => {
  const navigate = useNavigate()

  return (
        <a onClick={() => navigate(`/books/${props.id}`)} className="bg-white rounded-lg shadow-md overflow-hidden transition-all hover:scale-105">
        <img src={ props.thumbnail } alt={ props.title } className="w-full h-48 object-cover" />
        <div className="p-4">
          <h3 className="font-bold text-lg mb-2 truncate">{ props.title }</h3>
          <p className="text-sm text-gray-600 mb-2">{ props.author }</p>
          <div className="flex justify-between items-center">
            <div>
              <span className="text-lg font-bold text-green-600">${ props.price }</span>
              <span className="text-sm text-gray-500 line-through ml-2">${ (props.price / (1 - props.discountPercentage / 100)).toFixed(2) }</span>
            </div>
            <span className="bg-red-100 text-red-800 text-xs font-semibold px-2 py-1 rounded">
              -{ props.discountPercentage }%
            </span>
          </div>
        </div>
      </a>
  )
}

export default BookItem
