import React from "react"
import s from "./Post.module.css"

const Post = (props) => {

  return (
    <div className={s.item}>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJxA5cTf-5dh5Eusm0puHbvAhOrCRPtckzjA&usqp=CAU" />
      { props.message }
      <div>
        <span>like</span> { props.likesCount }
      </div>
    </div>
  )
}

export default Post
