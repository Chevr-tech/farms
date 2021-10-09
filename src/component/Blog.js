import Layout from "./Layout/Layout";
import Title from "./Title";
import { Container, Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
const Blog = () => {
  return (
    <Layout>
      <div className="blog">
        <Title page="Blog" />
        <div className="blog-details">
          <div className="blog-title">Lorem, ipsum </div>
          <div className="blog-caption">Lorem, ipsum dolor.</div>
          <div className="blog-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate,
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi
            facere necessitatibus corrupti iste eum a, nostrum totam repellat
            fugit dolore! pariatur!
          </div>
        </div>

        <Container
          maxWidth="lg"
          style={{
            marginBottom: "50px",
            position: "relative",
          }}
        >
          <div className="vertical-blog">News-room</div>
          <Grid container direction="row" justifyContent="center">
            {[1, 2, 3, 4].map((e, index) => (
              <Grid
                item
                xs={12}
                sm={9}
                md={4}
                lg={4}
                xl={4}
                style={{
                  margin: "20px",
                }}
                key={index}
              >
                <div className="blog-image"></div>
                <div className="blog-top__cover">
                  <div className="blog-date">21st Septmeber 2021</div>
                  <div className="blog-author">James</div>
                </div>
                <Link to="/" className="blog-post_text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
                  nostrum sapiente tempore esse voluptatibus. Aut minima quidem
                  dicta explicabo architecto?
                </Link>
              </Grid>
            ))}
          </Grid>
        </Container>
      </div>
    </Layout>
  );
};

export default Blog;
