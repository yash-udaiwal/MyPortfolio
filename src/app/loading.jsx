
import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-12rem)] md:min-h-[calc(100vh-15rem)]">
        <div className="space-y-4 w-full max-w-md">
            <Skeleton className="h-12 w-3/4 mx-auto" />
            <Skeleton className="h-8 w-1/2 mx-auto" />
            <Skeleton className="h-48 w-full" />
        </div>
    </div>
  )
}
