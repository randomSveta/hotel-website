import React from 'react';
import { Col } from 'reactstrap';
import {
    Card, CardImg, CardBody,
    CardTitle, CardText
} from 'reactstrap';

function CityPhoto(props) {
    let hotelsImages = props.hotelInfo.map((hotel) => {
        return (

            <Col xs="12" sm="3" className="text-center" key={hotel.id}>
                <Card>
                    <CardBody>
                        <CardTitle >{hotel.city}</CardTitle>
                        <CardImg className="img-fluid img-thumbnail rounded" src={hotel.main_photo} alt={hotel.name} />
                        <CardText>Hotel "{hotel.name}"</CardText>
                    </CardBody>
                </Card>
            </Col>
        )

    });
    return (
        <React.Fragment>
            {hotelsImages}
        </React.Fragment>);
};
export default CityPhoto;
