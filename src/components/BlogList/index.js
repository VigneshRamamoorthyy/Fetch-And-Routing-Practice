import {Component} from 'react'

import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import BlogItem from '../BlogItem'

import './index.css'

class BlogList extends Component {
  state = {
    blogList: [],
    isTrue: true,
  }

  componentDidMount() {
    this.getBlogsData()
  }

  getBlogsData = async () => {
    const response = await fetch('https://apis.ccbp.in/blogs')

    const data = await response.json()

    const updatedData = data.map(eachData => ({
      id: eachData.id,
      author: eachData.author,
      avatarUrl: eachData.avatar_url,
      imageUrl: eachData.image_url,
      topic: eachData.topic,
      title: eachData.title,
    }))

    this.setState({
      blogList: updatedData,
      isTrue: false,
    })
  }

  render() {
    const {blogList, isTrue} = this.state
    return (
      <div className="blog-lists-container">
        {isTrue ? (
          <div data-testid="loader">
            <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
          </div>
        ) : (
          blogList.map(eachBlogItem => (
            <BlogItem blogItem={eachBlogItem} key={eachBlogItem.id} />
          ))
        )}
      </div>
    )
  }
}

export default BlogList
