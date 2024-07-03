import { useState } from "react"
import Banner from "./components/Banner/Banner"
import Blogs from "./components/Blogs/Blogs"
import Bookmarks from "./components/Bookmarks/Bookmarks"
import Navbar from "./components/Navbar/Navbar"
function App() {

  const [bookmarks, setBookmarks] = useState([]);
  const handleAddTOBookmark = blog =>{
      const newBookmarks = [...bookmarks,blog];
      setBookmarks(newBookmarks)
  }
  return (
    <>

      <Navbar></Navbar>
      <Banner></Banner>
      <div className="max-w-7xl px-6 md:px-0 mx-auto mt-10 md:flex justify-between">
        <Blogs handleAddTOBookmark={handleAddTOBookmark}></Blogs>
        <Bookmarks bookmarks={bookmarks}></Bookmarks>
      </div>

    </>
  )
}

export default App
