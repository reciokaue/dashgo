import { Box, Flex, SimpleGrid, Text, theme } from "@chakra-ui/react";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";

import dynamic from 'next/dynamic'
const Chart = dynamic(() => import('react-apexcharts'), {
  ssr: false
}) 

const chartOptions = {
  chart: {
    toolbar: {
      show: false
    },
    zoom: {
      enabled: false
    },
    foreColor: theme.colors.gray[500],
  },
  grid: {
    show: false
  },
  dataLabels: {
    enabled: false
  },
  tooltip: {
    enabled: false
  },
  xaxis:{
    type: 'datetime',
    axisBorder: {
      color: theme.colors.gray[600]
    },
    axisTicks: {
      color: theme.colors.gray[600]
    },
    categories: [
      '2021-03-12t00:00:00.000Z',
      '2021-03-13t00:00:00.000Z',
      '2021-03-14t00:00:00.000Z',
      '2021-03-15t00:00:00.000Z',
      '2021-03-16t00:00:00.000Z',
      '2021-03-17t00:00:00.000Z',
      '2021-03-18t00:00:00.000Z',
    ]
  },
  fill: {
    opacity: 0.3,
    type: 'gradient',
    gradient: {
      shade: 'dark',
      opacityFrom: 0.7,
      opacityTo: 0.3,
    }
  }
}
const chartSeries = [
  {name: 'series1', data: [36,123, 23, 43, 75, 123, 54]}
]

export default function Dashboard(){
  return (
    <Flex direction='column' h='100vh'>
      <Header/>
      <Flex w='100%' my='6' maxW={1480} mx='auto' px='6'>
        <Sidebar/>
        <SimpleGrid flex='1' gap='4' minChildWidth='320px' alignContent='flex-start'>
          <Box
            p='8'
            bg='gray.800'
            borderRadius={8}
            pb='4'
          >
            <Text fontSize='lg' mb='4'>Inscritos da semana</Text>
            <Chart
              type='area'
              height={160}
              options={chartOptions}
              series={chartSeries}
            />
          </Box>
          <Box
            p='8'
            bg='gray.800'
            borderRadius={8}
            pb='4'
          >
            <Text fontSize='lg' mb='4'>Taxa de abertura</Text>
            <Chart
              type='area'
              height={160}
              options={chartOptions}
              series={chartSeries}
            />
          </Box>
        </SimpleGrid>
      </Flex>
    </Flex>
  )
}