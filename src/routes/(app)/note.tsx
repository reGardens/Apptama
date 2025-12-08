import LayoutBody from '@/components/layout/LayoutMain'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/(app)/note')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <LayoutBody>
      <div>

      </div>
    </LayoutBody>
  )
}
