import {FC, useEffect, useState} from "react";
import {Wrapper} from "src/App";
import {Author} from "../data/authors";
import {Comment} from "../data/comments";
import getDataRequest from "../data/getDataRequest";
import {CommentsItem} from "./CommentsItem";

type Data = {
    comments?: Comment[];
    authors?: Author[] | undefined;
};
const CommentsList: FC = () => {
    const [data, setData] = useState<Data>({});

    useEffect(() => {
        (async () => {
            try {
                const {comments, authors} = await getDataRequest();
                setData({comments, authors});
            } catch (error) {
                alert(error);
            }
        })();
    }, []);
    const {comments, authors} = data;
    console.log(comments?.map((comment) => comment));

    return (
        <Wrapper>
            {authors &&
                comments?.map((comment) => (
                    <CommentsItem
                        key={comment.id}
                        comment={comment}
                        authors={authors}
                    />
                ))}
        </Wrapper>
    );
};

export default CommentsList;
