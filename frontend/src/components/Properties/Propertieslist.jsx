import React, { Component } from 'react'
import Property from './Property'
import Footer from '../Footer/Footer';


export default class Propertieslist extends Component {

    state = {
        properties: [
            { _id: 1, type: "apart 1", img: "images/5.jpg", beds: 2, baths: 1, location: "123abc", bedrooms: 3 },
            { _id: 2, type: "apart 2", img: "images/6.jpg", beds: 3, baths: 2, location: "123abc", bedrooms: 2 },
            { _id: 3, type: "apart 3", img: "images/7.jpg", beds: 5, baths: 1, location: "123abc", bedrooms: 2 },
            { _id: 4, type: "Room", img: "images/5.jpg", beds: 2, baths: 1, location: "123abc", bedrooms: 1 },
        ],
    }
    componentDidMount() {

    }

    handleDelete = (property) => {
        // clone
        let properties = this.state.properties;
        // Edit
        properties = properties.filter((item) => item._id !== property._id)
        // setState
        this.setState({ properties });

    }

    handleEdit = (property) => {
        alert(property._id)
    }


    render() {
        return (
            <React.Fragment>
                <div className="container py-5">
                    <table class="table table-striped table-hover text-center">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Listing</th>
                                <th scope="col">Bedrooms</th>
                                <th scope="col">Beds</th>
                                <th scope="col">Baths</th>
                                <th scope="col">Location</th>
                                <th scope="col">Delete</th>
                                <th scope="col">Edit</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.properties.map(item =>
                                <Property
                                    key={item._id}
                                    data={item}
                                    onDelete={this.handleDelete}
                                    onEdit={this.handleEdit}
                                />
                            )}
                        </tbody>
                    </table>
                    </div>
                    <Footer />
            </React.Fragment>
        )
    }
}
