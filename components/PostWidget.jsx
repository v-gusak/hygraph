import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import moment from 'moment';
import Link from 'next/link';

import { grpahCMSImageLoader } from '../util';
import { getSimilarPosts, getRecentPosts } from '../services';

function PostWidget({ categories, slug }) {
  const [relatedPosts, setRelatedPosts] = useState([]);

  useEffect(() => {
    if (slug) {
      getSimilarPosts(categories, slug).then((result) => {
        setRelatedPosts(result);
      });
    } else {
      getRecentPosts().then((result) => {
        setRelatedPosts(result);
      });
    }
  }, [slug]);

  return (
    <div className="bg-white shadow-2xl rounded-lg p-8 pb-4 mb-8 lastPosts">
      <h3 className="mb-8 font-semibold border-b pb-4 lastPostsLine border-gray">{slug ? 'Пов’язані публікації' : 'Останні публікації'}</h3>
      {relatedPosts.map((post, index) => (
        <Link href={`/post/${post.slug}`} className="text-md" key={index} id={`lastPosts_${index}`}>
          <div key={index} className="flex items-center w-full mb-4">
            <div className="w-16 flex-none">
              <Image
                loader={grpahCMSImageLoader}
                alt={post.title}
                height="60"
                width="60"
                unoptimized
                className="align-middle rounded-full"
                src={post.featuredImage.url}
              />
            </div>
            <div className="flex-grow ml-4">
              <p className="font-xs opacity-50">{moment(post.createdAt).format('MMM DD, YYYY')}</p>
              {post.title}
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default PostWidget;
