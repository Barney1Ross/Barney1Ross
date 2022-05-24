import { PostAdd } from '@material-ui/icons'
import React, { useEffect, useState } from 'react'
import "./css/feed.css"
import { db } from './firebase'
import MessageSender from './MessageSender'
import Post from './Post'
import Storyreel from './Storyreel'

function Feed() {

  const [posts, setPosts] = useState([]);

  useEffect(()=>{
      db.collection("posts").onSnapshot(snapshot=>
        {
        setPosts(snapshot.docs.map(doc=>({
          id:doc.id,
          data:doc.data(),
        })))
      })
  },[]);



  return (
    <div className="feed">
        <Storyreel/>
        <MessageSender/>

        {
        posts.map(post=>{
          return <Post photoURL={posts.data?.photoURL} image={posts.data?.image}
             username={posts.data?.username} timestamp="01:30 Pm" message={posts.data?.message}/>

          })
        }
        
    </div> 
  )
}

export default Feed