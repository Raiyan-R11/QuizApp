import React from 'react'
import { Navigate, Outlet } from 'react-router'
import useStateContext from '../hooks/useStateContext'

// Protection for Quiz and Result pages
// Stop skipping login to go to other pages. (eg. "/" --type--> "/quiz")
function Authenticate() {
    const { context } = useStateContext()

    return (
        context.participantId == 0
            ? <Navigate to="/" /> // Redirect unauthenticated user to login
            : <Outlet /> // Continue as per the route
    )
}

export default Authenticate
