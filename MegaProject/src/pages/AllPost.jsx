import React, { useEffect, useState } from 'react'
import { PostCard, Container } from '../components'
import service from '../appwrite/config'

function AllPost() {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        service.getPost([]).then((posts) => setPosts(posts.documents))
    }, [])
  return (
    <div className='w-full pu-8'>
        <Container>
            <div className='flex-wrap'>
                {posts.map((post) => (
                    <div key={post.$id} className='w-1/4 p-2'>
                        <PostCard post={post}/>
                    </div>
                    ))}
            </div>
        </Container>
    </div>
  )
}

export default AllPost