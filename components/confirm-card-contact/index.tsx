import { LeadResponse } from "@/types/common";
import React from "react";
import AlertCircle from "@/components/icons/alert-circle";
import ConfirmedCircle from "@/components/icons/confirmed-circle";
import ButtonLink from "@/components/buttons/buttonLink";

export default function ConfirmCardContact({ lead }: { lead: LeadResponse }) {
  return (
    <form className="w-full max-w-2xl bg-white border border-gray-200 rounded-lg shadow p-8  md:p-4">
      <ul role="list" className="divide-y">
        <li className="py-2">
          <div className="flex items-center">
            <span className=" mr-2">Name:</span>
            <span className="font-bold">
              {lead?.first_name} {lead?.last_name}
            </span>
          </div>
        </li>
        <li className="py-2">
          <div className="flex items-start flex-col sm:flex-row sm:items-center">
            <div className="flex items-center pb-2 md:p-0">
              <span className=" pr-2">Email:</span>
              <span className="font-bold md:pr-20">{lead?.email_address}</span>
            </div>

            <div className="flex items-center gap-2 pb-2">
              <AlertCircle width={20} height={20} />

              <div className="text-xs">
                <p>Check your email to confirm</p>
                <p>
                  Be sure to check your <strong>spam folder</strong>
                </p>
              </div>
            </div>
          </div>
        </li>
        <li className="py-2">
          <div className="flex items-start flex-col sm:flex-row sm:items-center">
            <div className="flex items-center pb-2 md:pb-0 md:pr-20">
              <span className="pr-2">Phone:</span>
              <span className="font-bold">{lead?.phone_home}</span>
            </div>

            <div className="flex items-center gap-2">
              <ConfirmedCircle width={20} height={20} />
              <span className="text-sm">Confirmed</span>
            </div>
          </div>
        </li>
        <li className="pt-3">
          <div className="w-56 mt-2 flex gap-4 md:flex-row">
            <ButtonLink href="#" text="Update" variant="secondary" />
          </div>
        </li>
      </ul>
    </form>
  );
}
