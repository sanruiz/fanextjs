"use client";

import { Community } from "@/types/common";
import Breadcrumbs from "@/components/breadcrumbs";
import Gallery from "@/components/community/gallery";
import TitleBar from "@/components/community/titleBar";
import AditionalCareTypes from "@/components/community/aditionalCareType";
import { PreferedBadge } from "@/components/preferred-badge";
import { deslugify } from "@/lib/auxilary/slugify";
import "./header.styles.css";
import { generateBreadcrumb } from "@/lib/auxilary/breadcrumb";
import { useLeadGenContext } from "@/providers/leadGen";
import Modal from "@/components/modal";
import { DynamicLeadGenForm } from "@/components/leadGenApp";

export default function ComunityHeader({
  community,
  careType,
}: {
  community: Community;
  careType: string;
}) {
  const careTypeLong = deslugify(careType);
  const breadcrumbItems = generateBreadcrumb({
    careType: {
      name: careTypeLong,
      slug: careType
    },
    state: {
      name: community?.state,
      slug: community?.state_slug
    },
    city: {
      name: community?.city,
      slug: community?.city_slug,
    },
    community: {
      name: community?.name
    }
  });

  const { isModalOpen, setIsModalOpen } = useLeadGenContext();
  const toggleModal = () => setIsModalOpen(!isModalOpen);

  return (
    <section className="comunity-header container mx-auto max-w-6xl px-4 grid md:block relative">
      <Breadcrumbs items={breadcrumbItems} />
      <TitleBar community={community} />
      <Gallery community={community} />
      {community.preferred && <PreferedBadge />}
      <AditionalCareTypes careTypes={community?.additional_care_types} />
      <hr className="divider hidden md:block" />
      <Modal isOpen={isModalOpen} onClose={toggleModal}>
        <DynamicLeadGenForm
          careType={careType?.toString() ?? "assisted-living"}
          usageContext="modal"
          isModalOpen={isModalOpen}
        />
      </Modal>
    </section>
  );
}
