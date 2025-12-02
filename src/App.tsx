// src/App.tsx  ← file baru!
import { RouterProvider, createRouter } from '@tanstack/react-router'
import { routeTree } from './routeTree.gen'
import { useRegisterSW } from '@/hooks/useRegisterSW'
import type { JSX } from 'react'

const router = createRouter({ routeTree })

declare module '@tanstack/react-router' {
    interface Register {
        router: typeof router
    }
}

export function AppWithPWA(): JSX.Element {
    useRegisterSW()

    return <RouterProvider router={router} />
}