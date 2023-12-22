"use client";

import Link from "next/link";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body>
        <div className="container mx-auto max-w-3xl pt-8 px-4">
          <div className="flex flex-col items-center justify-center min-h-[800px] max-h-screen py-2">
            <h1>Something went wrong!</h1>

            <div className="flex flex-col items-center justify-around py-2">
            <p>
              This may be due to updates to our database or a temporary issue
              retrieving the information.
            </p>
            <p>
              While we work on bringing you the most current listings, please
              feel free to <Link href={"/help/"}>contact us</Link> for personal
              assistance. Our team is always ready to help you find the right
              assisted living options.
            </p>
            
            <p>
              In the meantime, you might want to check out other resources
              available on our site that could be helpful.
            </p>
            <ul>
              <li>
                <a href="/assisted-living/">Assisted Living Guide</a>
              </li>
              <li>
                <a href="/resources/">Senior Care Resources</a>
              </li>
              <li>
                <a href="/">Home Page</a>
              </li>
            </ul>
            </div>

          </div>
        </div>
      </body>
    </html>
  );
}
