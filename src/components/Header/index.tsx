import { Flex, Icon, IconButton, useBreakpointValue } from "@chakra-ui/react";

import { useSidebarDrawer } from "../../context/SidebarContext";
import { RiMenuLine } from "react-icons/ri";

import { Logo } from "./Logo";
import { NotificationsNav } from "./NotificationsNav";
import { Profile } from "./Profile";
import { SearchBox } from "./SearchBox";

export function Header(){
  const { onOpen } = useSidebarDrawer()

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  })

  return (
    <Flex
      w='100%'
      as='header'
      maxW={1480}
      h="20"
      mx='auto'
      px='6'
      align="center"
    >
      {!isWideVersion && (
        <IconButton
          aria-label='Open navigation'
          icon={<Icon as={RiMenuLine}/>}
          fontSize='24'
          variant='unstyled'
          onClick={onOpen}
          mr='2'
          mt='2'
        />
        
      )}
      <Logo/>
      { isWideVersion && <SearchBox/> }
      
      <Flex align='center' ml='auto'>
        <NotificationsNav/>
        <Profile showProfileData={isWideVersion}/>        
      </Flex>
    </Flex>
  )
}