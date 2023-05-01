import React from 'react';

function Toolbar() {
    function normalLetterSpacing() {
        document.getElementById('__next').style.letterSpacing = 'normal';
    }

    function middleLetterSpacing() {
        document.getElementById('__next').style.letterSpacing = '2px';
    }

    function bigLetterSpacing() {
        document.getElementById('__next').style.letterSpacing = '4px';
    }

    function normalLineHeight() {
        document.getElementById('__next').style.lineHeight = 'normal';
    }

    function middleLineHeight() {
        document.getElementById('__next').style.lineHeight = '200%';
    }

    function hightLineHeight() {
        document.getElementById('__next').style.lineHeight = '250%';
    }

    function withNotches() {
        document.getElementById('__next').style.fontFamily = 'Roboto Slab, serif';
    }

    function withoutNotches() {
        document.getElementById('__next').style.fontFamily = 'Montserrat, sans-serif';
    }

    function grayScale() {
        document.getElementById('mainPart').style.filter = 'grayscale(100%)';
    }

    function normalImg() {
        document.getElementById('mainPart').style.filter = 'initial';
        
    }

    function hideImg() {
        // document.getElementById('IMAGE').style.display = 'none';
        var images = document.getElementsByTagName("img"); // знайти всі зображення на сторінці
        for (var i = 0; i < images.length; i++) {
            images[i].style.display = "none"; // приховати кожне зображення
        }
    }

    var  theCount = 12;

    function increaseFontSize() {
        theCount++;
        document.getElementById('mainPart').setAttribute('style', `font-size: ${theCount}pt`);
    }

    function decreaseFontSize() {
        theCount--;
        document.getElementById('mainPart').setAttribute('style', `font-size: ${theCount}pt`);
    }

    function reset() {
        document.getElementById('mainPart').style.fontSize = '12pt';
        document.getElementById('mainPart').style.filter = 'initial';
        document.getElementById('__next').style.lineHeight = 'normal';
        document.getElementById('__next').style.letterSpacing = 'normal';
        document.getElementById('__next').style.fontFamily = 'Montserrat, sans-serif';

        // const myBase = document.querySelector('.myBase');
        
        // if (myBase.classList.contains('bg-white')) {
        //     myBase.classList.remove('bg-white');
        //     myBase.classList.add('bg-inherit')
        // } else if (myBase.classList.contains('bg-black')) {
        //     myBase.classList.remove('bg-black');
        //     myBase.classList.add('bg-inherit')
        // }
    }

    function whiteTheme() {
        const myBase = document.querySelector('.myBase');
        
        if (myBase.classList.contains('bg-black')) {
            myBase.classList.remove('bg-black');
            myBase.classList.add('bg-white');
        } else if (myBase.classList.contains('bg-blue-300')) {
            myBase.classList.add('bg-white');
            myBase.classList.remove('bg-blue-300');
        } else {
            myBase.classList.add('bg-white');
        }
    
        const header = document.querySelector('.header');

        if (header.classList.contains('text-white')) {
            header.classList.remove('text-white');
            header.classList.add('text-black');
        } 

        const lastPostsLine = document.querySelector('.lastPostsLine');
        const categorLine = document.querySelector('.categorLine');

        if (lastPostsLine.classList.contains('border-white')) {
            lastPostsLine.classList.remove('border-white');
            lastPostsLine.classList.add('border-black');
        }

        if (categorLine.classList.contains('border-white')) {
            categorLine.classList.remove('border-white');
            categorLine.classList.add('border-black');
        }

        const whiteButton = document.querySelector('.whiteButton');

        if (whiteButton.classList.contains('bg-white')) {
            whiteButton.classList.add('bg-gray-300');
            whiteButton.classList.remove('bg-white');
        } else if (whiteButton.classList.contains('bg-black')) {
            whiteButton.classList.remove('bg-black');
            whiteButton.classList.add('bg-gray-300');
        } else if (whiteButton.classList.contains('bg-blue-400')) {
            whiteButton.classList.remove('bg-blue-400');
            whiteButton.classList.add('bg-gray-300');
        }

        let POST;

        for (let index = 0; index < 10; index++) {
            POST = document.querySelector(`.POST_${index}`);

            if (POST.classList.contains('bg-black')) {
                POST.classList.remove('bg-black', 'text-white', 'border-2', 'border-white');
                POST.classList.add('bg-white', 'text-black');
            } else if (POST.classList.contains('bg-blue-400')) {
                POST.classList.remove('bg-blue-400', 'text-blue-950');
                POST.classList.add('bg-white', 'text-black');
            }
        }

        const lastPosts = document.querySelector('.lastPosts');
        const categor = document.querySelector('.categor');

        if (lastPosts.classList.contains('bg-black')) {
            lastPosts.classList.remove('bg-black', 'text-white', 'border-2', 'border-white');
            lastPosts.classList.add('bg-white', 'text-black');
        } else if (lastPosts.classList.contains('bg-blue-400')) {
            lastPosts.classList.remove('bg-blue-400', 'text-blue-950');
            lastPosts.classList.add('bg-white', 'text-black');
        }

        if (categor.classList.contains('bg-black')) {
            categor.classList.remove('bg-black', 'text-white', 'border-2', 'border-white');
            categor.classList.add('bg-white', 'text-black');
        } else if (categor.classList.contains('bg-blue-400')) {
            categor.classList.remove('bg-blue-400', 'text-blue-950');
            categor.classList.add('bg-white', 'text-black');
        }

        const headerLine = document.querySelector('.headerLine');

        if (headerLine.classList.contains('border-blue-400')) {
            headerLine.classList.remove('border-blue-400');
            headerLine.classList.add('border-black');
        } else if (headerLine.classList.contains('border-white')) {
            headerLine.classList.remove('border-white');
            headerLine.classList.add('border-black');
        }
    }

    function darkTheme() {
        const myBase = document.querySelector('.myBase');
        
        if (myBase.classList.contains('bg-white')) {
            myBase.classList.remove('bg-white');
            myBase.classList.add('bg-black');
        } else if (myBase.classList.contains('bg-blue-300')) {
            myBase.classList.remove('bg-blue-300');
            myBase.classList.add('bg-black');
        }
        
        const header = document.querySelector('.header');

        if (header.classList.contains('text-black')) {
            header.classList.remove('text-black');
            header.classList.add('text-white');
        }  else if (header.classList.contains('text-blue-950')) {
            header.classList.remove('text-blue-950');
            header.classList.add('text-white');
        }

        const whiteButton = document.querySelector('.whiteButton');

        if (whiteButton.classList.contains('bg-gray-300')) {
            whiteButton.classList.remove('bg-gray-300');
            whiteButton.classList.add('bg-white')
        } else if (whiteButton.classList.contains('bg-blue-400')) {
            whiteButton.classList.remove('bg-blue-400');
            whiteButton.classList.add('bg-white')
        }

        const headerLine = document.querySelector('.headerLine');
        const lastPostsLine = document.querySelector('.lastPostsLine');
        const categorLine = document.querySelector('.categorLine');

        if (headerLine.classList.contains('border-black')) {
            headerLine.classList.remove('border-black');
            headerLine.classList.add('border-white');
        } else if (headerLine.classList.contains('border-black')) {
            headerLine.classList.remove('border-black');
            headerLine.classList.add('border-white'); 
        }

        if (lastPostsLine.classList.contains('border-black')) {
            lastPostsLine.classList.remove('border-black');
            lastPostsLine.classList.add('border-white');
        }

        if (categorLine.classList.contains('border-black')) {
            categorLine.classList.remove('border-black');
            categorLine.classList.add('border-white');
        }

        let POST;

        for (let index = 0; index < 10; index++) {
            POST = document.querySelector(`.POST_${index}`);

            if (POST.classList.contains('bg-white')) {
                POST.classList.remove('bg-white', 'text-black');
                POST.classList.add('bg-black', 'text-white', 'border-2', 'border-white');
            } else if (POST.classList.contains('bg-blue-400')) {
                POST.classList.remove('bg-blue-400', 'text-blue-950');
                POST.classList.add('bg-black', 'text-white', 'border-2', 'border-white');
            }
        }

        const lastPosts = document.querySelector('.lastPosts');
        const categor = document.querySelector('.categor');

        if (lastPosts.classList.contains('bg-white')) {
            lastPosts.classList.remove('bg-white', 'text-black');
            lastPosts.classList.add('bg-black', 'text-white', 'border-2', 'border-white');
        } else if (lastPosts.classList.contains('bg-blue-400')) {
            lastPosts.classList.remove('bg-blue-400', 'text-blue-950');
            lastPosts.classList.add('bg-black', 'text-white', 'border-2', 'border-white');
        }

        if (categor.classList.contains('bg-white')) {
            categor.classList.remove('bg-white', 'text-black');
            categor.classList.add('bg-black', 'text-white', 'border-2', 'border-white');
        } else if (categor.classList.contains('bg-blue-400')) {
            categor.classList.remove('bg-blue-400', 'text-blue-950');
            categor.classList.add('bg-black', 'text-white', 'border-2', 'border-white');
        }
    }

    function blueTheme() {
        const myBase = document.querySelector('.myBase');
        
        if (myBase.classList.contains('bg-black')) {
            myBase.classList.remove('bg-black');
            myBase.classList.add('bg-blue-300');
        } else if (myBase.classList.contains('bg-white')) {
            myBase.classList.remove('bg-white');
            myBase.classList.add('bg-blue-300');
        }
        
        const header = document.querySelector('.header');

        if (header.classList.contains('text-white')) {
            header.classList.remove('text-white');
            header.classList.add('text-blue-950');
        } else if (myBase.classList.contains('text-black')) {
            header.classList.remove('text-black');
            header.classList.add('text-blue-950');
        }

        const whiteButton = document.querySelector('.whiteButton');

        if (whiteButton.classList.contains('bg-white')) {
            whiteButton.classList.remove('bg-white');
            whiteButton.classList.add('bg-blue-400')
        } else if (whiteButton.classList.contains('bg-gray-300')) {
            whiteButton.classList.remove('bg-gray-300');
            whiteButton.classList.add('bg-blue-400')
        }

        const headerLine = document.querySelector('.headerLine');
        const lastPostsLine = document.querySelector('.lastPostsLine');
        const categorLine = document.querySelector('.categorLine');

        if (headerLine.classList.contains('border-white')) {
            headerLine.classList.remove('border-white');
            headerLine.classList.add('border-black');
        }

        if (lastPostsLine.classList.contains('border-gray')) {
            lastPostsLine.classList.remove('border-gray');
            lastPostsLine.classList.add('border-black');
        } else if (lastPostsLine.classList.contains('border-white')) {
            lastPostsLine.classList.remove('border-white');
            lastPostsLine.classList.add('border-black');
        }

        if (categorLine.classList.contains('border-gray')) {
            categorLine.classList.remove('border-gray');
            categorLine.classList.add('border-black');
        } else if (categorLine.classList.contains('border-white')) {
            categorLine.classList.remove('border-white');
            categorLine.classList.add('border-black');
        }

        let POST;

        for (let index = 0; index < 10; index++) {
            POST = document.querySelector(`.POST_${index}`);

            if (POST.classList.contains('bg-black')) {
                POST.classList.remove('bg-black', 'text-white', 'border-2', 'border-white');
                POST.classList.add('bg-blue-400', 'text-blue-950');
            } else if (POST.classList.contains('bg-white')) {
                POST.classList.remove('bg-white', 'text-black');
                POST.classList.add('bg-blue-400', 'text-blue-950');
            }
        }

        const lastPosts = document.querySelector('.lastPosts');
        const categor = document.querySelector('.categor');

        if (lastPosts.classList.contains('bg-black')) {
            lastPosts.classList.remove('bg-black', 'text-white', 'border-2', 'border-white');
            lastPosts.classList.add('bg-blue-400', 'text-blue-950');
        } else if (lastPosts.classList.contains('bg-white')) {
            lastPosts.classList.remove('bg-white', 'text-black');
            lastPosts.classList.add('bg-blue-400', 'text-blue-950');
        }

        if (categor.classList.contains('bg-black')) {
            categor.classList.remove('bg-black', 'text-white', 'border-2', 'border-white');
            categor.classList.add('bg-blue-400', 'text-blue-950');
        } else if (categor.classList.contains('bg-white')) {
            categor.classList.remove('bg-white', 'text-black');
            categor.classList.add('bg-blue-400', 'text-blue-950');
        }
    }

  return (
    <div className="bvi-panel toolbar">
          <div className="bvi-blocks bvi-block-center">
              <div className="bvi-block">
                  <div className="bvi-block-title">Розмір шрифту</div>
                  <a href="#" onClick={decreaseFontSize} className="bvi-link bvi-fontSize-minus">А-</a>
                  <a href="#" onClick={increaseFontSize} className="bvi-link bvi-fontSize-plus">А+</a>
              </div>
              <div className="bvi-block">
                  <div className="bvi-block-title">Колір сайту</div>
                  <a href="#" onClick={whiteTheme} className="bvi-link bvi-theme-white">К</a>
                  <a href="#" onClick={darkTheme} className="bvi-link bvi-theme-black">К</a>
                  <a href="#" onClick={blueTheme} className="bvi-link bvi-theme-blue">К</a>
                  <a href="#" className="bvi-link bvi-theme-brown">К</a>
                  <a href="#" className="bvi-link bvi-theme-green">К</a>
              </div>
              <div className="bvi-block">
                  <div className="bvi-block-title">Картинка</div>
                  <a href="#" onClick={normalImg} className="bvi-link bvi-images-on">
                      <i className="bvi-images bvi-images-image"></i>
                  </a>
                  <a href="#" onClick={grayScale} className="bvi-link bvi-images-grayscale">
                      <i className="bvi-images bvi-images-adjust"></i>
                  </a>
              </div>
              <div className="bvi-block">
                  <div className="bvi-block-title">Скидання</div>
                  <a href="#" onClick={reset} className="bvi-link bvi-reset">Скинути налаштування</a>
              </div>
          </div>
        <div>
            <div className="bvi-blocks bvi-block-center">
              <div className="bvi-block">
                                  <div className="bvi-block-title">Міжлітерна відстань</div>
                                  <a href='#' onClick={normalLetterSpacing} className="bvi-link bvi-letter-spacing-normal active">Стандартна</a>
                                  <a href='#' onClick={middleLetterSpacing} className="bvi-link bvi-letter-spacing-average">Середня</a>
                                  <a href='#' onClick={bigLetterSpacing} className="bvi-link bvi-letter-spacing-big">Велика</a>
              </div>
                              <div className="bvi-block">
                                  <div className="bvi-block-title">Міжрядкова відстань</div>
                                  <a href='#' onClick={normalLineHeight} className="bvi-link bvi-line-height-normal active">Стандартна</a>
                                  <a href='#' onClick={middleLineHeight} className="bvi-link bvi-line-height-average">Середня</a>
                                  <a href='#' onClick={hightLineHeight} className="bvi-link bvi-line-height-big">Велика</a>
                              </div>
                              <div className="bvi-block">
                                  <div className="bvi-block-title">Шрифт</div>
                                  <a href="#" onClick={withoutNotches} className="bvi-link bvi-font-family-arial active">Без зарубок</a>
                                  <a href="#" onClick={withNotches} className="bvi-link bvi-font-family-times">Із зарубками</a>
                              </div>
            </div>
        </div>
    </div>
  );
}

export default Toolbar;