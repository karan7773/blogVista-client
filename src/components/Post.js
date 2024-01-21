import { Link } from 'react-router-dom'
import img from '../image/dummy.jpg'
import {format} from 'date-fns'

export default function Post(props) {
  const {id,title,summary,createdAt,author_name,image}=props
    return(
    <div className='post'>
      <div className='post-container'>
        <div className="image">
          <Link to={`/post/${id}`}>
            {
              image ? <img src={image} alt="img"/> : <img src={img} alt="img"/>
            }
          </Link>
        </div>
        <div className="texts">
          <Link to={`/post/${id}`}>
            <h2>{title}</h2>
          </Link>
          <p className="info">
            <a  className="author">{author_name}</a>
            <time>{format(new Date(createdAt),'MMM d, yyyy HH:mm')}</time>
            
          </p>
          <p className="summary">{summary}</p>
        </div>
      </div>
    </div>
    )
};
