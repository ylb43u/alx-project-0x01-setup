import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-200 text-center p-4 mt-10">
      <p>&copy; {new Date().getFullYear()} My App. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
