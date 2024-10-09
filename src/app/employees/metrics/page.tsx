'use client';
import { MouseEvent, useState } from 'react';
import { DownloadSimple, ArrowDown, ArrowUp, FunnelSimple } from '@phosphor-icons/react';
import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';
import Input from '@/components/ui/Input';
import { Tabs, TabsList, Tab } from '@/components/ui/Tabs';
import { LineChart } from '@tremor/react';
import MetricsCard from '@/components/ion/MetricsCard';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { 
      staggerChildren: 0.2,
      duration: 0.6,
      ease: 'easeOut'
    }
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' }
  },
};

function EmployeeMetricsPage() {
  function exportClickHandler(e: MouseEvent<HTMLButtonElement>) {
    alert('exportClickHandler fired');
  }
  const [inputValue, setInputValue] = useState('');
  return (
    <motion.div
      className="bg-base w-screen h-screen flex justify-center items-start p-10"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div
        className="flex-1 flex-col max-w-[1000px] flex gap-3 p-5"
        variants={containerVariants}
      >
        <motion.div
          className="w-full flex justify-between items-center"
          variants={itemVariants}
        >
          <motion.div
            className="text-lg font-semibold text-foreground"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5, ease: 'easeOut' }}
          >
            Employee Metrics
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.5, ease: 'easeOut' }}
          >
            <Button
              iconLeading={<DownloadSimple size={16} weight={'bold'} />}
              emphasis="high"
              color="primary"
              size="md"
              onClick={exportClickHandler}
            >
              Export
            </Button>
          </motion.div>
        </motion.div>
        <motion.div
          className="w-full flex items-start gap-5"
          variants={containerVariants}
        >
          <MetricsCard
            metric="$6,666"
            badge={
              <Badge
                iconLeading={<ArrowDown size={12} weight={'bold'} />}
                emphasis="medium"
                color="red"
                size="md"
              >
                Down
              </Badge>
            }
            title="Average Burn (Monthly)"
            className="w-full"
          />
          <MetricsCard
            metric="$4,500"
            badge={
              <Badge
                iconLeading={<ArrowUp size={12} weight={'bold'} />}
                emphasis="medium"
                color="blue"
                size="md"
              >
                Up
              </Badge>
            }
            title="Average Revenue Generated"
            className="w-full"
          />
          <MetricsCard
            metric="8"
            badge={
              <Badge
                iconLeading={<ArrowUp size={12} weight={'bold'} />}
                emphasis="medium"
                color="blue"
                size="md"
              >
                Up
              </Badge>
            }
            title="Merged Features"
            className="w-full"
          />
        </motion.div>
        <motion.div
          className="w-full flex justify-between items-start py-3"
          variants={itemVariants}
        >
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5, ease: 'easeOut' }}
            className="w-full"
          >
            <Input
              placeholder="Filter"
              iconLeading={<FunnelSimple size={16} weight={'bold'} />}
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5, ease: 'easeOut' }}
          >
            <Tabs>
              <TabsList>
                <Tab value="Burn">Burn</Tab>
                <Tab value="Revenue">Revenue</Tab>
                <Tab value="Features">Features</Tab>
              </TabsList>
            </Tabs>
          </motion.div>
        </motion.div>
        <motion.div
          className="w-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6, ease: 'easeOut' }}
        >
          <LineChart
            className="h-[364px]"
            valueFormatter={(number) => `$${Intl.NumberFormat('us').format(number).toString()}`}
            index={'date'}
            data={[
              {
                date: 'Feb 19',
                Burn: 197,
                Revenue: 163,
              },
              {
                date: 'Mar 19',
                Burn: 282,
                Revenue: 262,
              },
              {
                date: 'Apr 19',
                Burn: 304,
                Revenue: 334,
              },
              {
                date: 'May 19',
                Burn: 360,
                Revenue: 416,
              },
              {
                date: 'Jun 19',
                Burn: 600,
                Revenue: 440,
              },
            ]}
            categories={['Burn', 'Revenue']}
            yAxisWidth={48}
            animate={{
              appear: {
                animation: 'oneWay',
                duration: 1,
              },
            }}
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
export default EmployeeMetricsPage;