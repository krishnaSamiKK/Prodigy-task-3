import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/10 via-white to-secondary/10">
      <div className="bg-white/90 shadow-xl rounded-2xl p-10 text-center max-w-md border border-primary/20">
        <h1 className="text-6xl font-extrabold mb-4 text-primary drop-shadow">404</h1>
        <p className="text-xl text-muted-foreground mb-4">Oops! Page not found</p>
        <a href="/" className="text-primary hover:text-secondary underline font-semibold">Return to Home</a>
      </div>
    </div>
  );
};

export default NotFound;
