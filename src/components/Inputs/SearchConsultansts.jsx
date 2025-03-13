import { useMutation } from '@tanstack/react-query'
import { useEffect, useState } from 'react'
import { getSalesTeamsBulk } from '../../hooks/fetchDataApi'
import { FixedSizeList as List } from 'react-window'

export default function SearchConsultansts({ dataST, placeholder = "Consultor" }) {

  const [searchTerm, setSearchTerm] = useState()
  const [filteredNames, setFilteredNames] = useState([])
  const [dataSales, setDataSales] = useState({})
  const [salesTeam, setSalesTeam] = useState()

  //hooks

  const getSalesTeam = useMutation({
    mutationFn: (data) => getSalesTeamsBulk(data),
    onSuccess: (response) => {
      console.log('Respuesta:', response)
      setDataSales(response.data)
    },
    onError: (error) => {
      console.error('error al enviar el formulario', error)
    },
  })

  //functions
  const handleSearch = (event) => {
    const value = event.target.value
    setSearchTerm(value)
    setFilteredNames(dataSales.filter((data) => data?.Name.toLowerCase().includes(value.toLowerCase())))
    setSalesTeam({})
    dataST({})
  }

  const handleSelect = (data) => {
    setSearchTerm(data?.Name)
    setFilteredNames([])
    setSalesTeam(data)
    dataST(data)
  }

  // Row renderer for virtual list
  const Row = ({ index, style }) => {
    const data = filteredNames[index]
    return (
      <li
        style={style}
        className="cursor-pointer list-none px-4 py-2 hover:bg-gray-200"
        onClick={() => {
          handleSelect(data)
        }}
      >
        {data?.Name}
      </li>
    )
  }

  //useEffect
  useEffect(() => {
    getSalesTeam.mutate()
  }, [])

  return (
    <>
      <div className="relative">
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearch}
          className={`peer mt-2 block w-full cursor-pointer rounded-xl border bg-white px-4 py-2.5 text-sm [appearance:textfield] focus:outline-none focus:ring-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none ${salesTeam?.Id ? 'border-green-600 focus:border-green-600' : 'border-blue-300 focus:border-blue-500'}`}
          placeholder={placeholder}
        />
        <div className="absolute right-3 top-2.5 z-10 origin-[0] -translate-y-3.5 scale-75 transform cursor-pointer text-gray-500 duration-300 peer-placeholder-shown:scale-100">
          {salesTeam?.Id ? (
            <lord-icon
              src="https://cdn.lordicon.com/qgtkfluv.json"
              trigger="in"
              delay="300"
              stroke="bold"
              state="in-reveal"
              colors="primary:#30e849,secondary:#000000"
              style={{ width: '50px', height: '50px' }}
            ></lord-icon>
          ) : (
            <lord-icon
              src="https://cdn.lordicon.com/wjyqkiew.json"
              trigger="in"
              delay="300"
              stroke="bold"
              state="in-reveal"
              colors="primary:#6D6E71,secondary:#6D6E71"
              style={{ width: '40px', height: '50px' }}
            ></lord-icon>
          )}
        </div>
        {searchTerm && (
          <div className={`absolute z-10 mt-1 h-fit max-h-[200px] w-full rounded-md border border-gray-300 bg-white`}>
            {filteredNames.length === 0 && !salesTeam?.Id ? (
              <div className="cursor-pointer px-4 py-2 hover:bg-gray-200">No results found</div>
            ) : (
              <List
                height={Math.min(200, filteredNames.length * 40)} // Adjust height based on number of items (max 200px)
                itemCount={filteredNames.length}
                itemSize={40} // Height of each item in pixels
                width="100%"
              >
                {Row}
              </List>
            )}
          </div>
        )}
      </div>
    </>
  )
}
