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
    }

    function whiteTheme() {
        document.querySelector('.myBase').classList.add('bg-white');
    
        const header = document.querySelector('.header');

        if (header.classList.contains('text-white')) {
            header.classList.remove('text-white');
            header.classList.add('text-black');
        } 

        const whiteButton = document.querySelector('.whiteButton');

        whiteButton.classList.remove('bg-white');
        whiteButton.classList.add('bg-gray-300');
     
        const linkButton = document.querySelector('.linkButton');
    }

    function darkTheme() {
        const myBase = document.querySelector('.myBase');
        
        if (myBase.classList.contains('bg-white')) {
            myBase.classList.remove('bg-white');
            myBase.classList.add('bg-black');
        }
        
        const header = document.querySelector('.header');

        if (header.classList.contains('text-black')) {
            header.classList.remove('text-black');
            header.classList.add('text-white');
        } 

        const whiteButton = document.querySelector('.whiteButton');

        if (whiteButton.classList.contains('bg-gray-300')) {
            whiteButton.classList.remove('bg-gray-300');
            whiteButton.classList.add('bg-white')
        }

        document.querySelector('.POST').classList.remove('bg-white');
        document.querySelector('.POST').classList.add('bg-black', 'text-white', 'border-2', 'border-white');

        document.querySelector('.lastPosts').classList.remove('bg-white');
        document.querySelector('.lastPosts').classList.add('bg-black', 'text-white', 'border-2', 'border-white');
        document.querySelector('.categor').classList.remove('bg-white');
        document.querySelector('.categor').classList.add('bg-black', 'text-white', 'border-2', 'border-white');
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
                  <a href="#" className="bvi-link bvi-theme-blue">К</a>
                  <a href="#" className="bvi-link bvi-theme-brown">К</a>
                  <a href="#" className="bvi-link bvi-theme-green">К</a>
              </div>
              <div className="bvi-block">
                  <div className="bvi-block-title">Картинка</div>
                  <a href="#" onClick={normalImg} className="bvi-link bvi-images-on">
                      <i className="bvi-images bvi-images-image"></i>
                  </a>
                  <a href="#" onClick={hideImg} className="bvi-link bvi-images-off">
                      <i className="bvi-images bvi-images-minus-circle"></i>
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