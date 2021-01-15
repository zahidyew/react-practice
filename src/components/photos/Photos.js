import {useState, useEffect} from 'react'
import PhotoItem from './PhotoItem'

const Photos = () => {
   const [photos, setPhotos] = useState([])

   useEffect(() => {
      const fetchPhotos = async () => {
         const url = 'https://jsonplaceholder.typicode.com/photos'
         const response = await fetch(url)
         const data = await response.json()

         console.log(data)
         setPhotos(data)
      }  
      fetchPhotos()
   }, [])

   return (
      <div>
         {photos.map(item => {
            return (
               <PhotoItem key={item.id} photo={item} />
            )
         })}
      </div>
   )
}

export default Photos
