import InfoCircle from "@/components/icons/info-circle";

interface DollarSymbolProps {
  dma_min: number;
  dma_max: number;
  average_cost: number;
  new?: boolean;
  lean?: boolean;
}

export default function GenerateDollarSymbols({
  dma_min,
  dma_max,
  average_cost,
  new: isNew,
  lean:isLean,
}: DollarSymbolProps) {
  const normalizedDmaMin = Number(dma_min);
  const normalizedDmaMax = Number(dma_max);
  const normalizedAverageCost = Number(average_cost);

  const dma_range = [
    (normalizedDmaMax - normalizedDmaMin) / 3 + normalizedDmaMin,
    ((normalizedDmaMax - normalizedDmaMin) * 2) / 3 + normalizedDmaMin,
  ];

  const activeDollars =
    normalizedAverageCost >= normalizedDmaMin &&
    normalizedAverageCost <= normalizedDmaMax
      ? normalizedAverageCost <= dma_range[0]
        ? 1
        : normalizedAverageCost <= dma_range[1]
        ? 2
        : 3
      : null;

  if (isNew && activeDollars) {
    return (
      <div className="px-1">
        <span className="font-bold text-link">{"$".repeat(activeDollars)}</span>
        {activeDollars < 3 && (
          <span className="font-bold  text-background2">
            {"$".repeat(3 - activeDollars)}
          </span>
        )}
      </div>
    );
  }

  if(isLean && activeDollars){
    return "$".repeat(activeDollars)
  }

  return activeDollars ? (
    <div className="flex  items-center bg-highlight p-1 max-w-fit">
      <div className="px-1">
        <span className="font-bold text-link">{"$".repeat(activeDollars)}</span>
        {activeDollars < 3 && (
          <span className="font-bold  text-background2">
            {"$".repeat(3 - activeDollars)}
          </span>
        )}
      </div>

      <div className="text-xs max-w-prose font-normal leading-3 px-0 align-middle">
        for this area
      </div>

      <div className="relative flex flex-col items-center group">
        <InfoCircle />
        <div className="absolute bottom-0 z-auto flex-col items-center hidden mb-6 group-hover:flex group-hover:z-50">
          <span className="relative z-10 p-2 text-xs w-56 leading-1 text-white whitespace-no-wrap bg-black shadow-lg">
            Price is calculated from average state costs, amenity information,
            online ratings, local placement analysis, and several additional
            factors.
          </span>
          <div className="w-3 h-3 -mt-2 rotate-45 bg-black"></div>
        </div>
      </div>
    </div>
  ) : null;
}
