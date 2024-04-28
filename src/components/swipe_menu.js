import "./menu.css";
import "swiper/css";
import { Component } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

export class SwipeMenu extends Component {
  render() {
    return (
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        // onSlideChange={() => console.log('slide change')}
        // onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <div className="Card">Slide 1</div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="Card">Slide 2</div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="Card">Slide 3</div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="Card">Slide 4</div>
        </SwiperSlide>
      </Swiper>
    );

    // return (
    //   <Carousel
    //     ref={(c) => { this._carousel = c; }}
    //   />
    // )
  }
}

// function Menu() {
//   return (
//     <div className="Menu">
//       {() => {
//         for (let index = 0; index < 5; index++) {
//           return <BaseBeanProfileCard />;
//         }
//       }}
//       {/* <BaseBeanProfileCard />
//       <BaseBeanProfileCard />
//       <BaseBeanProfileCard />
//       <BaseBeanProfileCard />
//       <BaseBeanProfileCard /> */}
//     </div>
//   );
// }

// export default Menu;
