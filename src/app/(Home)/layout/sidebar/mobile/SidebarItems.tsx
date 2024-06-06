import React from "react";

import { usePathname } from "next/navigation";
import { Box, List } from "@mui/material";
import Menuitems from "../MenuItems";
import NavMobileItem from "./NavItem";

const SidebarMobileItems = () => {
  const pathname = usePathname();

  return (
    <Box sx={{ px: 2 }}>
      <List sx={{ pt: 0 }} className="sidebarNav" component="div">
        {Menuitems.map((item, index) => {
          return (
            <>
              <NavMobileItem key={item.id} item={item} pathDirect={pathname} />
            </>
          );
        })}
      </List>
    </Box>
  );
};
export default SidebarMobileItems;
