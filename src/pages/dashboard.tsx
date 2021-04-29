import { Flex, SimpleGrid, Box, Text, theme } from '@chakra-ui/react';
import dynamic from 'next/dynamic';
import { Header } from '../components/Header';
import { Sidebar } from '../components/Sidebar';

const Chart = dynamic(() => import('react-apexcharts'), {
  ssr: false
});

const options = {
  chart: {
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false,
    },
    foreColor: theme.colors.gray[500],
  },
  grid: {
    show: false,
  },
  dataLabels: {
    enabled: false,
  },
  tooltip: {
    enabled: false,
    x: {
      format: "dd MMM yyyy"
    }
  },
  xaxis: {
    type: "datetime",
    min: new Date("22 Apr 2021").getTime(),
    tickAmount: 6,
    axisBorder: {
      color: theme.colors.gray[600],
    },
    axisTicks: {
      color: theme.colors.gray[600],
    },
    categories: [
      '22 Apr 2021',
      '23 Apr 2021',
      '24 Apr 2021',
      '25 Apr 2021',
      '26 Apr 2021',
      '27 Apr 2021',
      '28 Apr 2021',
    ],
  },
  fill: {
    opacity: 0.3,
    type: 'gradient',
    gradient: {
      shade: 'dark',
      opacityFrom: 0.7,
      opacityTo: 0.3,
    },
  },
};

const series = [
  { name: 'series1', data: [21, 120, 34, 90, 12, 45, 120] }
]

export default function Dashboard() {
  return (
    <Flex direction="column" h="100vh">
      <Header />

      <Flex width="100%" maxWidth={1480} mx="auto" my="6" px="6">
        <Sidebar />

        <SimpleGrid flex="1" gap="4" minChildWidth="320px" align="flex-start">
          <Box
            p="8"
            pb="4"
            bg="gray.800"
            borderRadius={8}
          >
            <Text fontSize="large" mb="4">Inscritos da Semana</Text>
            <Chart options={options} series={series} type="area" height={160} />
          </Box>
          <Box
            p="8"
            pb="4"
            bg="gray.800"
            borderRadius={8}
          >
            <Text fontSize="large" mb="4">Taxa de Abertura</Text>
            <Chart options={options} series={series} type="area" height={160} />
          </Box>
        </SimpleGrid>
      </Flex>
    </Flex>
  );
}