import React from "react";
import AnalyticsCard from "../../components/dashboard/AnalyticsCard";
import AreaChart from "../../components/dashboard/AreaChart";
import Table from "../../components/dashboard/Table";
const Home = () => {
  return (
    <>
      <div className="m-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* AnalyticsCard will take the first column on all screen sizes */}
          <div className="md:col-span-1">
            <AnalyticsCard />
          </div>

          {/* AreaChart will take the second column on all screen sizes */}
          <div className="md:col-span-1">
            <div className="rounded-full">
              <AreaChart />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 mt-4">
          {/* AnalyticsCard will take the first column on all screen sizes */}
          <Table />
        </div>
      </div>
    </>
  );
};

export default Home;
