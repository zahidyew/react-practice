import {useState, useEffect} from 'react'
import PhotoItem from './PhotoItem'
import PropTypes from 'prop-types'

const Photos = ({match}) => {
   const [photos, setPhotos] = useState([])

   useEffect(() => {
      const fetchPhotos = async () => {
         const url = 'https://jsonplaceholder.typicode.com/photos?albumId=' + match.params.albumId
         const response = await fetch(url)
         const data = await response.json()

         //console.log(data)
         setPhotos(data)
      }  
      fetchPhotos()
   }, [match.params.albumId])

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

Photos.propTypes = {
   match: PropTypes.object
}

export default Photos
