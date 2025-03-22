"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { tabData } from "@/lib/data";

export default function TabSection() {
  const [activeTab, setActiveTab] = useState("Market Prediction");
  const [previousTab, setPreviousTab] = useState("Market Prediction");
  const [activeIndex, setActiveIndex] = useState(0);
  const tabRefs = useRef<{ [key: string]: HTMLButtonElement | null }>({});
  const tabContainerRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  const [indicatorStyle, setIndicatorStyle] = useState({
    left: 0,
    width: 0,
  });
  const [scrollPosition, setScrollPosition] = useState(0);
  const [maxScroll, setMaxScroll] = useState(0);
  const [visibleTabCount, setVisibleTabCount] = useState(2);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const index = tabData.findIndex((tab) => tab.id === activeTab);
    setActiveIndex(index >= 0 ? index : 0);
  }, [activeTab]);

  useEffect(() => {
    const currentTab = tabRefs.current[activeTab];
    if (currentTab) {
      setIndicatorStyle({
        left: currentTab.offsetLeft,
        width: currentTab.offsetWidth,
      });

      if (tabContainerRef.current && window.innerWidth < 768) {
        const container = tabContainerRef.current;
        const tabIndex = tabData.findIndex((tab) => tab.id === activeTab);
        const scrollAmount =
          Math.floor(tabIndex / visibleTabCount) *
          (container.scrollWidth / Math.ceil(tabData.length / visibleTabCount));
        container.scrollTo({ left: scrollAmount, behavior: "smooth" });
      }
    }
  }, [activeTab, visibleTabCount]);

  useEffect(() => {
    const updateScrollInfo = () => {
      if (tabContainerRef.current) {
        const container = tabContainerRef.current;
        setMaxScroll(container.scrollWidth - container.clientWidth);

        if (window.innerWidth < 640) {
          setVisibleTabCount(2);
          setIsMobile(true);
        } else if (window.innerWidth < 768) {
          setVisibleTabCount(3);
          setIsMobile(true);
        } else {
          setVisibleTabCount(tabData.length);
          setIsMobile(false);
        }
      }
    };

    updateScrollInfo();
    window.addEventListener("resize", updateScrollInfo);
    return () => window.removeEventListener("resize", updateScrollInfo);
  }, []);

  const handleScroll = () => {
    if (tabContainerRef.current) {
      setScrollPosition(tabContainerRef.current.scrollLeft);
    }
  };

  const handleTabChange = (tabId: string) => {
    setPreviousTab(activeTab);
    setActiveTab(tabId);
  };

  // Scroll tabs left or right by page
  const scrollTabs = (direction: "left" | "right") => {
    if (tabContainerRef.current) {
      const container = tabContainerRef.current;
      const pageWidth = container.clientWidth;

      const newScrollPosition =
        direction === "left"
          ? Math.max(0, container.scrollLeft - pageWidth)
          : Math.min(maxScroll, container.scrollLeft + pageWidth);

      container.scrollTo({ left: newScrollPosition, behavior: "smooth" });
    }
  };

  return (
    <section className="w-full py-16 bg-white text-gray-900">
      <div className="max-w-6xl mx-auto text-center mb-12 px-4 md:px-12">
        <h2 className="text-3xl md:text-5xl font-bold text-[#22263F] mb-4">
          AI Models tailored for your <br /> business needs
        </h2>
        <p className="text-[#828282] max-w-3xl mx-auto">
          Leverage the power of AI to automate, analyze, and optimize your
          workflows. Our specialized models are designed to fit different
          business needs
        </p>
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-center mb-12 relative px-10 md:px-0">
          <div className="md:hidden absolute left-0 z-20">
            {scrollPosition > 5 && (
              <button
                onClick={() => scrollTabs("left")}
                className="bg-white rounded-full shadow-md p-2 hover:bg-gray-100"
                aria-label="Scroll tabs left"
              >
                <ChevronLeft className="h-6 w-6 text-gray-700" />
              </button>
            )}
          </div>

          <div
            className="inline-flex p-1 border-[#E4E4E7] border rounded-[12px] relative overflow-x-auto scrollbar-hide w-full md:w-auto"
            ref={tabContainerRef}
            onScroll={handleScroll}
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            <motion.div
              className="absolute top-1 bottom-1 rounded-[12px] bg-[#03217F] z-0 shadow-[0px_4px_6px_-2px_rgba(16,24,40,0.03),0px_12px_16px_-4px_rgba(16,24,40,0.08)]"
              initial={false}
              animate={{
                left: indicatorStyle.left,
                width: indicatorStyle.width,
              }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 30,
              }}
            />

            <div className="flex md:inline-flex w-full">
              {tabData.map((tab) => (
                <motion.button
                  key={tab.id}
                
                  ref={(el) => {
                    tabRefs.current[tab.id] = el;
                  }}
                  onClick={() => handleTabChange(tab.id)}
                  className={`px-4 py-2 text-sm md:text-base font-medium rounded-full transition-colors relative z-10 whitespace-nowrap flex-1 md:flex-none ${
                    activeTab === tab.id
                      ? "text-white"
                      : "text-[#AAAAAA] hover:text-gray-900"
                  }`}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  {tab.id}
                </motion.button>
              ))}
            </div>
          </div>

          <div className="md:hidden absolute right-0 z-20">
            {scrollPosition < maxScroll - 5 && (
              <button
                onClick={() => scrollTabs("right")}
                className="bg-white rounded-full shadow-md p-2 hover:bg-gray-100"
                aria-label="Scroll tabs right"
              >
                <ChevronRight className="h-6 w-6 text-gray-700" />
              </button>
            )}
          </div>
        </div>
      </div>

      <div className="relative w-full overflow-hidden">
        {isMobile && (
          <>
            <button
              onClick={() => {
                const prevIndex =
                  (activeIndex - 1 + tabData.length) % tabData.length;
                setActiveTab(tabData[prevIndex].id);
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full shadow-lg p-2"
              aria-label="Previous tab"
            >
              <ChevronLeft className="h-5 w-5 text-gray-700" />
            </button>

            <button
              onClick={() => {
                const nextIndex = (activeIndex + 1) % tabData.length;
                setActiveTab(tabData[nextIndex].id);
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full shadow-lg p-2"
              aria-label="Next tab"
            >
              <ChevronRight className="h-5 w-5 text-gray-700" />
            </button>
          </>
        )}

        <div
          ref={sliderRef}
          className="w-full overflow-visible px-4 py-10 md:px-0"
        >
          <div className="max-w-[1400px] mx-auto relative">
            <motion.div
              className="flex"
              style={{
                width: `${tabData.length * 100}%`,
                transition: "1s all ease",
                transform: `translateX(calc(-${
                  activeIndex * (100 / tabData.length)
                }%))`,
              }}
              transition={{ type: "slide", stiffness: 300, damping: 30 }}
            >
              {tabData.map((tab, index) => {
                const isActive = tab.id === activeTab;

                return (
                  <div
                    key={tab.id}
                    className="px-4 md:px-6"
                    style={{ width: `${100 / tabData.length}%` }}
                  >
                    <motion.div
                      className={`bg-[#F6FAF3] rounded-xl overflow-hidden  cursor-pointer`}
                      style={{
                        transition: "1s all ease",
                      }}
                      animate={{
                        y: isActive ? -20 : 30,
                        scale: isActive ? 1 : 0.95,
                        opacity: isActive ? 1 : 0.7,
                      }}
                      onClick={() => !isActive && setActiveTab(tab.id)}
                    >
                      <div className="flex flex-col-reverse md:grid md:grid-cols-2 items-center">
                        {/* Text Section */}
                        <motion.div
                          initial={{ opacity: 0, y: 30 }}
                          animate={
                            isActive
                              ? { opacity: 1, y: 0 }
                              : { opacity: 0, y: 30 }
                          }
                          transition={{ duration: 0.6, ease: "easeOut" }}
                          className="p-6 md:p-8 w-[30.57rem] flex flex-col gap-[2rem] md:text-left px-10"
                        >
                          <div className="text-[#828282] text-[19px]">
                            {tab.id}
                          </div>
                          <h3 className="text-2xl font-semibold md:text-[42.9px] leading-[100%] tracking-[-0.02em] text-[#22263F]">
                            {tab.title}
                          </h3>
                          <Button className="bg-[#03217F] w-[30%] hover:bg-blue-900 text-white">
                            Learn More
                          </Button>
                        </motion.div>

                        {/* Image Section */}
                        <motion.div
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={
                            isActive
                              ? { opacity: 1, scale: 1 }
                              : { opacity: 0, scale: 0.9 }
                          }
                          transition={{
                            duration: 0.6,
                            ease: "easeOut",
                            delay: 0.3,
                          }}
                          className="md:h-[513px] md:mt-16 rounded-tl-[12px]"
                        >
                          <Image
                            src={tab.image || "/placeholder.svg"}
                            alt={tab.id}
                            width={500}
                            height={300}
                            className="w-full h-full object-cover rounded-tl-xl"
                          />
                        </motion.div>
                      </div>
                    </motion.div>
                  </div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
