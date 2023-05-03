import React from 'react';
import Image from 'next/image';
import moment from 'moment';
import Link from 'next/link';

import { grpahCMSImageLoader } from '../util';

function PostCard({ post, id }) {
  let POST = `POST_${id} bg-white shadow-2xl rounded-lg p-0 lg:p-8 pb-12 mb-8`;
  let linkButton = `link_${id} text-white transition duration-500 ease transform hover:-translate-y-1 hover:font-bold inline-block bg-pink-600 font-medium rounded-full px-8 py-3 cursor-pointer`;
  let postCardGrayImage = `postCardGrayImage_${id}`;
  let postCardAuthorGrayImage = `postCardAuthorGrayImage_${id}`;

  return (
    <div className={POST}>
      <div className="relative overflow-hidden shadow-md pb-80 mb-6">
        <img id={postCardGrayImage} src={post.featuredImage.url} alt="" className="object-top absolute h-80 w-full object-cover  shadow-lg rounded-t-lg lg:rounded-lg" />
      </div>

      <h1 className="transition duration-700 text-center mb-8 cursor-pointer hover:text-pink-600 text-3xl font-semibold">
        <Link href={`/post/${post.slug}`}>{post.title}</Link>
      </h1>
      <div className="block lg:flex text-center items-center justify-center mb-8 w-full">
        <div className="flex items-center justify-center mb-4 lg:mb-0 w-full lg:w-auto mr-8 items-center">
          <Image
            id={postCardAuthorGrayImage}
            unoptimized
            loader={grpahCMSImageLoader}
            alt={post.author.name}
            height="30"
            width="30"
            className="align-middle rounded-full"
            src={post.author.photo.url}
          />
          <p className="inline align-middle ml-2 font-medium">{post.author.name}</p>
        </div>
        <div className="font-medium">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline mr-2 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <span className="align-middle">{moment(post.createdAt).format('MMM DD, YYYY')}</span>
        </div>
      </div>
      <p className="text-center postExcerpt font-normal px-4 lg:px-20 mb-8">
        {post.excerpt}
      </p>
      <div className="text-center">
        <Link href={`/post/${post.slug}`}>
          <span className={linkButton}>Читати далі</span>
        </Link>
      </div>
    </div>
  );
}

export default PostCard;
