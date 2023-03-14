import { ThumbsUp, Trash } from "phosphor-react";
import { useState } from "react";
import { Avatar } from "./Avatar";
import styles from "./Comment.module.css";

interface CommentProps {
    content: string;
    onDeleteComment: (comment: string) => void;
}


export function Comment({ content, onDeleteComment }: CommentProps) {
    const [likeComment, setLikeComment] = useState(0);
    function handleDeleteComment() {
        onDeleteComment(content);
    }

    function handleLikeComment() {
        // using previous state to ensure the correct value in update
        // in React, due to the Closure and the context setState() is executed
        // you need to be careful to not use the wrong value when you need to rely on the last state
        setLikeComment((state) => (state + 1));
    }

    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://media.licdn.com/dms/image/C4E03AQFkfEWTiK2j2g/profile-displayphoto-shrink_800_800/0/1616686015673?e=1678924800&v=beta&t=cYOvpV8288iwGf3oK01eSsSenX0YXy-mkD8kw9lhjxM" alt=""/>
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Jamon</strong>
                            <time title="11 de maio às 08:13" dateTime="2023-01-10 09:20">Cerca de 1h atrás</time>
                        </div>
                        <button onClick={handleDeleteComment} title="Deletar comentário">
                            <Trash size={24} />
                        </button>
                    </header>

                    <p>{content}</p>
                </div>
                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp />
                        Aplaudir <span>{likeComment}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}
