import React from 'react'
import { Col, Row } from 'react-bootstrap'
import '../index.css'

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';



function LandingPage() {
  const navigateByUrl=useNavigate()
  return (
    <>
    <Row className='mt-5 align-items-center justify-content-between w-100'> 
      <Col></Col>
      <Col lg={5}>
        <h1>Welcome To <span className='text-warning'>Media Player</span></h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias illum hic magnam sint sit cumque obcaecati soluta? Nobis soluta saepe assumenda vero ea veniam voluptate minima laboriosam, consectetur nemo harum!
        Ipsa ab facilis doloremque? Ipsam voluptatibus nostrum dolorem nulla saepe, eaque quia aliquid porro asperiores, repellat placeat explicabo quod ab facilis aut illum odit ipsum! Fugiat quia reprehenderit nesciunt quidem.
        Deserunt distinctio, eos esse quia illum ducimus omnis. Eligendi eveniet quasi debitis hic est porro maiores provident. Accusantium repellat ratione, nemo voluptatibus officia est, fuga voluptatem quod sint culpa ullam?</p>
        <button onClick={()=>navigateByUrl('/home')} className='mt-4 btn btn-info'>Get Started</button>
      </Col>
      <Col >
      </Col>

      <Col lg={5}>
      <img src="https://i.gifer.com/origin/6d/6db3d77d8ff976feb206d7e7c64572a6.gif" width={'400px'} alt="Music image" />

      </Col>

    </Row>

    <div className='container mb-5 mt-5 d-flex align-items-center justify-content-center flex-column'>
      <h3>Features</h3>
      <div className='cards mb-5 mt-5 d-flex align-items-center justify-content-between w-100'>
      <Card className='p-5 bg-info' style={{ width: '22rem' }}>
      <Card.Img height={'300px'} width={'300px'} variant="top" src="https://i.pinimg.com/originals/88/4a/40/884a408310b28171aa1018f77dee2602.gif" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>

    <Card className='p-5 bg-info' style={{ width: '22rem' }}>
      <Card.Img height={'300px'} width={'300px'} variant="top" src="https://i.pinimg.com/originals/88/4a/40/884a408310b28171aa1018f77dee2602.gif" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>

    <Card className='p-5 bg-info' style={{ width: '22rem' }}>
      <Card.Img height={'300px'} width={'300px'} variant="top" src="https://i.pinimg.com/originals/d7/28/26/d728264b7433e62b7c4572c8d129e9be.gif" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
      </div>
    </div>

    <div className='container border rounded p-5 border-secondary mb-5 mt-5 d-flex align-items-center justify-content-between w-100'>
      <div className='col-lg-5'>
        <h3 className='mb-3 text-warning'>Simple, Powefull & Fast</h3>
        <h6 className='mb-5'><span className='fs-5 fw-bolder text-warning'>Play Everything</span> : Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto quo eveniet deleniti debitis cupiditate doloribus odit dolorem aliquam corrupti. Quasi earum quibusdam quaerat odio laboriosam praesentium placeat provident aliquam iste?
        Maiores numquam, et laborum dolore mollitia iure officiis sit. Officia quod exercitationem animi consequuntur voluptatibus incidunt sint dolores, inventore quia accusamus sapiente reprehenderit consectetur provident expedita magnam ratione qui odio.
        Culpa consectetur inventore laborum cumque animi eos voluptas quasi. Aut, placeat! Dolores odio incidunt voluptatem omnis accusamus voluptate doloremque optio at eveniet sit aliquid totam exercitationem reprehenderit, magnam quo ducimus.</h6>

        <h6 className='mb-5'><span className='fs-5 fw-bolder text-warning'>Play Everything</span> : Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto quo eveniet deleniti debitis cupiditate doloribus odit dolorem aliquam corrupti. Quasi earum quibusdam quaerat odio laboriosam praesentium placeat provident aliquam iste?
        Maiores numquam, et laborum dolore mollitia iure officiis sit. Officia quod exercitationem animi consequuntur voluptatibus incidunt sint dolores, inventore quia accusamus sapiente reprehenderit consectetur provident expedita magnam ratione qui odio.
        Culpa consectetur inventore laborum cumque animi eos voluptas quasi. Aut, placeat! Dolores odio incidunt voluptatem omnis accusamus voluptate doloremque optio at eveniet sit aliquid totam exercitationem reprehenderit, magnam quo ducimus.</h6>

        <h6 className='mb-5'><span className='fs-5 fw-bolder text-warning'>Play Everything</span> : Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto quo eveniet deleniti debitis cupiditate doloribus odit dolorem aliquam corrupti. Quasi earum quibusdam quaerat odio laboriosam praesentium placeat provident aliquam iste?
        Maiores numquam, et laborum dolore mollitia iure officiis sit. Officia quod exercitationem animi consequuntur voluptatibus incidunt sint dolores, inventore quia accusamus sapiente reprehenderit consectetur provident expedita magnam ratione qui odio.
        Culpa consectetur inventore laborum cumque animi eos voluptas quasi. Aut, placeat! Dolores odio incidunt voluptatem omnis accusamus voluptate doloremque optio at eveniet sit aliquid totam exercitationem reprehenderit, magnam quo ducimus.</h6>
      </div>
      <div className='video col-lg-5'>
      <iframe width="550" height="315" src="https://www.youtube.com/embed/BLO6LRPMUp8?si=SHdzOpsxsw6jxlt1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>      </div>
    </div>


    </>


    


  )
}

export default LandingPage