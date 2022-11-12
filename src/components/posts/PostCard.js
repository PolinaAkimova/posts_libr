import React from 'react';
import cl from "./Post.module.css"

const PostCard = ({children, callback}) => {
  return (
    <div className={cl.post} onClick={callback}>
      {children}
    </div>
  );
};

export default PostCard;