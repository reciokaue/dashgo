import { Icon, Link as ChakraLink, LinkProps, Text } from "@chakra-ui/react"
import { ElementType } from "react"
import { ActiveLink } from "../ActiveLink"

interface NavLinkProps extends LinkProps{
  icon: ElementType
  children: string
  href: string
}

export function Navlink({icon, children, href, ...rest}: NavLinkProps){
  return (
    <ActiveLink href={href} passHref>
      <ChakraLink display='flex' align='center' {...rest}>
        <Icon as={icon} fontSize='20'/>
        <Text ml='4' fontWeight='medium'>{children}</Text>
      </ChakraLink>
    </ActiveLink>
  )
}