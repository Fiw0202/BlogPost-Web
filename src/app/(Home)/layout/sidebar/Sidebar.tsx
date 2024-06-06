import { useMediaQuery, Box, Drawer } from "@mui/material";
import SidebarItems from "./SidebarItems";
import theme from "@/utils/theme";
import { IconArrowRight } from "@tabler/icons-react";
import SidebarMobileItems from "./mobile/SidebarItems";

interface ItemType {
  isMobileSidebarOpen: boolean;
  onSidebarClose: (event: React.MouseEvent<HTMLElement>) => void;
  isSidebarOpen: boolean;
}

const Sidebar = ({
  isMobileSidebarOpen,
  onSidebarClose,
  isSidebarOpen,
}: ItemType) => {
  const lgUp = useMediaQuery((theme: any) => theme.breakpoints.up("lg"));
  console.log(lgUp);

  const sidebarWidth = "270px";

  if (lgUp) {
    return (
      <Box
        sx={{
          width: sidebarWidth,
          flexShrink: 0,
        }}
      >
        {/* Sidebar for desktop */}
        <Drawer
          anchor="left"
          open={isSidebarOpen}
          variant="permanent"
          PaperProps={{
            sx: {
              width: sidebarWidth,
              boxSizing: "border-box",
              border: "0",
              top: 60,
              backgroundColor: theme.palette.primary.light,
            },
          }}
        >
          {/* Sidebar Box */}
          <Box
            sx={{
              height: "100%",
            }}
            py={2}
          >
            <Box>
              {/* Sidebar Items */}
              <Box mt={3}>
                <SidebarItems />
              </Box>
            </Box>
          </Box>
        </Drawer>
      </Box>
    );
  }

  return (
    <Drawer
      anchor="right"
      open={isMobileSidebarOpen}
      onClose={onSidebarClose}
      variant="temporary"
      PaperProps={{
        sx: {
          width: sidebarWidth,
          boxShadow: (theme) => theme.shadows[8],
          backgroundColor: theme.palette.primary.main,
        },
      }}
    >
      <Box px={2} py={2} onClick={onSidebarClose}>
        <IconArrowRight
          color={theme.palette.primary.contrastText}
          style={{ cursor: "pointer" }}
        />
      </Box>

      {/* Sidebar For Mobile */}
      <SidebarMobileItems />
    </Drawer>
  );
};

export default Sidebar;
