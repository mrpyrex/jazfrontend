import { Container, Row, Col, Image } from 'react-bootstrap'
import Link from 'next/link'

const HomeMenu = () => {
    return (
        <section className='home-menu' id='home-menu'>
          <Container fluid className='p-0'>
            <div className="section-heading my-5 text-center">
              <h4>Delicious & More</h4>
              <h2 className='display-3'>Our Menu</h2>
            </div>
            {/* First Row */}
            <Row noGutters>
              {/* Set 1 */}
              <Col sm={6} xl={2} className='order-sm-1 order-xl-1'>
                <Image fluid src="/img/j1.jpg" alt='menu items'/>
              </Col>
              <Col sm={6} xl={2} className='order-sm-2 order-xl-2 point-left'>
                <div className="menu-item-desc">
                  
                  <h2>Sponge Cake</h2>
                  <p>Lorem ipsum dolor sit amet.</p>
                  <Link href="#">
                    <a className='btn mt-3 d-none d-xl-block'>See Recipe</a>
                  </Link>
                </div>
              </Col>
              {/* Set 2 */}
              <Col sm={6} xl={2} className='order-sm-4 order-xl-3'>
                <Image fluid src="/img/j2.jpg" alt='menu items'/>
              </Col>
              <Col sm={6} xl={2} className='order-sm-3 order-xl-4 point-left'>
                <div className="menu-item-desc">
                 
                  <h2>Sponge Cake Special</h2>
                  <p>Lorem ipsum dolor sit amet.</p>
                  <Link href="#">
                    <a className='btn mt-3 d-none d-xl-block'>See Recipe</a>
                  </Link>
                </div>
              </Col>
              {/* Set 3 */}
              <Col sm={6} xl={2} className='order-sm-5 order-xl-5'>
                <Image fluid src="/img/j3.jpg" alt='menu items'/>
              </Col>
              <Col sm={6} xl={2} className='order-sm-6 order-xl-6 point-left'>
                <div className="menu-item-desc">
               
                  <h2>Sponge Cake Special</h2>
                  <p>Lorem ipsum dolor sit amet.</p>
                  <Link href="#">
                    <a className='btn mt-3 d-none d-xl-block'>See Recipe</a>
                  </Link>
                </div>
              </Col>
              </Row>
              {/* Second Row */}
            <Row noGutters>
              {/* Set 4 */}
              <Col sm={6} xl={2} className='order-sm-2 order-xl-2'>
                <Image fluid src="/img/j1.jpg" alt='menu items'/>
              </Col>
              <Col sm={6} xl={2} className='order-sm-1 order-xl-1 point-right'>
                <div className="menu-item-desc">
                
                  <h2>Sponge Cake</h2>
                  <p>Lorem ipsum dolor sit amet.</p>
                  <Link href="#">
                    <a className='btn mt-3 d-none d-xl-block'>See Recipe</a>
                  </Link>
                </div>
              </Col>
              {/* Set 5 */}
              <Col sm={6} xl={2} className='order-sm-3 order-xl-4'>
                <Image fluid src="/img/j2.jpg" alt='menu items'/>
              </Col>
              <Col sm={6} xl={2} className='order-sm-5 order-xl-3 point-right'>
                <div className="menu-item-desc">
                
                  <h2>Sponge Cake Special</h2>
                  <p>Lorem ipsum dolor sit amet.</p>
                  <Link href="#">
                    <a className='btn mt-3 d-none d-xl-block'>See Recipe</a>
                  </Link>
                </div>
              </Col>
              {/* Set 6 */}
              <Col sm={6} xl={2} className='order-sm-6 order-xl-6'>
                <Image fluid src="/img/j3.jpg" alt='menu items'/>
              </Col>
              <Col sm={6} xl={2} className='order-sm-5 order-xl-5 point-right'>
                <div className="menu-item-desc">
                
                  <h2>Sponge Cake Special</h2>
                  <p>Lorem ipsum dolor sit amet.</p>
                  <Link href="#">
                    <a className='btn mt-3 d-none d-xl-block'>See Recipe</a>
                  </Link>
                </div>
              </Col>
            </Row>
        </Container>
      </section>
    )
}

export default HomeMenu
