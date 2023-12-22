import ButtonLink from '@/components/buttons/buttonLink';
import React from 'react';

type ContentNavyT = {
  title?: string;
  titleMobile?: string;
  titleSize?: string;
  content: string;
  contentSize?: string;
  rounded: string;
  textButton: string;
};
export default function ContentNavy({
  title,
  titleMobile,
  titleSize,
  content,
  contentSize,
  rounded,
  textButton
}: ContentNavyT) {
  return (
    <div
      className={`flex flex-col md:flex-row md:items-center justify-between pb-5 pt-3 px-4 text-highlight mx-auto bg-navy shadow-md ${rounded}`}
    >
      <div className='mb-4 md:mb-0 '>
        {titleMobile ? (
          <h3 className={`${titleSize} md:hidden`}>{titleMobile}</h3>
        ) : (
          <h3 className={`md:hidden ${titleSize}`}>{title}</h3>
        )}
        {title && <h3 className={`hidden md:block ${titleSize}`}>{title}</h3>}
        <p className={`font-light ${contentSize}`}>{content}</p>
      </div>
      <div className="w-56 mt-2 flex gap-4 md:flex-row">
        <ButtonLink href='#' text={textButton} />
      </div>
    </div>
  );
}
