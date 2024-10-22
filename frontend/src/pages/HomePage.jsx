import { Button } from "@chakra-ui/react";
import React from "react";

export default function HomePage() {
  return (
    <div>
      <Button
        isLoading
        loadingText="Submitting"
        colorScheme="teal"
        variant="outline"
      >
        Submit
      </Button>
    </div>
  );
}
