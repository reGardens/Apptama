import { createRootRoute, createRoute, createRouter, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

// PAGES
import Note from "@/pages/note/Note";

const rootRoute = createRootRoute({
    component: () => (
        <>
            <Outlet />
            <TanStackRouterDevtools />
        </>
    ),
})

const noteRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/',
    component: Note,
})

const routeTree = rootRoute.addChildren([
    noteRoute,
])

export const router = createRouter({
    routeTree,
})