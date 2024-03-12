import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import '../../../node_modules/swiper/swiper-bundle.min.css';
import footprint from '/images/footprint.png';
import reivewDog from '/images/reivew-dog.png';
import reviewCat from '/images/review-cat.png';
import review from '/images/review.png';
import reviewDog3 from '/images/review-dog3.jpg';

function Review() {
  return (
    <>
      <section className='review mb-4 mb-md-5'>
        <div className='container'>
          <h2 className='text-center mb-4 mt-md-8'>
            <span>
              <img src={footprint} alt='before' />
            </span>
            Review
            <span>
              <img src={footprint} alt='' />{' '}
            </span>
          </h2>
          {/* <!-- 輪播set --> */}
          <Swiper
            spaceBetween={50}
            slidesPerView={1}
            navigation={{
              prevEl: '.swiper-button-prev',
              nextEl: '.swiper-button-next',
            }}
            // pagination={{ clickable: true }}
            // scrollbar={{ draggable: true }}
            effect='fade'
            className='swiper reviewSwiper'
          >
            <div className='swiper-wrapper'>
              {/* <!-- slide-1 --> */}
              <SwiperSlide className='swiper-slide'>
                <div className='row d-flex'>
                  {/* <!-- review dog&cat --> */}
                  <div className='col-12 col-md-5 d-flex flex-column p-0'>
                    {/* <!-- dog reviews --> */}
                    <div className='card mt-7 mb-1 mx-3 mx-md-0 my-md-0 py-md-4 ps-md-8'>
                      {/* <!-- 評價 --> */}
                      <div className='card-body review-cardBody'>
                        {/* <!-- 頭像 --> */}
                        <img
                          src={reivewDog}
                          className='text-center reviewPetPic'
                          alt='dogImg'
                        />
                        <h5 className='card-title fs-5 mb-0'>Beer 2yo</h5>
                        <div className='ratings mb-md-3'>
                          <div className='empty_star'>★★★★★</div>
                          <div className='full_star'>★★★★★</div>
                        </div>

                        <p className='card-text'>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Laudantium, qui cum. Necessitatibus suscipit
                          porro tempore.
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* <!-- -product info --> */}
                  <div className='col-12 col-md-7 d-flex flex-column p-0 mb-6'>
                    <div className='card pe-md-8 mt-2 text-center'>
                      <a href='#' className='review-card-hover'>
                        <img
                          src={review}
                          className='card-img-top reviewFoodPic'
                          alt='product'
                        />
                      </a>

                      <div className='card-body'>
                        <h5 className='card-title m-0'>chicken</h5>
                        <div className='w-100 text-center'></div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              {/* <!-- slide-2 --> */}
              <SwiperSlide className='swiper-slide'>
                <div className='row d-flex'>
                  {/* <!-- review dog&cat --> */}
                  <div className='col-12 col-md-5 d-flex flex-column p-0'>
                    {/* <!-- cat reviews --> */}
                    <div className='card mt-7 mb-1 mx-3 mx-md-0 my-md-0 py-md-4 ps-md-8'>
                      {/* <!-- 評價 --> */}
                      <div className='card-body p-5 review-cardBody'>
                        {/* <!-- 頭像 --> */}
                        <img
                          src={reviewCat}
                          className='text-center reviewPetPic pt-3 pb-2'
                          alt='dogImg'
                        />
                        <h5 className='card-title fs-5 mb-0'>Beer・2yo</h5>
                        <div className='ratings mb-md-3'>
                          <div className='empty_star'>★★★★★</div>
                          <div className='full_star'>★★★★★</div>
                        </div>

                        <p className='card-text'>
                          Lorem, ipsum dolor sit amet consectetur adipisicing
                          elit. Laborum omnis deserunt cum sit deleniti
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* <!-- -product --> */}
                  <div className='col-12 col-md-7 d-flex flex-column p-0 mb-6'>
                    <div className='card pe-md-8 mt-2 text-center'>
                      <a href='#' className='review-card-hover'>
                        <img
                          src={review}
                          className='card-img-top reviewFoodPic'
                          alt='product'
                        />
                      </a>

                      <div className='card-body'>
                        <h5 className='card-title m-0'>chicken</h5>
                        <div className='w-100 text-center'>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Vitae voluptate deleniti qui eius at placeat
                          ipsum maxime, esse adipisci odit et quibusdam facilis
                          labore id? Aspernatur beatae corrupti iusto eveniet!
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              {/* <!-- slide-3 --> */}
              <SwiperSlide className='swiper-slide'>
                <div className='row d-flex'>
                  {/* <!-- review dog&cat --> */}
                  <div className='col-12 col-md-5 d-flex flex-column p-0'>
                    {/* <!-- dog reviews --> */}
                    <div className='card mt-7 mb-1 mx-3 mx-md-0 my-md-0 py-md-4 ps-md-8'>
                      {/* <!-- 評價 --> */}
                      <div className='card-body p-5 review-cardBody'>
                        {/* <!-- 頭像 --> */}
                        <img
                          src={reviewDog3}
                          className='text-center reviewPetPic pt-3 pb-2'
                          alt='dogImg'
                        />
                        <h5 className='card-title fs-5 mb-0'>NiNi・2yo</h5>
                        <div className='ratings mb-md-3'>
                          <div className='empty_star'>★★★★★</div>
                          <div className='full_star'>★★★★★</div>
                        </div>

                        <p className='card-text'>
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit. Minima assumenda, totam corporis rem quos
                          voluptatibus.
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* <!-- -product --> */}
                  <div className='col-12 col-md-7 d-flex flex-column p-0 mb-6'>
                    <div className='card pe-md-8 mt-2 text-center'>
                      <a href='#' className='review-card-hover'>
                        <img
                          src={review}
                          className='card-img-top reviewFoodPic'
                          alt='product'
                        />
                      </a>

                      <div className='card-body'>
                        <h5 className='card-title m-0'>beef</h5>
                        <div className='w-100 text-center'></div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </div>
          </Swiper>
          {/* <!-- 手機 swiper-control左右按鈕和 pagination --> */}
          <div className='swiper-control d-flex justify-content-center align-items-center '>
            <span className='swiper-button-prev  me-4'></span>
            <div className='swiper-pagination swiper-pagination-bullets gap-2'></div>
            <span className='swiper-button-next  ms-4'></span>
          </div>
        </div>
      </section>

      {/* <!-- -------end phone of review------- --> */}
    </>
  );
}

export default Review;
