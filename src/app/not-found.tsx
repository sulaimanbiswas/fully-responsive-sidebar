"use client";

import { Button } from "@/components/ui/button";

const NotFoundPage = () => {
  return (
    <>
      <div className="flex h-screen w-screen flex-col items-center justify-center">
        <h1 className="text-2xl font-semibold">404 - Not Found</h1>
        <p className="text-lg text-muted-foreground">
          The page you are looking for does not exist.
        </p>
        <Button
          onClick={() => window.history.back()}
          className="mt-4 rounded-md bg-primary px-4 py-2 text-primary-foreground"
        >
          Go Back
        </Button>
      </div>
    </>
  );
};

export default NotFoundPage;
