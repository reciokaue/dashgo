import { Box, Stack } from "@chakra-ui/react";
import { PaginationItem } from "./PaginationItem";

const pages = [1,2,3,4,5, 6]

export function Pagination(){
  return (
    <Stack
      direction={['column', 'row']}
      mt='8'
      justify='space-between'
      align='center'
      spacing='6'
    >
      <Box>
        <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
      </Box>
      <Stack direction='row' spacing='2'>
        {pages.map((page, index) => (
          <PaginationItem pageNumber={page} isCurrent={index == 0}/>
        ))}
      </Stack>
    </Stack>
  )
}