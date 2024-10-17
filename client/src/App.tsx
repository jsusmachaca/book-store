import { Routes, Route, useLocation } from "react-router-dom"
import Gallery from "./pages/Gallery"
import Home from "./pages/Home"
import BookInfo from "./pages/BookInfo"
import { SearchBar } from "./components/SearchBar"
import Header from "./components/Header"

function App() {
  const location = useLocation()

  const pathname = location.pathname;
  const regex = /\/books\/[1-9]/;

  return (
    <main className=" h-full flex items-center flex-col">
      <Header />
      {!regex.test(pathname) && <SearchBar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<Gallery />} />
        <Route path="/books/:id" element={<BookInfo />} />
      </Routes>
    </main>
  )
}

export default App
