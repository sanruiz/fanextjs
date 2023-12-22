import Link from "next/link";
import Image from "next/image";
import {
  footerLinksFirstSection,
  footerLinksSecondSection,
  imagesSectionArr,
  footerLinksThirdSection,
} from "./utils";
import Linkedin from "@/components/icons/linkedin";
import Facebook from "@/components/icons/facebook";

export default function Footer() {
  return (
    <footer className="bg-darknavy pt-12 pb-6 px-6 text-sm md:text-lg  font-semibold">
      <div className="flex flex-col gap-8 md:max-w-5xl md:m-auto xl:max-w-6xl">
        <Image
          src="https://cdn.familyassets.com/wp-content/themes/family-assets/assets/images/png/logo.png"
          alt="FamilyAssets Logo"
          width={263}
          height={38}
          className="m-auto"
        />
        <div className="flex gap-4 justify-between mb-4 flex-col sm:flex-row">
          <div className="flex flex-row gap-2 flex-1 sm:justify-center">
            <div className="flex flex-col gap-1">
              <ul className="list-none font-montserrat font-bold">
                {footerLinksFirstSection.map((item, index) => (
                  <li key={`${index}_fs`}>
                    <Link
                      href={item.href}
                      className="text-background1"
                      target="_blank"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>

              <Image
                src="https://cdn.familyassets.com/wp-content/uploads/2023/10/accredit.svg"
                className="mt-7"
                width={169}
                height={61}
                alt="Accredited Business logo"
                title="Accredited Business logo"
              />
            </div>
          </div>

          <div className="flex flex-row gap-2 flex-1 sm:justify-center">
            <div className="flex flex-col gap-1">
              <ul className="list-none font-montserrat font-bold">
                {footerLinksSecondSection.map((item, index) => (
                  <li key={`${index}_fs2`}>
                    <Link
                      href={item.href}
                      className="text-background1"
                      target="_blank"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex flex-row gap-2 text-[16px] flex-1 sm:justify-center">
            <div className="flex flex-col gap-1">
              {footerLinksThirdSection.map((item, index) => (
                <p key={`${index}_fs`}>
                  <Link href={item.href} className="text-background1 font-light">
                    {item.label}
                  </Link>
                </p>
              ))}
              <p className="text-[#00D1FF] mt-4">A SilverAssist Company</p>
              <div className="flex gap-3">
                <Link
                  href="https://www.linkedin.com/company/silverassist/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin width={37} height={38} />
                </Link>
                <Link
                  href="https://facebook.com/familyassets"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Facebook width={40} height={40} />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {imagesSectionArr.map((item, index) => (
            <div
              key={`${item.alt}${index}`}
              className="flex flex-col md:items-center max-h-7 mb-2"
            >
              <Link href={item.href} target="_blank">
                <div className="w-full h-full">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    title={item.alt}
                    width={item.width}
                    height={"100"}
                  />
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}
