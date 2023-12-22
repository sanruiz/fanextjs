import ButtonLink from "@/components/buttons/buttonLink";
import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <div className="container mx-auto max-w-3xl pt-8 px-4">
      
      <div className="flex flex-col items-center justify-center min-h-[800px] max-h-screen py-2">
        <Image
          src="https://cdn.familyassets.com/wp-content/themes/family-assets/assets/images/svg/oops.svg"
          alt="Oops... 404"
          height={121}
          width={429}
        />
        <p className="mt-10">
          Don’t worry, you didn’t break the internet. We just can’t find the
          page you’re looking for. Head back to the homepage to try again, or
          fill out our request form on our  <Link href={'/help/'}> Get Help page.</Link>
        </p>
        <div className="flex flex-col items-center justify-center mt-10 py-2">
        <ButtonLink href="/" text="Return Home" />
      </div>
      </div>
      
    
    </div>
  );
}
