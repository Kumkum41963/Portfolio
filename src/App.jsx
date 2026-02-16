import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Toaster } from './components/ui/sonner';
import { TooltipProvider } from './components/ui/tooltip';
import { Home, NotFound } from './components';

function App() {
  return (
    // Enables "hover" labels on icons.
    <TooltipProvider>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* This catches any URL that doesn't exist */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>

      {/* This allows those toast alerts to show up anywhere */}
      <Toaster
        toastOptions={{
          unstyled: true,
          classNames: {
            toast: "group flex items-center w-auto max-w-[400px] gap-3 p-4 rounded-2xl bg-card/90 backdrop-blur-md border border-border/50 shadow-[0_8px_32px_rgba(0,0,0,0.5),0_0_15px_rgba(64,224,208,0.1)] text-foreground pointer-events-auto",
            title: "text-sm font-bold leading-none",
            description: "text-xs text-muted-foreground mt-1",
            actionButton: "bg-primary text-primary-foreground text-xs px-3 py-1.5 rounded-lg font-medium",
          },
        }}
      />
    </TooltipProvider>
  );
}

export default App;