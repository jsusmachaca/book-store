import React, { useState } from "react";
import { useNavigate } from "react-router-dom"

export const SearchBar = () => {
  const navigate = useNavigate()

  const [book, setBook] = useState('')
  
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    navigate(`/books?search=${book}`)
  }

  return (
    <form onSubmit={handleSubmit} 
      className=" w-96 top-0 static mt-28 flex px-4 py-3 rounded-md border-2 border-blue-500 overflow-hidden max-w-md mx-auto font-[sans-serif]">
      <input type="text" placeholder="Search a Book"
        className="w-full outline-none bg-transparent text-gray-600 text-sm"
        value={book}
        onChange={(e) => setBook(e.target.value)} />
    </form>
  )
}