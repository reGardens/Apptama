// src/App.tsx  ← file baru!
import { RouterProvider } from '@tanstack/react-router'
import { router } from './routes/Routes'
import { useRegisterSW } from '@/hooks/useRegisterSW'
import type { JSX } from 'react'

export function AppWithPWA(): JSX.Element {
    useRegisterSW()

    return <RouterProvider router={router} />
}