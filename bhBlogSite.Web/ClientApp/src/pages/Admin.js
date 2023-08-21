import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { produce } from 'immer';
import { useHistory } from 'react-router-dom';

const Admin = () => {

  const [post, setPost] = useState({
    title: '',
    body: ''
  })
  const history = useHistory();
  // useEffect(() => {
  //   const getNumber = async () => {
  //     const { data } = await axios.get(`/api/first/getRandomNumber`)
  //     setNumber(data)
  //   }
  //   getNumber()
  // })

  const onButtonClick = async () => {
    await axios.post(`/api/blogsite/addpost`, post)
    history.push('/')
  }
  const onTextchange = (e) => {
    const newPost = produce(post, draft => {
      draft[e.target.name] = e.target.value;
    });
    setPost(newPost);
    console.log(post);
  }

  return (
    <div className='container mt-5'>
      <div className='row'>
        <div className='col-md-8 offset-md-2 jumbotron'>
          <h3>Add new post</h3>
          <input type='text' className='form-control' placeholder='Title' name='title' value={post.title} onChange={onTextchange} />
          <br />
          <textarea className='form-control' placeholder="what's on your mind" name='body' rows={20} value={post.body} onChange={onTextchange}></textarea>
          <br></br>
          <button className='btn btn-primary' disabled={post.title === '' || post.body === ''} onClick={onButtonClick}>Submit!</button>
        </div>
      </div>
    </div>
  )
}

export default Admin;