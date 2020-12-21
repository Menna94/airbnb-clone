import React from 'react'
import { Tab, Tabs, Button, Container, Row, Col } from 'react-bootstrap'
import './Future.scss'
import ArtsCulture from './sub-components/ArtsCulture'
import Outdoor from './sub-components/Outdoor'
import Mountain from './sub-components/Mountain'
import Beach from './sub-components/Beach'
import Popular from './sub-components/Popular'

const Future = () => {
    return (
        <>
            <div className="future__wrapper my-5">
                <Container>
                    <Row>
                        <div className="future__title col-12">
                            <span>Inspiration for future gateways</span>
                        </div>
                        <Col>
                            <Tabs
                                defaultActiveKey="arts"
                                transition={false}
                                id="controlled-tab-example">
                                <Tab
                                    eventKey="arts"
                                    title="Destinations for arts & culture"
                                    id="artsCulture"
                                    className="tab">
                                    <ArtsCulture />
                                </Tab>
                                <Tab
                                    eventKey="outdoor"
                                    title="Destinations for outdoor adventure  "
                                    id="outdoorAdventure">
                                    <Outdoor />
                                </Tab>
                                <Tab
                                    eventKey="mountain"
                                    title="Mountain cabins"
                                    id="mountainCabins">
                                    <Mountain />
                                </Tab>
                                <Tab
                                    eventKey="beach"
                                    title="Beach destinations"
                                    id="beachDestinations">
                                    <Beach />
                                </Tab>
                                <Tab
                                    eventKey="popular"
                                    title="Popular destinations"
                                    id="popularDestinations">
                                    <Popular />
                                </Tab>
                            </Tabs>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default Future
