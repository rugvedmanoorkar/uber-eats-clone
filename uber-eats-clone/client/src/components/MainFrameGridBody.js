import React from 'react'

const MainFrameGridBody = () => {
    return (
        <div className="main-frame-grid">
          <div className="main-frame-grid2">
            <a href="/store/mcdonalds-609-market-st/4YpL0wYAQ8mfcHwQq0aaKA">
              <h3 className="mf-grid-name">McDonald's®</h3>
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
                      McDonald's®
                      {/* <div className="hs4"></div>  */}
                      <span className="mf-grid-label-des">
                        A top rated restaurant with 4.6 out of 5 stars based on
                        more than 200 reviews.
                      </span>
                    </div>
                    <div aria-hidden="true" className="mf-grid-ratings">
                      4.6
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
                            $2.99 Delivery Fee
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
