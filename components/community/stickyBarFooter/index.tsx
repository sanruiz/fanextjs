import ButtonLink from "@/components/buttons/buttonLink";
import "./footer-button-styles.css";

export default function StickyBarFooter({number}:{number:string}) {
  return (
    <div className="bg-white bottom-0 md:hidden fixed justify-center border-t z-50 w-full p-4">
      <div className="flex justify-center ">
        <span className="m-2 font-montserrat font-semibold text-xs mr-3">
          Call or Chat
        </span>
        <ButtonLink href={`tel:${number}`} text={`Call ${number}`} className="footer-button mr-12" />
      </div>
    </div>
  );
}
