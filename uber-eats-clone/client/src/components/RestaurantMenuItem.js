import React from 'react'

const RestaurantMenuItem = ({menu}) => {

  console.log(menu, "   MENUUU HERE")
    return (
        <li className="mi-grid-item-sec">
                <div tabindex="0" className="mi-grid-item">
                  <div className="mi-grid-item2">
                    <div className="mi-grid-item3">
                      <div className="mi-grid-item-details">
                        <div className="mi-title">
                          <h4 className="mi-title-label">
                            <div className="mi-title-label2">
                              {menu.item}
                            </div>
                          </h4>
                        </div>
                        <div className="mi-item-details">
                          <div className="mi-item-details2">
                            {menu.description}
                          </div>
                        </div>
                        <div className="mi-item-price">
                          <div className="mi-item-price2">${menu.price}</div>
                          <span className="mi-item-calo">&nbsp;•&nbsp;</span>
                          <div className="mi-item-calo2">660 Cal.</div>
                        </div>
                      </div>
                      <div className="mi-item-pic">
                        <div className="lazyload-wrapper ">
                          <picture>
                            <source
                              type="image/webp"
                              srcset="https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly9kMXJhbHNvZ25qbmczNy5jbG91ZGZyb250Lm5ldC9lODEyN2M2Ny1hOTIxLTRjZWEtOTJhZi0wZDFhYjhiODE2ZDUuanBlZw=="
                            />
                            <img
                              alt="Hot Honey Chicken"
                              src="https://d1ralsognjng37.cloudfront.net/e8127c67-a921-4cea-92af-0d1ab8b816d5.jpeg"
                              aria-hidden="true"
                              className="mi-item-img"
                            />
                          </picture>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
    )
}

export default RestaurantMenuItem
