import { Container, Image } from "react-bootstrap";
import Banner from "../components/Banner";
import Meta from "../components/Meta";
import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox";

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:8000/api/gallery/");
  const data = await res.json();

  return {
    props: { cakes: data },
  };
};

const gallery = ({ cakes }) => {
  return (
    <div id="gallery">
      <Meta title="Cakes & More By Jazmyn | Gallery" />
      <Banner title="Gallery" />
      <Container>
        <SimpleReactLightbox>
          <SRLWrapper>
            <div className="gallery">
              {cakes.map((cake) => (
                <div className="img" key={cake.id}>
                  <a href={cake.pic}>
                    <Image src={cake.pic} fluid alt={cake.title} />
                  </a>
                </div>
              ))}
            </div>
          </SRLWrapper>
        </SimpleReactLightbox>
      </Container>
    </div>
  );
};

export default gallery;
