import React from 'react';

function Toolbar() {

  return (
  <div className="bvi-panel toolbar" >
          <div className="bvi-blocks bvi-block-center">
              <div className="bvi-block">
                  <div className="bvi-block-title">Розмір шрифту</div>
                  <a className="bvi-link bvi-fontSize-minus">А-</a>
                  <a className="bvi-link bvi-fontSize-plus">А+</a>
              </div>
              <div className="bvi-block">
                  <div className="bvi-block-title">Колір сайту</div>
                  <a href="#" className="bvi-link bvi-theme-white active">К</a>
                  <a href="#" className="bvi-link bvi-theme-black">К</a>
                  <a href="#" className="bvi-link bvi-theme-blue">К</a>
                  <a href="#" className="bvi-link bvi-theme-brown">К</a>
                  <a href="#" className="bvi-link bvi-theme-green">К</a>
              </div>
              <div className="bvi-block">
                  <div className="bvi-block-title">Картинка</div>
                  <a href="#" className="bvi-link bvi-images-on">
                      <i className="bvi-images bvi-images-image"></i>
                  </a>
                  <a href="#" className="bvi-link bvi-images-off">
                      <i className="bvi-images bvi-images-minus-circle"></i>
                  </a>
                  <a href="#" className="bvi-link bvi-images-grayscale">
                      <i className="bvi-images bvi-images-adjust"></i>
                  </a>
              </div>
              <div className="bvi-block">
                  <div className="bvi-block-title">Скидання</div>
                  <a href="#" className="bvi-link bvi-reset">Скинути налаштування</a>
              </div>
          </div>
          <div>
            <div className="bvi-blocks bvi-block-center">
              <div className="bvi-block">
                                  <div className="bvi-block-title">Міжлітерна відстань</div>
                                  <a href="#" className="bvi-link bvi-letter-spacing-normal active">Стандартна</a>
                                  <a href="#" className="bvi-link bvi-letter-spacing-average">Середня</a>
                                  <a href="#" className="bvi-link bvi-letter-spacing-big">Велика</a>
              </div>
                              <div className="bvi-block">
                                  <div className="bvi-block-title">Міжрядкова відстань</div>
                                  <a href="#" className="bvi-link bvi-line-height-normal active">Стандартна</a>
                                  <a href="#" className="bvi-link bvi-line-height-average">Середня</a>
                                  <a href="#" className="bvi-link bvi-line-height-big">Велика</a>
                              </div>
                              <div className="bvi-block">
                                  <div className="bvi-block-title">Шрифт</div>
                                  <a href="#" className="bvi-link bvi-font-family-arial active">Без зарубок</a>
                                  <a href="#" className="bvi-link bvi-font-family-times">Із зарубками</a>
                              </div>
                              <div className="bvi-block">
                                  <div className="bvi-block-title">Вбудовані елементи (відео, карти тощо)</div>
                                  <a href="#" className="bvi-link bvi-built-elements-on">Увімкнути</a>
                                  <a href="#" className="bvi-link bvi-built-elements-off active">Вимкнути</a>
                              </div>
            </div>
            <div className="bvi-blocks bvi-block-center">
                              <a href="" className="bvi-copyright" target="_blank"></a>
            </div>
            </div>
      </div>
  );
}

export default Toolbar;