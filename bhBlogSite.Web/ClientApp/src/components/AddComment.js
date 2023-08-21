import React, { useEffect, useState } from "react";
import { produce } from "immer"
import axios from "axios";
import { useHistory, useParams } from 'react-router-dom';
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Addcomment = ({ onSubmition }) => {

    const [comment, setComment] = useState({
        name: '',
        commentBody: ''
    })
    const [commentorName, setCommentorName] = useState('')

    const {id } = useParams()

    useEffect(() => {
        const commentorName = localStorage.getItem('commentor-name')
        if (commentorName) {
            setComment({ name: commentorName, commentBody: '' })
        }
    }, [])
    const onButtonClick = async () => {
        const { name, commentBody } = comment
        const blogPostId = id
        await axios.post(`/api/blogsite/addcomment`, { name, commentBody, blogPostId })
        localStorage.setItem('commentor-name', name)
        setComment({
            ...comment,
            commentBody: ''
        })
        onSubmition()
    }

    const onTextchange = (e) => {
        const newComment = produce(comment, draft => {
            draft[e.target.name] = e.target.value;
        });
        setComment(newComment);
    }


    return (
        <div className='card mb-4'>
            <div className='card-body bg-light'>
                <h5>Add a comment</h5>
                <input type='text' className='form-control' placeholder='Name' name='name' value={comment.name} onChange={onTextchange} />
                <br />
                <textarea className='form-control' placeholder="Write a comment" name='commentBody' rows={5} value={comment.commentBody} onChange={onTextchange}></textarea>
                <br></br>
                    <button className='btn btn-primary' disabled={comment.name === '' || comment.commentBody === ''} onClick={onButtonClick}>Submit!</button>
            </div>
        </div>
    )
}
export default Addcomment