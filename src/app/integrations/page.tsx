'use client';
// Updated with animations by ChatGPT on 4/27/2024
import { motion } from 'framer-motion';
import SideNavigation from '@/components/ion/SideNavigation';
import Divider from '@/components/ui/Divider';
import { Tabs, TabsList, Tab } from '@/components/ui/Tabs';
import { useState } from 'react';
import { MagnifyingGlass } from '@phosphor-icons/react';
import Input from '@/components/ui/Input';
import IntegrationCard from '@/components/ion/IntegrationCard';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8, ease: 'easeOut' } },
};

const headerVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: 'easeOut' } 
  },
};

const availableIntegrationsVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: 'easeOut', delay: 0.3 } 
  },
};

function IntegrationsPage() {
  const [inputValue, setInputValue] = useState('');

  return (
    <div className="bg-base w-screen h-screen flex items-start">
      <SideNavigation />
      <motion.div
        className="h-full flex-1 flex-col flex items-center gap-y-5 p-5 overflow-y-scroll"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className="w-full flex items-center gap-x-5"
          variants={headerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="flex-col flex items-start gap-y-1">
            <div className="text-xl font-semibold text-base-foreground">Integrations</div>
            <div className="text-sm text-gray-600">
              Integrate with existing financial applications.
            </div>
          </div>
        </motion.div>
        <Divider />
        <motion.div
          className="w-full flex-1 flex-col max-w-[1200px] flex items-start gap-y-5"
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          <motion.div
            className="w-full flex justify-between items-start"
            variants={{
              hidden: { opacity: 0, y: -10 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
            }}
          >
            <Tabs defaultValue="All Apps">
              <TabsList>
                <Tab value="All Apps">All Apps</Tab>
                <Tab value="Connected">Connected</Tab>
                <Tab value="Disconnected">Disconnected</Tab>
              </TabsList>
            </Tabs>
            <Input
              placeholder="Search"
              iconLeading={
                <MagnifyingGlass size={16} className="text-foreground" weight={'bold'} />
              }
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
          </motion.div>
          <motion.div
            className="flex-col flex items-start gap-y-1 text-sm text-foreground"
            variants={availableIntegrationsVariants}
          >
            <div className="font-semibold">Available Integrations</div>
            <div>Integrations that are ready to be synced with your back-office system</div>
          </motion.div>
          <div className="w-full flex-1 flex-wrap flex items-start gap-x-5 gap-y-3 h-fit content-start">
            <IntegrationCard
              company="Expensify"
              description="Expense Reporting that doesn’t suck."
              logoSrc="/images/expensify-logo.png"
            />
            <IntegrationCard
              description="Modern banking solution for startups."
              company="Mercury"
              logoSrc="/images/mercury-logo.png"
            />
            <IntegrationCard
              description="Integration between financial platforms."
              company="Plaid"
              logoSrc="/images/plaid-logo.png"
            />
            <IntegrationCard
              description="#1 Accounting software for small businesses."
              company="QuickBooks"
              logoSrc="/images/quickbooks-logo.png"
            />
            <IntegrationCard
              description="Payments provider for businesses."
              company="Stripe"
              logoSrc="/images/stripe-logo.png"
            />
            <IntegrationCard
              description="401(k) with 3% cash back."
              company="Human Interest"
              logoSrc="/images/hi-logo.png"
            />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default IntegrationsPage;