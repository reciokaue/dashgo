import { theme } from "@chakra-ui/react"
import { ApexOptions } from "apexcharts"

export const chartOptions: ApexOptions = {
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
export const chartSeries = [
  {name: 'series1', data: [31, 120, 10, 28, 61, 18, 109]}
]