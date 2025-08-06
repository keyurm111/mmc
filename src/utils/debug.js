// Debug utility to help prevent message port errors
export const setupDebugUtils = () => {
  // Prevent message port errors from browser extensions
  if (typeof window !== 'undefined') {
    // Override console.error to filter out message port errors
    const originalError = console.error;
    console.error = (...args) => {
      const message = args.join(' ');
      if (message.includes('message port closed') || 
          message.includes('runtime.lastError') ||
          message.includes('The message port closed before a response was received')) {
        // Silently ignore these errors as they're usually from browser extensions
        return;
      }
      originalError.apply(console, args);
    };

    // Override console.warn to filter out similar warnings
    const originalWarn = console.warn;
    console.warn = (...args) => {
      const message = args.join(' ');
      if (message.includes('message port closed') || 
          message.includes('runtime.lastError')) {
        return;
      }
      originalWarn.apply(console, args);
    };

    // Add error handler for unhandled promise rejections
    window.addEventListener('unhandledrejection', (event) => {
      if (event.reason && event.reason.message && 
          event.reason.message.includes('message port closed')) {
        event.preventDefault();
        return;
      }
    });

    // Add error handler for global errors
    window.addEventListener('error', (event) => {
      if (event.message && event.message.includes('message port closed')) {
        event.preventDefault();
        return;
      }
    });

    // Disable React DevTools in development if causing issues
    if (process.env.NODE_ENV === 'development') {
      // Prevent React DevTools from causing message port errors
      if (window.__REACT_DEVTOOLS_GLOBAL_HOOK__) {
        window.__REACT_DEVTOOLS_GLOBAL_HOOK__.inject = function() {};
      }
    }
  }
};

// Auto-setup when imported
setupDebugUtils(); 