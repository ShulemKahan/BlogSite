import React from "react"
import { format } from 'date-fns'

function SingleComment({ comment }) {
    const { name, commentBody, commentedOn } = comment


    return (
        <div className="media mb-4">
            <div className="media-body">
                <h5 className="mt-0">{name}
                    <small> {format(new Date(commentedOn), 'EEEE LLLL do, R')}</small>
                </h5>
                {commentBody}
            </div>
        </div>
    )

}

export default SingleComment;