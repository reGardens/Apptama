import { createRootRoute, redirect, Outlet } from '@tanstack/react-router'

export const Route = createRootRoute({
    beforeLoad: ({ location }) => {
        const isAuthenticated = !!sessionStorage.getItem('auth')

        // 1. Redirect root path to appropriate page based on auth status
        if (location.pathname === '' || location.pathname === '/') {
            throw redirect({
                to: isAuthenticated ? '/note' : '/login',
                replace: true,
            })
        }

        // 2. Pages that CANNOT be accessed if ALREADY LOGGED IN
        const authPaths = ['/login', '/register', '/forgot-password']
        if (isAuthenticated && authPaths.includes(location.pathname)) {
            throw redirect({
                to: '/note',
                replace: true,
            })
        }

        // 3. Protected Pages — only accessible if LOGGED IN
        const protectedPaths = ['/note', '/profile', '/settings', '/dashboard']
        const isProtectedPath = protectedPaths.some(path =>
            location.pathname.startsWith(path)
        )

        if (!isAuthenticated && isProtectedPath) {
            // Save the URL to be visited (so it returns after login)
            sessionStorage.setItem('redirectAfterLogin', location.href)

            throw redirect({
                to: '/login',
                replace: true,
            })
        }
    },

    component: () => (
        <div className="max-w-xl mx-auto">
            {/* <Header /> */}
            <main className="">
                <Outlet />
            </main>
            {/* <Footer /> */}
        </div>
    ),
})