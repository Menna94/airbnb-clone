import React from 'react'
import { Container } from 'react-bootstrap'
import Info from '../components/Search Page_Info/Info'
import Places from '../components/Places/Places'
import Footer from '../components/Footer/Footer'

function SearchPage() {
    return (
        <>
            <Container>
                <Info />
                <Places />
            </Container>
            <Footer />
        </>
    )
}

export default SearchPage
