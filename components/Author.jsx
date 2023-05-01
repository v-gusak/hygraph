import React from 'react';
import Image from 'next/image';

import { grpahCMSImageLoader } from '../util';

function Author({ author }) {
  return (
    <div className="text-center mt-15 mb-8 p-12 relative rounded-lg bg-black bg-opacity-20" id="author">
      <div className="inner">
        <Image
          unoptimized
          loader={grpahCMSImageLoader}
          alt={author.name}
          height="150"
          width="150"
          className="align-middle rounded-full"
          src={author.photo.url}
        />
      </div>
      <h3 className="mt-4 mb-4 font-bold">{author.name}</h3>
      <p className="text-ls">{author.bio}</p>
    </div>
  );
}

export default Author;