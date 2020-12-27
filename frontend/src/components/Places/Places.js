import React, { Component } from 'react'
import { Container, Row } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import Place from './Place'

class Places extends Component {
    static defaultProps = {
        cities: [
            { _id: 1, id: `f26f6806-77f2-4da7-b8c5-b10c022ef66a`, heart: `far fa-heart`, star: `stars fas fa-star`, description: 'Entire serviced apartment', add: 'Cairo - Almokatam', price: '$18 / night', guests: 2, bedrooms: 1, bathrooms: 1, propertyType: 'studio' },
            { _id: 2, id: `698a45a3-b224-4331-9baf-609dad988576`, heart: `far fa-heart`, star: `stars fas fa-star`, description: 'Entire serviced apartment', add: 'Cairo - Almokatam', price: '$18 / night', guests: 2, bedrooms: 1, bathrooms: 1, propertyType: 'studio' },
            { _id: 3, id: `698a45a3-b224-4331-9baf-609dad988576`, heart: `far fa-heart`, star: `stars fas fa-star`, description: 'Entire serviced apartment', add: 'Cairo - Almokatam', price: '$18 / night', guests: 2, bedrooms: 1, bathrooms: 1, propertyType: 'studio' },
            { _id: 4, id: `698a45a3-b224-4331-9baf-609dad988576`, heart: `far fa-heart`, star: `stars fas fa-star`, description: 'Entire serviced apartment', add: 'Cairo - Almokatam', price: '$18 / night', guests: 2, bedrooms: 1, bathrooms: 1, propertyType: 'studio' },
            { _id: 5, id: `698a45a3-b224-4331-9baf-609dad988576`, heart: `far fa-heart`, star: `stars fas fa-star`, description: 'Entire serviced apartment', add: 'Cairo - Almokatam', price: '$18 / night', guests: 2, bedrooms: 1, bathrooms: 1, propertyType: 'studio' },
            { _id: 6, id: `698a45a3-b224-4331-9baf-609dad988576`, heart: `far fa-heart`, star: `stars fas fa-star`, description: 'Entire serviced apartment', add: 'Cairo - Almokatam', price: '$18 / night', guests: 2, bedrooms: 1, bathrooms: 1, propertyType: 'studio' },
            { _id: 7, id: `698a45a3-b224-4331-9baf-609dad988576`, heart: `far fa-heart`, star: `stars fas fa-star`, description: 'Entire serviced apartment', add: 'Cairo - Almokatam', price: '$18 / night', guests: 2, bedrooms: 1, bathrooms: 1, propertyType: 'studio' },
            { _id: 8, id: `698a45a3-b224-4331-9baf-609dad988576`, heart: `far fa-heart`, star: `stars fas fa-star`, description: 'Entire serviced apartment', add: 'Cairo - Almokatam', price: '$18 / night', guests: 2, bedrooms: 1, bathrooms: 1, propertyType: 'studio' },
            { _id: 9, id: `698a45a3-b224-4331-9baf-609dad988576`, heart: `far fa-heart`, star: `stars fas fa-star`, description: 'Entire serviced apartment', add: 'Cairo - Almokatam', price: '$18 / night', guests: 2, bedrooms: 1, bathrooms: 1, propertyType: 'studio' },
            { _id: 10, id: `698a45a3-b224-4331-9baf-609dad988576`, heart: `far fa-heart`, star: `stars fas fa-star`, description: 'Entire serviced apartment', add: 'Cairo - Almokatam', price: '$18 / night', guests: 2, bedrooms: 1, bathrooms: 1, propertyType: 'studio' },
            { _id: 11, id: `698a45a3-b224-4331-9baf-609dad988576`, heart: `far fa-heart`, star: `stars fas fa-star`, description: 'Entire serviced apartment', add: 'Cairo - Almokatam', price: '$18 / night', guests: 2, bedrooms: 1, bathrooms: 1, propertyType: 'studio' },
            { _id: 12, id: `698a45a3-b224-4331-9baf-609dad988576`, heart: `far fa-heart`, star: `stars fas fa-star`, description: 'Entire serviced apartment', add: 'Cairo - Almokatam', price: '$18 / night', guests: 2, bedrooms: 1, bathrooms: 1, propertyType: 'studio' },
            { _id: 13, id: `698a45a3-b224-4331-9baf-609dad988576`, heart: `far fa-heart`, star: `stars fas fa-star`, description: 'Entire serviced apartment', add: 'Cairo - Almokatam', price: '$18 / night', guests: 2, bedrooms: 1, bathrooms: 1, propertyType: 'studio' },
            { _id: 15, id: `698a45a3-b224-4331-9baf-609dad988576`, heart: `far fa-heart`, star: `stars fas fa-star`, description: 'Entire serviced apartment', add: 'Cairo - Almokatam', price: '$18 / night', guests: 2, bedrooms: 1, bathrooms: 1, propertyType: 'studio' },
            { _id: 16, id: `698a45a3-b224-4331-9baf-609dad988576`, heart: `far fa-heart`, star: `stars fas fa-star`, description: 'Entire serviced apartment', add: 'Cairo - Almokatam', price: '$18 / night', guests: 2, bedrooms: 1, bathrooms: 1, propertyType: 'studio' },
            { _id: 17, id: `698a45a3-b224-4331-9baf-609dad988576`, heart: `far fa-heart`, star: `stars fas fa-star`, description: 'Entire serviced apartment', add: 'Cairo - Almokatam', price: '$18 / night', guests: 2, bedrooms: 1, bathrooms: 1, propertyType: 'studio' },
            { _id: 18, id: `698a45a3-b224-4331-9baf-609dad988576`, heart: `far fa-heart`, star: `stars fas fa-star`, description: 'Entire serviced apartment', add: 'Cairo - Almokatam', price: '$18 / night', guests: 2, bedrooms: 1, bathrooms: 1, propertyType: 'studio' },
            { _id: 19, id: `698a45a3-b224-4331-9baf-609dad988576`, heart: `far fa-heart`, star: `stars fas fa-star`, description: 'Entire serviced apartment', add: 'Cairo - Almokatam', price: '$18 / night', guests: 2, bedrooms: 1, bathrooms: 1, propertyType: 'studio' },
            { _id: 20, id: `698a45a3-b224-4331-9baf-609dad988576`, heart: `far fa-heart`, star: `stars fas fa-star`, description: 'Entire serviced apartment', add: 'Cairo - Almokatam', price: '$18 / night', guests: 2, bedrooms: 1, bathrooms: 1, propertyType: 'studio' },
            { _id: 21, id: `698a45a3-b224-4331-9baf-609dad988576`, heart: `far fa-heart`, star: `stars fas fa-star`, description: 'Entire serviced apartment', add: 'Cairo - Almokatam', price: '$18 / night', guests: 2, bedrooms: 1, bathrooms: 1, propertyType: 'studio' },
            { _id: 22, id: `698a45a3-b224-4331-9baf-609dad988576`, heart: `far fa-heart`, star: `stars fas fa-star`, description: 'Entire serviced apartment', add: 'Cairo - Almokatam', price: '$18 / night', guests: 2, bedrooms: 1, bathrooms: 1, propertyType: 'studio' },
            { _id: 23, id: `698a45a3-b224-4331-9baf-609dad988576`, heart: `far fa-heart`, star: `stars fas fa-star`, description: 'Entire serviced apartment', add: 'Cairo - Almokatam', price: '$18 / night', guests: 2, bedrooms: 1, bathrooms: 1, propertyType: 'studio' },
            { _id: 24, id: `698a45a3-b224-4331-9baf-609dad988576`, heart: `far fa-heart`, star: `stars fas fa-star`, description: 'Entire serviced apartment', add: 'Cairo - Almokatam', price: '$18 / night', guests: 2, bedrooms: 1, bathrooms: 1, propertyType: 'studio' },
            { _id: 25, id: `698a45a3-b224-4331-9baf-609dad988576`, heart: `far fa-heart`, star: `stars fas fa-star`, description: 'Entire serviced apartment', add: 'Cairo - Almokatam', price: '$18 / night', guests: 2, bedrooms: 1, bathrooms: 1, propertyType: 'studio' },

        ]
    }
    render() {
        return (
            <Container className='mb-3' id="Places">
                <Row>
                    {this.props.cities.map((c, ele) => (
                        <Place _id={c._id} key={ele} id={c.id} desc={c.description} add={c.add} price={c.price} star={c.star} heart={c.heart} />
                    ))}
                </Row>
            </Container>
        )
    }
}

export default Places