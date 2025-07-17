import React from 'react';
import PostCard from '@/components/common/PostCard';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const PostsPage: React.FC = () => {
  return (
    <>
      <Header />
      <main className="p-4">
        <h1 className="text-2xl font-bold mb-4">Posts</h1>
        <PostCard title="Post Title" description="This is a sample post." />
      </main>
      <Footer />
    </>
  );
};

export default PostsPage;
