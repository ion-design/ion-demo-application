"use client";

// Generated with Ion on 6/19/2024, 10:30:32 PM
// Figma Link: https://www.figma.com/design/kQxbDOWBPaC4KqJOhw4JvW?node-id=2:3783
import {
  ArrowDown,
  ArrowUp,
  CalendarBlank,
  CaretDown,
  CurrencyDollar,
  MagnifyingGlass,
} from "@phosphor-icons/react/dist/ssr";
import { LineChart } from "@tremor/react";
import { type MouseEvent, useState } from "react";
import Datepicker from "@/components/ion/Datepicker";
import SideNavigation from "@/components/ion/SideNavigation";
import TokenMetric from "@/components/ion/TokenMetric";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import { Tab, Tabs, TabsList } from "@/components/ui/Tabs";
function DashboardExample() {
  const [inputValue, setInputValue] = useState("");
  function buyClickHandler(e: MouseEvent<HTMLButtonElement>) {
    alert("buyClickHandler fired");
  }
  return (
    <div className="w-[1200px] flex">
      <SideNavigation />
      <div className="bg-white flex-1 h-full w-full flex flex-col items-center gap-5 p-10">
        <div className="w-full flex justify-between items-center">
          <div className="bg-white flex items-center gap-5">
            <div className="bg-gray-900 flex flex-col justify-center items-center p-2.5 rounded">
              <img
                className="h-4 w-4"
                src="/images/dashboard-example/Logo.svg"
                alt="Logo"
              />
            </div>
            <Tabs defaultValue="Overview">
              <TabsList>
                <Tab value="Overview">Overview</Tab>
                <Tab value="Pools">Pools</Tab>
                <Tab value="Tokens">Tokens</Tab>
              </TabsList>
            </Tabs>
          </div>
          <div className="flex justify-center items-start gap-5">
            <Input
              className="w-[250px]"
              placeholder="Search"
              iconLeading={<MagnifyingGlass size={16} weight={"bold"} />}
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <Button
              iconLeading={<CurrencyDollar size={16} weight={"bold"} />}
              emphasis="high"
              color="primary"
              size="md"
              onClick={buyClickHandler}
            >
              Buy
            </Button>
          </div>
        </div>
        <div className="w-full flex items-start gap-5">
          <TokenMetric
            badge={
              <Badge
                iconLeading={<ArrowUp size={12} weight={"bold"} />}
                emphasis="medium"
                color="green"
                size="md"
              >
                8.23%
              </Badge>
            }
            metric="$1.35b"
            title="Volume 24H"
          />
          <TokenMetric
            badge={
              <Badge
                iconLeading={<ArrowDown size={12} weight={"bold"} />}
                emphasis="medium"
                color="red"
                size="md"
              >
                4.28%
              </Badge>
            }
            metric="$4.56"
            title="TVL"
          />
        </div>
        <div className="w-full flex flex-col gap-2">
          <div className="text-lg font-semibold text-base-foreground">
            Overview
          </div>
          <div className="bg-gray-50 w-full flex flex-col items-center px-2 py-5 rounded-radius-sm border border-gray-300">
            <div className="w-full flex justify-between items-center px-5">
              <div className="flex flex-col justify-center">
                <div className="text-sm text-gray-400">TVL</div>
                <div className="text-3xl font-medium text-base-foreground">
                  $2.54b
                </div>
              </div>
              <div className="flex items-start gap-5">
                <Datepicker
                  className="w-[250px]"
                  iconTrailing={<CaretDown size={16} weight={"bold"} />}
                  iconLeading={<CalendarBlank size={16} weight={"regular"} />}
                />
                <Tabs defaultValue="D">
                  <TabsList>
                    <Tab value="D">D</Tab>
                    <Tab value="W">W</Tab>
                    <Tab value="M">M</Tab>
                  </TabsList>
                </Tabs>
              </div>
            </div>
            <LineChart
              valueFormatter={(number) =>
                `$${Intl.NumberFormat().format(number).toString()}`
              }
              index={"number"}
              data={[
                {
                  number: 1,
                  Ether: 199,
                  USDC: 184,
                },
                {
                  number: 2,
                  Ether: 228,
                  USDC: 236,
                },
                {
                  number: 3,
                  Ether: 364,
                  USDC: 358,
                },
                {
                  number: 4,
                  Ether: 452,
                  USDC: 408,
                },
                {
                  number: 5,
                  Ether: 505,
                  USDC: 575,
                },
              ]}
              categories={["Ether", "USDC"]}
              yAxisWidth={48}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default DashboardExample;
