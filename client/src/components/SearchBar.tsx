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
      className=" w-[450px] top-0 static mt-28 flex px-3 py-3 rounded-md border-2 border-slate-600 overflow-hidden max-w-md mx-auto font-[sans-serif]">
      <input type="text" placeholder="Search a Book"
        className="w-full outline-none bg-transparent text-gray-600 text-lg px-1 py-1"
        value={book}
        onChange={(e) => setBook(e.target.value)} />
        <button type='submit' className="flex items-center justify-center bg-slate-600 px-5 rounded-lg">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192.904 192.904" width="16px" className="fill-white">
            <path
              d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z">
            </path>
          </svg>
        </button>
    </form>
  )
}