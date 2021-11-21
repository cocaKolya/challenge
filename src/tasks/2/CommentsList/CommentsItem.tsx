import {FC} from "react";
import styled from "styled-components";
import {Author} from "../data/authors";
import {Comment} from "../data/comments";
import Like from "src/assets/like.svg";

export const CommentsItem: FC<{
    comment: Comment;
    authors: Author[];
}> = ({comment, authors}) => {
    const author = authors.find((author) => author.id === comment.author);
    const date = new Date(comment.created);

    return (
        <CommentWrapper>
            <AuthorWrapper>
                <LikeDiv>
                    <AvatarWrapper>
                        <Avatar src={author?.avatar} alt={"avatar"} />
                    </AvatarWrapper>
                    <AuthorDiv>
                        <div>{author?.name}</div>
                        <DateDiv>{date.toLocaleString()}</DateDiv>
                    </AuthorDiv>
                </LikeDiv>
                <LikeDiv>
                    <div>{comment.likes}</div>
                    <img src={Like} width={20} alt={"like"} />
                </LikeDiv>
            </AuthorWrapper>
            <CommentDiv>{comment.text}</CommentDiv>
        </CommentWrapper>
    );
};

const AuthorWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`;
const CommentWrapper = styled.div`
    background-color: rgba(207, 207, 207, 0.3);
    margin: 10px;
    padding: 10px;
    width: 50%;
`;

const AuthorDiv = styled.div`
    margin: 10px;
`;

const LikeDiv = styled.div`
    display: flex;
    align-items: center;
`;

const DateDiv = styled.div`
    font-size: 9pt;
    color: grey;
`;

const Avatar = styled.img`
    width: 100%;
    max-width: 100%;
    height: 100%;
`;

const AvatarWrapper = styled.div`
    width: 70px;
    height: 70px;
    border-radius: 50%;
    overflow: hidden;
`;

const CommentDiv = styled.div`
    margin-top: 10px;
    margin-left: 10%;
`;
