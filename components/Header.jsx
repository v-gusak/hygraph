import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { getCategories } from '../services';

function Header() {
  const [categories, setCategories] = useState([]);
  
  const [show, setShow] = useState();

  useEffect(() => {
    getCategories().then((newCategories) => {
      setCategories(newCategories);
    });
  }, []);

  function showToolBar() {
    var element = document.querySelector(".toolbar");
      if(element.classList.contains("show-toolbar")) {
  	    element.classList.remove("show-toolbar");
      } else {
  	  element.classList.add("show-toolbar");
  }
  }

  return (
    <div className="container mx-auto px-10 mb-8">
      <div className="border-b w-full inline-block border-blue-400 py-8">
        <div className="md:float-left block">
          <Link href="/">
            <span className="cursor-pointer font-bold text-4xl text-white">Blog App</span>
          </Link>
        </div>
        <div onClick={showToolBar} className="hidden md:float-left md:contents"><span className="ml-4 cursor-pointer inline-block whiteButton rounded-full px-5 py-2 cursor-pointer"><i className="bvi-images bvi-images-eye bvi-images-size-32"></i></span></div>
        <div className="hidden md:float-left md:contents">
          {categories.map((category, index) => (
            <Link key={index} href={`/category/${category.slug}`}><span className="md:float-right mt-2 align-middle text-white ml-4 font-semibold cursor-pointer">{category.name}</span></Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Header;
