import React from 'react'

const MainFrameGridBody = ({restaurant}) => {
  console.log(restaurant, " inside Grid")
    return (
        <div className="main-frame-grid">
          <div className="main-frame-grid2">
            <a href="/store/mcdonalds-609-market-st/4YpL0wYAQ8mfcHwQq0aaKA">
              <h3 className="mf-grid-name">{restaurant.name}</h3>
            </a>
            <div className="mf-grid-contents">
              <div className="mf-grid-contents2">
                <div className="mf-grid-img">
                  <div className="mf-grid-img2">
                    <picture>
                      <img
                        alt
                        role="presentation"
                        src="assets/content-images/mcd_test.webp"
                        srcSet=""
                        sizes="25vw"
                        className="grid-img-src"
                      ></img>
                    </picture>
                  </div>
                </div>
                <div className="mf-grid-label">
                  <div className="mf-grid-label-name">
                    <div className="mf-grid-label-name2">
                      {restaurant.name }
                      {/* <div className="hs4"></div>  */}
                      <span className="mf-grid-label-des">
                      &nbsp; ({restaurant.address})&nbsp;
                      </span>
                    </div>
                    <div aria-hidden="true" className="mf-grid-ratings">
                      {restaurant.rating}
                    </div>
                  </div>
                  <div className="mf-grid-label-details">
                    <div className="ticket-img">
                      <span className="ticket-img2">
                        <div className="ticket-img3">
                          <span className="ticket-h2">
                            <span className="ticket-content">
                              <img
                                alt=""
                                role="presentation"
                                src="https://dkl8of78aprwd.cloudfront.net/ticket@3x.png"
                                width="14"
                                height="14"
                              />
                            </span>
                          </span>
                        </div>
                      </span>
                    </div>
                    <span className="star">&nbsp;•&nbsp;</span>
                    <div className="grid-label-del-fee">
                      <span className="grid-label-del-fee-span">
                        <div className="grid-label-del-fee2">
                          <span className="grid-label-del-fee-content">
                            ${restaurant.delivery_fee} Delivery Fee
                          </span>
                        </div>
                      </span>
                    </div>
                    <span className="star">&nbsp;•&nbsp;</span>
                    <div className="grid-label-time">
                      <span className="grid-label-del-time-span">
                        <div className="grid-label-del-time-content">
                          20–30 min
                        </div>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    )
}

export default MainFrameGridBody
