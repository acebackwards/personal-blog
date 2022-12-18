import React, { useContext } from 'react'
import CommentItem from './CommentItem'
import { deleteComment, fetchComment } from '../http/commentApi'
import { Context } from '../index'


export default function CommentContainer({repo_id}) {

    const { comments } = useContext(Context)
    const commentList = []
    const sortedList = []

    const removeComment = (id, user_id, role) => {
        deleteComment(id, user_id, role)
        // .then()
      }

    function sortingComments() {
        // обнуление массивов при ререндере комментов 
        commentList.length = 0
        sortedList.length = 0
        
        fetchComment(repo_id)
        .then(data => {comments.setComments(data)
        })

        // проходка по всем комментам из бд и запись в массив
        comments.comments.map(comment => {
                commentList.push(comment)
        })

        // сортировка реплаев к пэрентам
        for (let i = 0; i < commentList.length; i++) {
            if (!commentList[i].parent_id) {
                sortedList.push(commentList[i])
                for (let j = i + 1; j < commentList.length; j++) {
                    if (commentList[i].id === commentList[j].parent_id) {
                        sortedList.push(commentList[j])
                    }
                }
            }
        }
        console.log(sortedList)
    }

    sortingComments()
    const commentMapping = sortedList.map((comment) => {
        // await sortingComments()
        return (
            <CommentItem key={comment.id} comment={comment} sortingComments={sortingComments}/>
        )
    })

  return (
    <>
        {commentMapping}
    </>
  )
}
