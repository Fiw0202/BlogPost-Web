import React from "react";
import Menuitems from "./MenuItems";
import { usePathname } from "next/navigation";
import { Box, List } from "@mui/material";
import NavItem from "./NavItem";

const SidebarItems = () => {
  const pathname = usePathname();

  return (
    <Box sx={{ px: 2 }}>
      <List sx={{ pt: 0 }} className="sidebarNav" component="div">
        {Menuitems.map((item, index) => {
          return (
            <>
              <NavItem key={item.id} item={item} pathDirect={pathname} />
            </>
          );
        })}
      </List>
    </Box>
  );
};
export default SidebarItems;
