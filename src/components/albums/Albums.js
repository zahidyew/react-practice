import {useState, useEffect} from 'react'
import AlbumItem from './AlbumItem'

const Albums = () => {
   const [albums, setAlbums] = useState([])

   useEffect(() => {
      const fetchAlbums = async () => {
         const url = 'https://jsonplaceholder.typicode.com/albums'
         const response = await fetch(url)
         const data = await response.json()

         //console.log(data)
         setAlbums(data)
      }  
      fetchAlbums()
   }, [])

   return (
      <div>
         {albums.map(item => {
            return(
               <AlbumItem key={item.id} album={item} />
            )
         })}
      </div>
   )
}

export default Albums
