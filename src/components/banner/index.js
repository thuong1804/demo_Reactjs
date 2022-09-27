import './banner.scss';
import React from 'react';
import bannerimg from '../../assets/images/cesar-rincon-1024x1024.jpg';
import {  Button, Row } from 'reactstrap';
import {Col} from 'reactstrap';
import {Container} from 'reactstrap';


function Banner()
{
    return(
        <div className='banner'>
            <Container>          
            <Row>               
                <Col>
                <div className='home-banner'>
                <img src={bannerimg} className='banner_img'></img>
                </div>
                </Col>
                <Col className='text-col'>
                <h4>Web Designer</h4>
                <h1>Alex Smith</h1>
                <p id='text-p-banner'> Fusce tempor magna mi, non egestas velit ultricies nec. 
                    Aenean convallis, risus non condimentum gravida, odio mauris 
                    ullamcorper felis, ut venenatis purus ex eu mi. Quisque imperdiet
                     lacinia urna, a placerat sapien pretium eu.</p>
                    <Row>
                        <Col>
                        <Button className='btn-dowload'>Download CV</Button>
                        </Col>
                        <Col>
                        <Button className='btn-contact'>Contact</Button>
                        </Col>
                    </Row>
                </Col>
               
            </Row>
            
            </Container>
              
            
        </div>
    )
}

export default Banner;
