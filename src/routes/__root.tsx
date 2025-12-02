import { createRootRoute, Outlet } from '@tanstack/react-router'
// import Header from '@/components/layout/Header'
// import Footer from '@/components/layout/Footer'

export const Route = createRootRoute({
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