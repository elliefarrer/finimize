import React from 'react'
import { Box } from '@mui/material'
import NavHeader from '../NavHeader'

type LayoutProps = {
    children: React.ReactNode
}

const DefaultLayout = ({ children }: LayoutProps) => (
    <Box display="flex" minHeight="100vh" height="100%" flexDirection="column">
        <NavHeader />
        <>{children}</>
    </Box>
)

export default DefaultLayout
