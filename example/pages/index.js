import { useState, useEffect } from 'react'

import { useWikipedia } from '../../use-wikipedia';



export default function Index() {


  const { query } = useWikipedia()
  let [error, setError] = useState(null);
  let [data, setData] = useState([]);
  let [q, setQ] = useState("");



  const search = async () => {
    const { data, error } = await query(q)
    setData(data)
    setError(error)
  }

  return (
    <main>
      <style jsx global>{`
        body {
          font-family: sans-serif;
          padding: 0;
          margin: 0;
        }

        main {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 1em 0;
        }

        h1 {
          font-size: 2em;
        }

        pre {
          overflow: auto;
          max-height: 15em;
          background-color: #eeeeee;
          padding: 1em;
        }

        section,
        footer {
          width: 100%;
          max-width: 50em;
          margin: 0 auto;
        }

      `}</style>

      <section>

        <div>
          <input value={q} onChange={({ target: { value } }) => setQ(value)} />
          <button onClick={search} >
            Search
          </button>
        </div>

        <pre>Response (search)  : {JSON.stringify(data.search)}</pre>
        <pre>Response (searchinfo)  : {JSON.stringify(data.searchinfo)}</pre>
        <pre>Error: {JSON.stringify(error)}</pre>


      </section>

    </main>
  );

}