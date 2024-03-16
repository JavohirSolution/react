import MovieListItem from '../movie-list-items/movie-list-items'
import './movie-list.css'
const MovieList = ({ data, onDelete, onToggleProp }) => {
  return (
    <ul className="movie-list">
      {data.map(item => (
        <MovieListItem
          key={item.id}
          {...item}
          onDelete={() => onDelete(item.id)}
          onToggleProp={(e) => onToggleProp(item.id, e.currentTarget.getAttribute('data-toggle'))}
        />
      ))}
    </ul>
  )
}

export default MovieList
