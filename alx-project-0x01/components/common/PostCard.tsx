import React from 'react';

interface PostCardProps {
  title: string;
  description: string;
}

const PostCard: React.FC<PostCardProps> = ({ title, description }) => {
  return (
    <div className="border p-4 rounded shadow">
      <h3 className="text-xl font-bold">{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default PostCard;
