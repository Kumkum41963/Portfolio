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
      <Toaster />
    </TooltipProvider>
  );
}

export default App;