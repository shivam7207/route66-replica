import React, { useState } from "react";
import { Tab, Tabs, TabPanel } from "react-tabs";
import CarCards from "./CarCards";
import Link from "next/link";

const Index = () => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  const tabNames = ["PROPERTY", "CONDOS", "LAND"];

  const handleTabSelect = (index: number) => {
    setActiveTabIndex(index);
  };

  return (
    <>
      <Tabs selectedIndex={activeTabIndex} onSelect={handleTabSelect}>
        <TabPanel>
          <div className="row p-5" data-aos="fade">
            <CarCards />
          </div>
        </TabPanel>
        <div className="d-flex justify-content-center mb-20">
          <button type="button" className="text-center md-mt-50">
            <Link
              href="/pages-menu/service-v1"
              className="btn-twentyTwo fw-500 tran3s"
              data-aos="fade-left"
            >
              View all Cars
            </Link>
          </button>
        </div>
      </Tabs>
    </>
  );
};

export default Index;
