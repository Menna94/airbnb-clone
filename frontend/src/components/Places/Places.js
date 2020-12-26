import React, { Component } from 'react'
import { Container, Row } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import Place from './Place'

class Places extends Component {
    static defaultProps = {
        cities: [
            { id: `f26f6806-77f2-4da7-b8c5-b10c022ef66a`, heart: `far fa-heart`, star: `stars fas fa-star`, description: 'Entire serviced apartment', add: 'Cairo - Almokatam', price: '$18 / night' },
            { id: `698a45a3-b224-4331-9baf-609dad988576`, heart: `far fa-heart`, star: `stars fas fa-star`, description: 'Entire serviced apartment', add: 'Cairo - Almokatam', price: '$18 / night' },
            { id: `698a45a3-b224-4331-9baf-609dad988576`, heart: `far fa-heart`, star: `stars fas fa-star`, description: 'Entire serviced apartment', add: 'Cairo - Almokatam', price: '$18 / night' },
            { id: `698a45a3-b224-4331-9baf-609dad988576`, heart: `far fa-heart`, star: `stars fas fa-star`, description: 'Entire serviced apartment', add: 'Cairo - Almokatam', price: '$18 / night' },
            { id: `698a45a3-b224-4331-9baf-609dad988576`, heart: `far fa-heart`, star: `stars fas fa-star`, description: 'Entire serviced apartment', add: 'Cairo - Almokatam', price: '$18 / night' },
            { id: `698a45a3-b224-4331-9baf-609dad988576`, heart: `far fa-heart`, star: `stars fas fa-star`, description: 'Entire serviced apartment', add: 'Cairo - Almokatam', price: '$18 / night' },
            { id: `698a45a3-b224-4331-9baf-609dad988576`, heart: `far fa-heart`, star: `stars fas fa-star`, description: 'Entire serviced apartment', add: 'Cairo - Almokatam', price: '$18 / night' },
            { id: `698a45a3-b224-4331-9baf-609dad988576`, heart: `far fa-heart`, star: `stars fas fa-star`, description: 'Entire serviced apartment', add: 'Cairo - Almokatam', price: '$18 / night' },
            { id: `698a45a3-b224-4331-9baf-609dad988576`, heart: `far fa-heart`, star: `stars fas fa-star`, description: 'Entire serviced apartment', add: 'Cairo - Almokatam', price: '$18 / night' },
            { id: `698a45a3-b224-4331-9baf-609dad988576`, heart: `far fa-heart`, star: `stars fas fa-star`, description: 'Entire serviced apartment', add: 'Cairo - Almokatam', price: '$18 / night' },
            { id: `698a45a3-b224-4331-9baf-609dad988576`, heart: `far fa-heart`, star: `stars fas fa-star`, description: 'Entire serviced apartment', add: 'Cairo - Almokatam', price: '$18 / night' },
            { id: `698a45a3-b224-4331-9baf-609dad988576`, heart: `far fa-heart`, star: `stars fas fa-star`, description: 'Entire serviced apartment', add: 'Cairo - Almokatam', price: '$18 / night' },
            { id: `698a45a3-b224-4331-9baf-609dad988576`, heart: `far fa-heart`, star: `stars fas fa-star`, description: 'Entire serviced apartment', add: 'Cairo - Almokatam', price: '$18 / night' },
            { id: `698a45a3-b224-4331-9baf-609dad988576`, heart: `far fa-heart`, star: `stars fas fa-star`, description: 'Entire serviced apartment', add: 'Cairo - Almokatam', price: '$18 / night' },
            { id: `698a45a3-b224-4331-9baf-609dad988576`, heart: `far fa-heart`, star: `stars fas fa-star`, description: 'Entire serviced apartment', add: 'Cairo - Almokatam', price: '$18 / night' },
            { id: `698a45a3-b224-4331-9baf-609dad988576`, heart: `far fa-heart`, star: `stars fas fa-star`, description: 'Entire serviced apartment', add: 'Cairo - Almokatam', price: '$18 / night' },
            { id: `698a45a3-b224-4331-9baf-609dad988576`, heart: `far fa-heart`, star: `stars fas fa-star`, description: 'Entire serviced apartment', add: 'Cairo - Almokatam', price: '$18 / night' },
            { id: `698a45a3-b224-4331-9baf-609dad988576`, heart: `far fa-heart`, star: `stars fas fa-star`, description: 'Entire serviced apartment', add: 'Cairo - Almokatam', price: '$18 / night' },
            { id: `698a45a3-b224-4331-9baf-609dad988576`, heart: `far fa-heart`, star: `stars fas fa-star`, description: 'Entire serviced apartment', add: 'Cairo - Almokatam', price: '$18 / night' },
            { id: `698a45a3-b224-4331-9baf-609dad988576`, heart: `far fa-heart`, star: `stars fas fa-star`, description: 'Entire serviced apartment', add: 'Cairo - Almokatam', price: '$18 / night' },
            { id: `698a45a3-b224-4331-9baf-609dad988576`, heart: `far fa-heart`, star: `stars fas fa-star`, description: 'Entire serviced apartment', add: 'Cairo - Almokatam', price: '$18 / night' },
            { id: `698a45a3-b224-4331-9baf-609dad988576`, heart: `far fa-heart`, star: `stars fas fa-star`, description: 'Entire serviced apartment', add: 'Cairo - Almokatam', price: '$18 / night' },
            { id: `698a45a3-b224-4331-9baf-609dad988576`, heart: `far fa-heart`, star: `stars fas fa-star`, description: 'Entire serviced apartment', add: 'Cairo - Almokatam', price: '$18 / night' },
            { id: `698a45a3-b224-4331-9baf-609dad988576`, heart: `far fa-heart`, star: `stars fas fa-star`, description: 'Entire serviced apartment', add: 'Cairo - Almokatam', price: '$18 / night' },
        ]
    }
    render() {
        return (
            <Container className='mb-3' id="Places">
                <Row>
                    {this.props.cities.map((c, ele) => (
                        <Place key={ele} id={c.id} desc={c.description} add={c.add} price={c.price} star={c.star} heart={c.heart} />

                    ))}
                </Row>
            </Container>
        )
    }
}

export default Places