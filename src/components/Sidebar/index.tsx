import { Box, Icon, Link, Stack, Text } from "@chakra-ui/react";
import { RiContactsLine, RiDashboardLine, RiGitMergeLine, RiInputMethodLine } from "react-icons/ri";
import { Navlink } from "./NavLink";
import { NavSection } from "./NavSection";

export function Sidebar(){
  return (
    <Box as='aside' w='64' mr='8'>
      <Stack spacing='12' align='flex-start'>
        <NavSection title="Geral">
          <Navlink icon={RiDashboardLine}>Dashboard</Navlink>
          <Navlink icon={RiContactsLine}>Usuarios</Navlink>
        </NavSection>
        <NavSection title="Automação">
          <Navlink icon={RiInputMethodLine}>Formulários</Navlink>
          <Navlink icon={RiGitMergeLine}>Automação</Navlink>
        </NavSection>
      </Stack>
    </Box>
  )
}