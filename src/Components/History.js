import React from "react"
import { ListGroup } from "react-bootstrap"

export const History = () => {
    const local = localStorage.getItem('citySearches')
    console.log(local)
    return (
        <>
            <h1>History of Cites</h1>
            <ListGroup>

                <ListGroup.Item variant="primary">{local}</ListGroup.Item>
                <ListGroup.Item variant="secondary"></ListGroup.Item>
                <ListGroup.Item variant="success"></ListGroup.Item>
                <ListGroup.Item variant="danger"></ListGroup.Item>
                <ListGroup.Item variant="warning"></ListGroup.Item>
                <ListGroup.Item variant="info"></ListGroup.Item>
                <ListGroup.Item variant="light"></ListGroup.Item>

            </ListGroup>
        </>
    )
}