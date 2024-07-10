"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Page() {
  const [count, setCount] = useState(5);
  const router = useRouter();

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prev) => prev - 1);
    }, 1000);

    if (count === 0) {
      router.push("/");
    }

    return () => clearInterval(timer);
  }, [count]);

  return (
    <div className="container mx-auto text-center p-4">
      <h1
        className="text-4xl font-bold text-blue-600"
        style={{ marginTop: "100px" }}
      >
        Thank you for your submission!
      </h1>
      <p
        className="text-lg text-gray-600"
        style={{ marginTop: "20px", marginBottom: "20px" }}
      >
        We will review your submission and get back to you shortly.
      </p>
      <p
        className="text-lg text-gray-600"
        style={{ marginTop: "20px", marginBottom: "20px" }}
      >
        You will be redirected to the{" "}
        <Link href="/" className="text-blue-600 hover:underline">
          home page
        </Link>{" "}
        in {count} seconds.
      </p>
    </div>
  );
}
