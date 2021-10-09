import Layout from "./Layout/Layout";
import Title from "./Title";

const About = () => {
  return (
    <>
      <Layout>
        <div className="about">
          <Title page="About" />

          <div className="about-farm">
            <div className="about-farm__desc">
              <div className="about-farm__title">Lorem, ipsum dolor.</div>
              <div className="about-farm__caption">Lorem, ipsum.</div>
              <div className="about-farm__text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor,
                magni. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Iure, dolor vero obcaecati corporis laboriosam rem excepturi
                aperiam qui neque dolore.
              </div>
            </div>
            <div className="farmer-image__cover">
              <div className="farmers-desc">
                <div className="farmers-title">Lorem, ipsum.</div>
                <div className="farmers-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Laborum, necessitatibus.
                </div>
              </div>
              <div className="farmer-image"></div>
            </div>
          </div>

          <div className="about-special">
            <div className="core-values">Our values</div>
            {[1, 2, 3].map((e, index) => (
              <div className="special-item" key={index}>
                <div className="special-title">Lorem, ipsum.</div>
                <div className="special-caption">
                  Lorem, ipsum dolor. conect
                </div>
                <div className="special-text">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Recusandae beatae aut non, error asperiores corrupti numquam
                  porro culpa nam ipsa saepe consequatur quam! Nihil quia
                  quisquam dolores exercitationem temporibus eius.
                </div>
              </div>
            ))}
          </div>
        </div>
      </Layout>
    </>
  );
};

export default About;
