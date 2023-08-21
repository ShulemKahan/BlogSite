import { Link } from 'react-router-dom'
import React from "react"
import { format } from 'date-fns'

function SinglePost({ post }) {
    const { id, title, body, date, comments } = post

    return (
        <div className='card mb-4'>
            <div className='card-body'>
                <h2 className='card-title'>{title}</h2>
                <p className='card-text'>{body.length < 200 ? body : body.substring(0, 200) + '...'}</p>
                <div className='mb-3'>
                    <small>{comments.length} Comment(s)</small>
                </div>
                <Link to={`/viewpost/${id}`}>
                    <button className='btn btn-info'>Read more &rarr;</button>
                </Link>
                
                <div className='card-footer text-muted mt-3'>

                    Posted on {format(new Date(date), 'EEEE LLLL do, R')}
                </div>
            </div>
        </div>
    )
}

export default SinglePost;