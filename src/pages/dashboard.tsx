import { Box, Flex, SimpleGrid, Text } from "@chakra-ui/react";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";

import { chartOptions, chartSeries } from "../utils/chartConfig";
import dynamic from 'next/dynamic'
const Chart = dynamic(() => import('react-apexcharts'), {
  ssr: false
}) 

export default function Dashboard(){
  return (
    <Flex direction='column' h='100vh'>
      <Header/>
      <Flex w='100%' my='6' maxW={1480} mx='auto' px='6'>
        <Sidebar/>
        <SimpleGrid flex='1' gap='4' minChildWidth='320px' alignContent='flex-start'>
          <Box
            p={['6', '8']}
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
            p={['6', '8']}
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