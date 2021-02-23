// Comments app
function Comments() {
    const comments = [
        'first comment',
        'second comment', 
        'third comment'
    ]

    return(
        <div>
            <h2>Comments: </h2>
            <p>Comment: {comments[0]}</p>
            <p>Comment: {comments[1]}</p>
            <p>Comment: {comments[2]}</p>
        </div>
    )
}


export default Comments