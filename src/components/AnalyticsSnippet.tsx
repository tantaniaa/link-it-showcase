
import React from "react";
import { ArrowUp, ArrowDown } from "lucide-react";

type AnalyticsSnippetProps = {
  views: number;
  waClicks: number;
  trendingUp?: boolean;
};

const AnalyticsSnippet: React.FC<AnalyticsSnippetProps> = ({
  views,
  waClicks,
  trendingUp = true
}) => (
  <div className="mx-auto mt-6 mb-2 flex justify-center">
    <div className="bg-food-cta text-food-bg px-6 py-2 rounded-lg flex gap-8 items-center shadow font-nunito font-bold text-base">
      <span>
        <span className="opacity-80">Views:</span> {views}{" "}
        {trendingUp ? (
          <ArrowUp size={16} className="inline ml-1 text-green-300" />
        ) : (
          <ArrowDown size={16} className="inline ml-1 text-red-300" />
        )}
      </span>
      <span>
        <span className="opacity-80">WA Clicks:</span> {waClicks}
      </span>
    </div>
  </div>
);

export default AnalyticsSnippet;
