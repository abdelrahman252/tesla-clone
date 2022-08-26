import React from 'react'
import styled from 'styled-components'
import Section from './Section'

const Home = () => {
    return (
        <Container>
            <Section
                title="Model S"
                description="Order Online for Touchless Delivery"
                leftTextBtn="Custom Order"
                rightTextBtn="Existing Inventory"
                backgroundImg="model-s.jpg"
            />
            <Section
                title="Model 3"
                description="Order Online for Touchless Delivery"
                leftTextBtn="Custom Order"
                rightTextBtn="Existing Inventory"
                backgroundImg="model-3.jpg"
            />
            <Section
                title="Model X"
                description="Order Online for Touchless Delivery"
                leftTextBtn="Custom Order"
                rightTextBtn="Existing Inventory"
                backgroundImg="model-x.jpg"
            />
            <Section
                title="Model Y"
                description="Order Online for Touchless Delivery"
                leftTextBtn="Custom Order"
                rightTextBtn="Existing Inventory"
                backgroundImg="model-y.jpg"
            />
            <Section
                title="Lowest Cost Solar Panels in America"
                description="Money-back guarantee"
                leftTextBtn="Order Now"
                rightTextBtn="Learn More"
                backgroundImg="solar-panel.jpg"
            />
             <Section
                title="Accessories"
                description=""
                leftTextBtn="Shop Now"
                backgroundImg="accessories.jpg"
            />
        </Container>
    )
}

export default Home

const Container = styled.div({
    height: "100vh",
});