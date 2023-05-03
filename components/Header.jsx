import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { getCategories } from '../services';

function Header() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategories) => {
      setCategories(newCategories);
    });
  }, []);

  function showToolBar() {
    const element = document.querySelector('.toolbar');
    if (element.classList.contains('show-toolbar')) {
      element.classList.remove('show-toolbar');
    } else {
      element.classList.add('show-toolbar');
    }
  }

  return (
    <div className="container mx-auto px-10 mb-8 text-white header">
      <div className="border-b w-full inline-block border-blue-400 py-6 headerLine">
        <div className="md:float-left block">
          <Link href="/">
            <span className="cursor-pointer font-bold text-4xl">Blog App</span>
          </Link>
          <div onClick={showToolBar} className="float-left contents"><span className="ml-4 cursor-pointer inline-block whiteButton bg-white rounded-full px-4 py-1 cursor-pointer"><i className="bvi-images bvi-images-eye bvi-images-size-32"></i></span></div>
        </div>
        <div className="hidden md:float-left md:contents">
          {categories.map((category, index) => (
            <Link key={index} href={`/category/${category.slug}`}><span className="md:float-right mt-2 align-middle ml-4 font-semibold cursor-pointer categorii">{category.name}</span></Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Header;
