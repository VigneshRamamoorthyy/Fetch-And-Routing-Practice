import './index.css'
import {Link} from 'react-router-dom'

const BlogItem = props => {
  const {blogItem} = props
  const {id, title, imageUrl, avatarUrl, author, topic} = blogItem

  return (
    <Link to={`/blogs/${id}`} className="blog-item-link">
      <div className="blog-item">
        <img src={imageUrl} className="blog-img" alt="blogimage" />
        <p className="blog-topic">{topic}</p>
        <h1 className="blog-title">{title}</h1>
        <div className="avatar-author-container">
          <img src={avatarUrl} className="avatar-img" alt="avatar" />
          <p className="author">{author}</p>
        </div>
      </div>
    </Link>
  )
}

export default BlogItem
