import { useState, useEffect } from 'react'

function SearchSelect({ items }) {
  const [search, setSearch] = useState('')
  const [filteredItems, setFilteredItems] = useState(items)

  useEffect(() => {
    setFilteredItems(items.filter((item) => item.toLowerCase().includes(search.toLowerCase())))
  }, [search, items])

  return (
    <div>
      <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search..." />
      <select>
        {filteredItems.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  )
}

export default SearchSelect
