import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SinglePost from '../components/singlePost';

const Home = () => {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        const getAll = async () => {
            const { data } = await axios.get('api/blogsite/getall')
            setPosts(data)
        }
        getAll()
        console.log(posts)
    }, [])

    const generatePage = () => {
        return posts.map((p, i) => {
            return <SinglePost
                key={i}
                post={p} />
        })

    }

    return (
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-md-8 offset-md-2 jumbotron'>
                    {generatePage()}
                </div>
            </div>
        </div>
    )

}

export default Home;