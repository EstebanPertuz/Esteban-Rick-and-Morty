
import axios from "axios"
import { useState } from "react"
import Rick from "./components/Rick"


function App() {
  const [rickType, setRickType] = useState({})
  const [searchId, setSearchId] = useState("")
  

  const submit = async (e) => {
    e.preventDefault();
    const { data } = await axios.get(`https://rickandmortyapi.com/api/location/${searchId}`)
    console.log(data)
    setRickType(data)
  }

  


  const [currentPage, setCurrentPage] = useState(1)
  const ricksPerPage = 10



  const lastIndex = ricksPerPage * currentPage
  const firstIndex = lastIndex - ricksPerPage

  const ricksPaginated = rickType.rick?.slice(firstIndex, lastIndex)

  const totalPages = Math.ceil(rickType.rick?.length / ricksPerPage)

  const pages = [];

  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  return (
    <>
      <div className="root-container">
        <h1 className="text-success mt-4">{rickType.name ? rickType.name : 'Search' } </h1>
        
        <form onSubmit={(e) => submit(e)} className="mt-4 d-flex gap-3">

          <input
            className="border border-success bg-success bg-opacity-10 rounded-5 text-success px-4"
            type="text"
            placeholder="Write ID"
            value={searchId}
            onChange={(e) => setSearchId(e.target.value)}
          />

          <button type="submit" className="btn btn-success btn-sm">Search  </button>

        </form>

        {/* <button
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Anterior
        </button> */}

        {/* {pages.map((num) => (
          <button key={num} onClick={() => setCurrentPage(num)}>
            {num}
          </button>
        ))}

        <button
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Siguiente
        </button> */}
        <ul>
          {
          rickType.residents?.map((url) => (
            <Rick key={url} url={url}
            />
          ))
          }
        </ul>
      </div>
    </>
  );
}

export default App;
