import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { navItems } from "./nav-items";
import { ErrorBoundary } from "react-error-boundary";
import { toast } from "sonner";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      onError: (error) => {
        console.error("Query error:", error);
        toast.error("An error occurred. Please try again.");
      },
    },
    mutations: {
      onError: (error) => {
        console.error("Mutation error:", error);
        toast.error("An error occurred. Please try again.");
      },
    },
  },
});

const ErrorFallback = ({ error, resetErrorBoundary }) => (
  <div className="container mx-auto px-4 py-20 text-center">
    <h1 className="text-2xl font-bold mb-4">Oops! Something went wrong.</h1>
    <pre className="text-red-500 mb-4">{error.message}</pre>
    <button
      onClick={resetErrorBoundary}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >
      Try again
    </button>
  </div>
);

const App = () => (
  <ErrorBoundary
    FallbackComponent={ErrorFallback}
    onReset={() => {
      // Reset the state of your app so the error doesn't happen again
    }}
    onError={(error, info) => {
      // Log the error to an error reporting service
      console.error("Error caught by boundary:", error, info);
    }}
  >
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <BrowserRouter>
          <Routes>
            {navItems.map(({ to, page }) => (
              <Route key={to} path={to} element={page} />
            ))}
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </ErrorBoundary>
);

export default App;
