import { Link } from "react-router-dom";
import Layout from "./Layout/Layout";
import Gallery from "./Gallery";
import eggImg from "../assets/images/egg.png";
import hen from "../assets/images/hen.png";
import chick from "../assets/images/chick.png";

const Home = () => {
  const deliveryItem = [
    {
      image: `https://i1.wp.com/www.newsrangers.com/wp-content/uploads/2018/01/EGG.jpg?resize=494%2C278`,
      title: "Eggs",
      text: `Lorem, ipsum dolor sit amet consectetur adipisicing elit.
      Odit, aspernatur quae esse magnam culpa consequuntur.`,
    },
    {
      image: `https://media.istockphoto.com/photos/small-chick-on-the-hay-with-egg-shells-picture-id1306175661?b=1&k=20&m=1306175661&s=170667a&w=0&h=vYZvMsRETggtoconMepS5CK9dN_8bhCbGCxnZFrVWfc=`,
      title: "Chicks",
      text: `Lorem, ipsum dolor sit amet consectetur adipisicing elit.
      Odit, aspernatur quae esse magnam culpa consequuntur.`,
    },
    {
      image: `https://www.naturepl.com/cache/pcache2/01605635.jpg`,
      title: "Layers",
      text: `Lorem, ipsum dolor sit amet consectetur adipisicing elit.
      Odit, aspernatur quae esse magnam culpa consequuntur.`,
    },

    {
      image: `https://onlinestore.lu/wp-content/uploads/2017/11/Whole-Chicken-Per-Kg.jpg`,
      title: "Frozrn Chicken",
      text: `Lorem, ipsum dolor sit amet consectetur adipisicing elit.
      Odit, aspernatur quae esse magnam culpa consequuntur.`,
    },
  ];

  return (
    <>
      <Layout>
        <div className="hero">
          <div className="tophen"></div>
          <div className="hero-content">
            {/* <div className="hero-text_cover"> */}
            <div className="hero-text__title">Lorem ipsum dolor sit</div>
            <div className="hero-text__bold">Lorem, ipsum dolor.</div>
            <div className="hero-text__paragraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
              reprehenderit dolorem debitis necessitatibus, quas consequuntur.
              Repudiandae consequatur accusantium reiciendis sequi.
            </div>
            <div className="hero-btn">
              <p>make an order</p>
            </div>
          </div>
        </div>

        {/* chick */}
        <div className="chick">
          <div className="chicks-title">Chicks</div>
          <div className="chick-image"></div>
        </div>

        <div className="services">
          <div className="vertical-text">Quality Service</div>
          <div className="quality-points">
            <div className="point-item__cover">
              <div className="point-image">
                <ion-icon name="fitness-outline"></ion-icon>
              </div>
              <div className="point-text__cover">
                <div className="point-header">HEALTH</div>
                <div className="point-caption">Lorem, ipsum.</div>
                <div className="point-text">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatem, labore! Voluptatem, labore! Voluptatem, labore!
                </div>
              </div>
            </div>

            <div className="point-item__cover">
              <div className="point-image">
                <div>
                  <ion-icon name="color-fill-outline"></ion-icon>
                </div>
              </div>
              <div className="point-text__cover">
                <div className="point-header">FEED</div>
                <div className="point-caption">Lorem, ipsum.</div>
                <div className="point-text">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatem, labore! Voluptatem, labore! Voluptatem, labore!
                </div>
              </div>
            </div>

            <div className="point-item__cover">
              <div className="point-image">
                <ion-icon name="sunny-outline"></ion-icon>
              </div>
              <div className="point-text__cover">
                <div className="point-header">ENVIRONMENT</div>
                <div className="point-caption">Lorem, ipsum.</div>
                <div className="point-text">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatem, labore! Voluptatem, labore! Voluptatem, labore!
                </div>
              </div>
            </div>
            {/* end */}
          </div>
        </div>

        <div className="hen">
          <div className="hen-image">
            <img
              className="hen-img"
              src={`${hen}`}
              alt="layers"
              loading="lazy"
            />
          </div>
          <div className="quality">
            <div className="quality-header">Lorem ipsum</div>
            <div className="quality-suheader">Lorem, ipsum.</div>
            <div className="quality-text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure
              fuga ratione pariatur, ipsum iste voluptas sequi omnis totam
              quisquam eius.ipsum iste voluptas sequi omnis totam quisquam eius.
              ipsum iste voluptas sequi omnis totam quisquam eius.ipsum iste
              voluptas sequi omnis totam quisquam eius. ipsum iste voluptas
              sequi omnis totam quisquam eius.ipsum iste voluptas sequi omnis
              totam quisquam eius.
            </div>
            <div
              style={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div className="quality-btn">
                <p>Lorem.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="kernel">
          <div className="kernel-image__cover"></div>
          <div className="kernel-description">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
                alignItems: "center",
              }}
            >
              <div className="kernel-sub__caption">Lorem, ipsum dolor.</div>
              <div className=" kernel-title">Lorem. ipsum</div>
              <div className="kernel-text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Expedita, cupiditate. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Ipsam, perspiciatis! Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Ipsam, perspiciatis!
                perspiciatis! Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Ipsam, perspiciatis! dolor sit amet consectetur
                adipisicing elit. Ipsam, perspiciatis!
              </div>
            </div>
          </div>
        </div>

        <div className="delivery">
          <div className="deliverable-desc">
            <div className=" delivery-caption">We deliver</div>
            <div className="delivery-title">The Best Products</div>
          </div>
          <div className="deliverable-cover">
            {deliveryItem.map((e, index) => (
              <div className="deliverable-item" key={index}>
                <div
                  className="deliverable-image__cover"
                  style={{
                    background: `url(${e.image})`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                  }}
                ></div>
                <div className="deliverable-image__title">{e.title}</div>
                <div
                  style={{
                    width: "250px",
                    fontSize: "0.95rem",
                    color: "#2f434d",
                    lineHeight: "23px",
                    textAlign: "center",
                  }}
                >
                  {e.text}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Home;
