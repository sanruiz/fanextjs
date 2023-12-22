import Breadcrumbs from "@/components/breadcrumbs";
import ContentNavy from "@/components/call-to-action/content-navy";
import ConfirmCardContact from "@/components/confirm-card-contact";
import CardMarketplace from "@/components/card-marketplace";
import Divider from "@/components/divider";
import SectionMoreServices from "@/components/section-more-services";
import OptionsCompareTable from "@/components/options-compare-table";
import OptionCompareTableMobile from "@/components/options-compare-table/options-compare-table-mobile";
import { getLeadgenappLead } from "@/lib/useApi";

export default async function Page({
  params: { certificate },
}: {
  params: { certificate: string };
}) {
  const lead = await getLeadgenappLead(certificate);

  const items = [ { name: "Home", link: "/" }, { name: "Thank You" } ];

  return (
    <>
      <div className="hidden">{JSON.stringify(lead)}</div>

      <div className="container mx-auto max-w-3xl px-8">
        <div className="max-w-2xl px-3 md:px-0">
          <div className="mb-8">
            <Breadcrumbs  items={items} />
            <h1 className="text-5xl md:text-4xl ">
              Thank you, {lead?.first_name}!
            </h1>
            <p className="text-xl md:text-base">
              We&rsquo;ve received your request for information about{" "}
              <strong>Juniper Village at Louisville</strong> and an advisor will
              be contacting you shortly.
            </p>
          </div>
          <Divider />
          <section className="py-5">
            <h2 className=" text-2xl md:text-2xl font-bold mb-0">
              Confirm your contact information
            </h2>
            <p className="md:hidden text-xl">
              If anything is incorrect please click on “Update”.
            </p>
            <p className="hidden md:block md:text-base">
              If anything is incorrect please click on “Update”. This will let
              you receive all the information you need to make your placement
              journey simple.
            </p>
            <div className="py-5">
              <ConfirmCardContact lead={lead} />
            </div>

            <ContentNavy
              title={" Get your free Community Dashboard"}
              titleMobile={"Get your free Placement Dashboard"}
              titleSize={"text-xl"}
              content={"Track tasks, get updates from your advisor, and more"}
              contentSize={"text-base"}
              rounded={"rounded-lg"}
              textButton={"Create a Free Account"}
            />
          </section>
        </div>
      </div>

      <Divider />
      <section className="bg-highlight py-12">
        <div className="block sm:hidden">
          <OptionCompareTableMobile />
        </div>
        <div className="hidden sm:block">
          <OptionsCompareTable />
        </div>
      </section>

      <Divider />

      <section className="bg-highlight py-12">
        <SectionMoreServices />
      </section>

      <Divider />

      <section className="flex flex-col items-center py-12 gap-y-6">
        <div className="max-w-2xl mx-auto px-8">
          <div className="py-6">
            <h2 className="m-0 font-bold">Senior Care Marketplace</h2>
            <p className="text-xl md:text-base">
              Find the best products and services reviewed by our editors.
            </p>
          </div>
          <CardMarketplace
            title={"Best Hearing Aids of 2023"}
            subtitle={"By Rhyan Sharkey"}
            description={
              "Sociis bibendum nunc massa pharetra aenean. Nulla suscipit scelerisque purus eget ut. Est quam dignissim vulputate consectetur rhoncus dui. Amet."
            }
            imageUrl={
              "https://cdn.familyassets.com/wp-content/uploads/2023/10/resound-on-hearing.png	"
            }
            textButton={"Get The List"}
            imageDescription={"Hearing Aids Product Image"}
          />
        </div>
      </section>
    </>
  );
}
