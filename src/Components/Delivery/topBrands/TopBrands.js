import React from "react";
import "./topBrands.css";
import NextArrow from "../../common/carousel/NextArrow";
import PrevArrow from "../../common/carousel/PrevArrow";
import Slider from "react-slick";

const topBrandsList = [
  {
    id: 1,
    time: "20 min",
    title: "Domino's Pizza",
    cover:
      "https://b.zmtcdn.com/data/brand_creatives/logos/1a985408ca7ad8fd097f2c47db9c5cb6_1611252598.png?output-format=webp",
  },
  {
    id: 2,
    time: "36 min",
    title: "Empire Restaurant",
    cover:
      "https://b.zmtcdn.com/data/brand_creatives/logos/7a7904eff687a7456599074a4e7d2335_1617875100.png?output-format=webp",
  },
  {
    id: 3,
    title: "Burger King",
    time: "33 min",
    cover:
      "https://b.zmtcdn.com/data/brand_creatives/logos/6a11fd0f30c9fd9ceaff2f5b21f61d23_1617187721.png?output-format=webp",
  },
  {
    id: 4,
    time: "23 min",
    title: "Sri Udupi Food Hub",
    cover:
      "https://b.zmtcdn.com/data/brand_creatives/logos/d48a032833fc37de75ad6d0883da4331_1629441554.png?output-format=webp",
  },
  {
    id: 5,
    time: " 17 min",
    title: "KFC",
    cover:
      "https://b.zmtcdn.com/data/brand_creatives/logos/80c09d718acddee05a655eb378bb442f_1617875125.png?output-format=webp",
  },
  {
    id: 6,
    time: "30 min",
    title: "A2B - Adyar Ananda Bhavan",
    cover:
      "https://b.zmtcdn.com/data/brand_creatives/logos/5ef673b417cd25b5a04176ce341d425a_1630505477.png?output-format=webp",
  },
  {
    id: 7,
    time: "16 min",
    title: "Subway",
    cover:
      "https://b.zmtcdn.com/data/brand_creatives/logos/9302c59eca94abbee01aec9acf9305f6_1676520725.png?output-format=webp",
  },
  {
    id: 8,
    time: "23 min",
    title: "California Burrito",
    cover:
      "https://b.zmtcdn.com/data/brand_creatives/logos/b9ffb4c181468da1f2b0eebd9ba70415_1643780686.png?output-format=webp",
  },
  {
    id: 9,
    title: "EatFit",
    time: "26 min",
    cover:
      "https://b.zmtcdn.com/data/brand_creatives/logos/acc68e452e5e8ea16d56292838cd0056_1659429766.png?output-format=webp",
  },
];

const settings = {
  infinite: false,
  slidesToShow: 4,
  slidesToScroll: 1,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
};

const TopBrands = () => {
  return (
    <>
      <div className="top-brands max-width">
        <div className="collection-title">Top brands for you</div>
        <Slider {...settings}>
          {topBrandsList.map((list) => {
            return (
              <div key={list.id}>
                <div className="top-brands-cover">
                  <div className="top-brands-image-cover">
                    <img
                      src={list.cover}
                      alt={list.title}
                      className="top-brands-item-image"
                    />
                  </div>
                  <div className="top-brands-title">{list.title}</div>
                  <div className="top-brands-timeTaken">{list.time}</div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </>
  );
};

export default TopBrands;
