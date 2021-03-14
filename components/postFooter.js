import React from 'react';
import { IconContext } from 'react-icons';
import { SiKoFi, SiDevDotTo, SiTwitter, SiLinkedin } from 'react-icons/si';

const PostFooter = () => {
  return (
    <section className='post__footer'>
      <h2 className='post__footer-header center'>share</h2>
      <div className='post__footer-social'>
        <a href='https://ko-fi.com/O4O82TAZB'>
          <SiKoFi className='post__footer-social-icon' />
        </a>
        <a href='https://dev.to/timmybytes'>
          <SiDevDotTo className='post__footer-social-icon' />
        </a>
        <a href='https://twitter.com/timmybytes'>
          <SiTwitter className='post__footer-social-icon' />
        </a>
        <a href='https://www.linkedin.com/in/timmybytes'>
          <SiLinkedin className='post__footer-social-icon' />
        </a>
      </div>
    </section>
  );
};

export default PostFooter;