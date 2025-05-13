import React from "react";
import Feetables from "./Tables/Feetables";
import FeeSummaryCard from "../components/Card/FeeSummaryCard";

const FeePage = () => {
  return (
    <div className="p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Fee Structures</h1>
        <p className="text-gray-500">
          Manage and organize all your institution's fee structures
        </p>
      </div>

     <FeeSummaryCard/>

     
      <div className="rounded-lg border border-[#333333]/10  shadow-sm ">
        <div className="flex flex-col space-y-1.5 p-6 pb-2">
          <h3 className="tracking-tight text-lg font-semibold">
            Fee Structures Management
          </h3>
          <p className="text-sm text-muted-foreground">
            Create and manage fee structures for various courses, departments, and services
          </p>
        </div>

        <div className="p-6 pt-0">
          <div className="flex justify-between items-center mb-6">
            {/* table Tabs */}
            <div className="w-fit border border-[#333333]/10 px-4 py-1 rounded-md">
              <div className="inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground">
                {["All Structures", "Degree Fees", "Residence Fees", "Additional Fees"].map((tab, idx) => (
                  <button
                    key={idx}
                    type="button"
                    className={`inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm ${idx === 0 ? "bg-background text-foreground shadow-sm" : ""}`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>

            {/* Search , Button */}
            <div className="flex items-center gap-3">
              <div className="relative">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-search absolute left-2.5 top-2.5 h-4 w-4 text-gray-500"
                >
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.3-4.3" />
                </svg>
                <input
                  type="search"
                  className="flex h-10 rounded-md border border-[#333333]/10 bg-[#ffffffb2] px-3 py-2 text-base ring-offset-background pl-9 w-[250px] placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  placeholder="Search fee structures..."
                />
              </div>
              <button className="inline-flex items-center justify-center gap-2 text-sm font-medium h-10 px-4 py-2 rounded-md bg-[#FC4F00] text-white hover:bg-uni-orange/90">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-plus mr-2 h-4 w-4"
                >
                  <path d="M5 12h14" />
                  <path d="M12 5v14" />
                </svg>
                Create New
              </button>
            </div>
          </div>

          {/* Table Placeholder */}
          <div className="border border-[#333333]/10 p-4 text-center text-sm rounded-md">
           <Feetables/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeePage;
