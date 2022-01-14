import React, { useContext } from "react"
import { Navigate, useLocation } from "react-router-dom"

import { AuthContext } from '../context/AuthContext'

const PrivateElement = ({ children }) => {

    const { currentUser } = useContext(AuthContext)

    let location = useLocation()

    return currentUser ? (
            children
        ) : (
            <Navigate to="/login" state={{ from: location }} />
        )
}

export default PrivateElement