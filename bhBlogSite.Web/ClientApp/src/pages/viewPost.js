import React, { useState, useEffect } from "react";
import axios from 'axios';
import { useParams } from 'react-router-dom'
import { data } from "jquery";
import format from 'date-fns/format';
import Addcomment from "../components/AddComment";
import SingleComment from "../components/SingeComment";


const ViewPost = () => {

    const [post, setPost] = useState({
        title: '',
        body: '',
        date: '',
        comments: []
    })
    const [commentsAmount, setCommentsAmount] = useState()

    const { id } = useParams()

    const generateComments = () => {
        return post.comments.map((c, i) => {
            return <SingleComment
                key={i}
                comment={c} />
        })

    }

    const onSubmition = () => {
        const getCommentsAmount = async () => {
            const { data } = await axios.get(`api/blogsite/getcommentsamount?id=${id}`)
            setCommentsAmount(data)
        }
        getCommentsAmount()
    }

    useEffect(() => {
        const getPostById = async () => {
            const { data } = await axios.get(`api/blogsite/getpostbyid?id=${id}`)
            console.log(data)
            setPost(data)
        }
        getPostById()
    }, [commentsAmount])

    return (
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-lg-8'>
                    <h2 className='mt-4'>{post.title}</h2>
                    <hr/>
                    <p className="ml-1 text-muted">Posted on {post.date}</p>
                    <hr/>
                    {post.body.split('\n').map((p, i) => {return <p key={i} >{p}</p>})}
        
                    <Addcomment onSubmition={onSubmition} />
                    {generateComments()}
                </div>
            </div>
        </div>

    )

}

export default ViewPost;