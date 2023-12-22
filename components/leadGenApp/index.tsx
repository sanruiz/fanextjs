'use client';
import React, { useMemo, useEffect, useState } from 'react';
import { DEVICE_TYPES } from '@/lib/constants';

type FormIdKey =
  | "assisted-living-modal-desktop"
  | "assisted-living-modal-mobile"
  | "assisted-living-onPage-desktop"
  | "assisted-living-onPage-mobile"
  | "continuing-care-retirement-communities-modal-desktop"
  | "continuing-care-retirement-communities-modal-mobile"
  | "continuing-care-retirement-communities-onPage-desktop"
  | "continuing-care-retirement-communities-onPage-mobile"
  | "home-care-modal-desktop"
  | "home-care-modal-mobile"
  | "home-care-onPage-desktop"
  | "home-care-onPage-mobile"
  | "independent-living-modal-desktop"
  | "independent-living-modal-mobile"
  | "independent-living-onPage-desktop"
  | "independent-living-onPage-mobile"
  | "memory-care-modal-desktop"
  | "memory-care-modal-mobile"
  | "memory-care-onPage-desktop"
  | "memory-care-onPage-mobile"
  | "nursing-homes-modal-desktop"
  | "nursing-homes-modal-mobile"
  | "nursing-homes-onPage-desktop"
  | "nursing-homes-onPage-mobile";

const formIds: { [key in FormIdKey]: string } = {
  "assisted-living-modal-desktop": "95b151cc-60e4-484b-8fb5-5b0f577c72f3",
  "assisted-living-modal-mobile": "a7cb6e16-afa8-4b3d-89b1-abbdc40ab477",
  "assisted-living-onPage-desktop": "365dbf42-9d25-4c6f-afc8-5961c72011ac",
  "assisted-living-onPage-mobile": "92ef2b99-261b-4f8f-9d52-d7f24b96122f",
  "continuing-care-retirement-communities-modal-desktop":
    "bc2f1961-2dbb-42c0-b58f-bebf7b6a38d9",
  "continuing-care-retirement-communities-modal-mobile":
    "63873663-0f0b-4c89-911d-56632b07ef54",
  "continuing-care-retirement-communities-onPage-desktop":
    "fc784344-dc2c-4935-abab-114986ab0e6e",
  "continuing-care-retirement-communities-onPage-mobile":
    "a403bb9b-dcee-4549-8584-6706965ac94b",
  "home-care-modal-desktop": "0fc296b8-dc91-4560-91d6-320ffa56231b",
  "home-care-modal-mobile": "28be79bb-e520-4f02-8540-a243c1338bce",
  "home-care-onPage-desktop": "6796aa47-0281-4611-8486-80c4c8b15419",
  "home-care-onPage-mobile": "8d45ab5f-308a-42b7-a8e0-149f90f63a71",
  "independent-living-modal-desktop": "5868afd2-3511-4a7a-9780-b7a45d7d732e",
  "independent-living-modal-mobile": "8c50aca4-df71-487c-b4f4-513f020bf011",
  "independent-living-onPage-desktop": "a3948955-bbc7-4aff-8f3e-673dbb21b6fd",
  "independent-living-onPage-mobile": "61e6346f-b28c-4550-8988-b9a8ea8cb863",
  "memory-care-modal-desktop": "dc05ec26-476e-441b-adc4-113e6cb8d661",
  "memory-care-modal-mobile": "6dc77e32-f7af-40e5-8989-56d0ec61f25c",
  "memory-care-onPage-desktop": "99b3ab45-bae1-4931-b4ef-c96ba6de1fe6",
  "memory-care-onPage-mobile": "a7e19ccb-395b-460e-bd47-7f2bc096b197",
  "nursing-homes-modal-desktop": "8b138fdb-5141-4ee0-994f-f4ab75a2fb39",
  "nursing-homes-modal-mobile": "6bee8d09-1c3c-4018-bf72-91e289309666",
  "nursing-homes-onPage-desktop": "b8ad2b56-8474-47f1-ae3b-a655557b2bf0",
  "nursing-homes-onPage-mobile": "6cafbba6-2c0c-4b2f-9ea1-7eb6cb9d8334",
};

export function DynamicLeadGenForm({
  careType,
  usageContext,
  isModalOpen
}: {
  careType: string,
  usageContext: 'modal' | 'onPage',
  isModalOpen: boolean
}) {
  const [deviceType, setDeviceType] = useState<string>(DEVICE_TYPES.mobile);
  const formId = useMemo(() => {
    const key = `${careType}-${usageContext}-${deviceType}` as FormIdKey;
    return formIds[key];
  }, [careType, usageContext, deviceType]);

  const [scriptLoaded, setScriptLoaded] = useState(false);

  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    const deviceType = isMobile ? DEVICE_TYPES.mobile : DEVICE_TYPES.desktop;
    setDeviceType(deviceType);
    if (isModalOpen) {
      loadScript(formId);
    } else {
      if (scriptLoaded) {
        unloadScript(formId);
        setScriptLoaded(false);
      }
    }

    return () => {
      if (scriptLoaded) {
        unloadScript(formId);
      }
    };
  }, [isModalOpen, formId, scriptLoaded]);

  const loadScript = (id: string) => {
    const scriptId = `leadgen-script-${id}`;
    if (!document.getElementById(scriptId)) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.src = `https://forms.leadgenapp.io/js/lf.min.js/${id}`;
      script.async = true;
      script.onload = () => setScriptLoaded(true);
      document.body.appendChild(script);
    }
  };

  const unloadScript = (id: string) => {
    const scriptId = `leadgen-script-${id}`;
    const existingScript = document.getElementById(scriptId);
    if (existingScript) {
      document.body.removeChild(existingScript);
    }
  };

  const formMarkup = {
    __html: `<div id="leadgen-form-wrap-${formId}" class="block border-0 w-full max-w-full my-auto mx-0 p-0">
      <leadgen-form-${formId}></leadgen-form-${formId}>
    </div>`,
  };

  return (
    <>
      {formId && isModalOpen && (
        <div dangerouslySetInnerHTML={formMarkup} />
      )}
    </>
  );
}

