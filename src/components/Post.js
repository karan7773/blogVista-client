import img from '../img.jpg'

export default function Post(props) {
  const {title,summary}=props
    return(
    <div className='post'>
        <div className="image">
          <img src={img} alt="img"/>
        </div>
        <div className="texts">
          <h2>{title}</h2>
          <p className="info">
            <a className="author">Guru</a>
            <time>2023-10-16 08.53</time>
          </p>
          <p className="summary">{summary}</p>
        </div>
    </div>
    )
};
