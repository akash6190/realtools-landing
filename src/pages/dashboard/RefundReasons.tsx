import React from "react";

const reasons = [
  {
    label: "Having difficulties using the product",
    data: "29%",
    color: "#6366f1",
  },
  {
    label: "Missing features I need",
    data: "22%",
    color: "#3730a3",
  },
  {
    label: "Not satisfied about the quality of the product",
    data: "18%",
    color: "#38bdf8",
  },
  {
    label: "The product doesn’t look as advertised",
    data: "14%",
    color: "#4ade80",
  },
  {
    label: "Other",
    data: "16%",
    color: "#e2e8f0",
  },
];

const RefundReasons: React.FC = () => {
  return (
    <div className="col-span-full xl:col-span-6 bg-white shadow-md hover:shadow-lg rounded-10 ">
      <header className="px-5 py-4 border-b border-slate-100">
        <h2 className="font-semibold text-slate-800">Reason for Refunds</h2>
      </header>
      <div className="px-5 py-3">
        <div className="flex items-start">
          <div className="text-3xl font-bold text-slate-800 mr-2">449</div>
          <div className="text-sm font-semibold text-white px-1.5 bg-yellow-500 rounded-full">
            -22%
          </div>
        </div>
      </div>
      <div className="px-5 flex flex-col">
        {/* Change the height attribute to adjust the chart height */}
        {reasons.map((r) => (
          <div key={r.label} className="flex gap-4 border-b border-b-slate-300 items-center py-3">
            <span
              className="w-3 h-3"
              style={{ backgroundColor: r.color }}
            ></span>
            <span className="grow">{r.label}</span>
            <span>{r.data}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RefundReasons;
