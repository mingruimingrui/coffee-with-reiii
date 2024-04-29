import { Component } from "react";
import { BEAN_INFOS } from "../data/beans";
import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, Keyboard, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/grid";
import "swiper/css/keyboard";
import "swiper/css/pagination";
import "./menu.css";
import { MenuCard } from "./menu_card";

const MIN_CARD_WIDTH = 350;

export class Menu extends Component {
  constructor(props) {
    super(props);

    const isDesktop = this.calcIsDesktop();
    const slidesPerView = isDesktop ? this.calcSlidesPerView() : 1;
    this.state = {
      isDesktop: isDesktop,
      slidesPerView: slidesPerView,
    };
  }

  calcIsDesktop() {
    return window.innerWidth > 768;
  }

  calcSlidesPerView() {
    return Math.max(1, Math.floor(window.innerWidth / MIN_CARD_WIDTH));
  }

  handleResize() {
    const isDesktop = this.calcIsDesktop();
    const slidesPerView = isDesktop ? this.calcSlidesPerView() : 1;
    this.setState({
      isDesktop: isDesktop,
      slidesPerView: slidesPerView,
    });
  }

  renderBasic() {
    let cards = BEAN_INFOS.map((info) => (
      <div className="MenuCard">
        <h3>{info.title}</h3>
        <hr />
        <p>
          <span className="">Tasting Notes:</span>{" "}
          <span className="font-bold">{info.tastingNotes}</span>
        </p>
        <p>
          Origin: {info.origin} | Varietal: {info.varietal} | Processing:{" "}
          {info.processing}
        </p>
        <p>
          Roaster: {info.roaster} | Roast Level: {info.roastLevel}
        </p>
      </div>
    ));

    return <div className="Menu">{cards}</div>;
  }

  renderSwiper() {
    // const numRows = this.state.isDesktop ? Math.ceil(BEAN_INFOS.length / this.state.slidesPerView) : 1;
    // const numRows = 1;

    let cards = BEAN_INFOS.map((info, idx) => {
      return (
        <SwiperSlide key={info.title}>
          <MenuCard beanInfo={info} />
        </SwiperSlide>
      );
    });

    let nRows = 1;
    if (this.state.isDesktop) {
      nRows = Math.ceil(BEAN_INFOS.length / this.state.slidesPerView);
    }

    return (
      <div className="Menu">
        <h3>Coffee Offerings</h3>
        <hr />
        <Swiper
          modules={[Grid, Keyboard, Pagination]}
          slidesPerView={this.state.slidesPerView}
          pagination={{ clickable: true }}
          loop={true}
          grid={{ fill: "row", rows: nRows }}
          keyboard={{ enabled: true }}
          onResize={() => this.handleResize()}
        >
          {cards}
        </Swiper>
      </div>
    );
  }

  render() {
    // return this.renderBasic();
    return this.renderSwiper();
  }
}
