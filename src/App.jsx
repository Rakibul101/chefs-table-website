import Banner from "./components/Banner/Banner"
import Blogs from "./components/Blogs/Blogs"
import Bookmarks from "./components/Bookmarks/Bookmarks"
import Navbar from "./components/Navbar/Navbar"
function App() {


  return (
    <>

      <Navbar></Navbar>
      <Banner></Banner>
      <div className="max-w-7xl px-6 md:px-0 mx-auto mt-10 flex justify-between">
        <Blogs></Blogs>
        <Bookmarks></Bookmarks>
      </div>

    </>
  )
}

export default App
