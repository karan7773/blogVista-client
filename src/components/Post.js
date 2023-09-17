import img from '../img.jpg'

export default function Post() {
    return(
    <div className='post'>
        <div className="image">
          <img src={img} alt="img"/>
        </div>
        <div className="texts">
          <h2>wallpaper</h2>
          <p className="info">
            <a className="author">Guru</a>
            <time>2023-10-16 08.53</time>
          </p>
          <p className="summary">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
    </div>
    )
};
