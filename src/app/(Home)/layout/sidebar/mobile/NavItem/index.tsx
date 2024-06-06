import React, { useState } from "react";

// mui imports
import {
  ListItemIcon,
  ListItem,
  List,
  styled,
  ListItemText,
  useTheme,
  ListItemButton,
  Collapse,
} from "@mui/material";
import Link from "next/link";
import { ExpandLess, ExpandMore } from "@mui/icons-material";

interface ItemNavGroup {
  id: string | number;
  title: string;
  icon: any;
  href: any;
}

interface NavGroup {
  [x: string]: any;
  id?: string | number;
  navlabel?: boolean;
  subheader?: ItemNavGroup[];
  title?: string;
  icon?: any;
  href?: any;
  onClick?: React.MouseEvent<HTMLButtonElement, MouseEvent>;
}

interface ItemType {
  item: NavGroup;
  hideMenu?: any;
  level?: number | any;
  pathDirect: string;
}

const NavMobileItem = ({ item, level, pathDirect }: ItemType) => {
  const Icon = item.icon;
  const theme = useTheme();
  const itemIcon = <Icon stroke={1.5} size="1.3rem" />;

  const ListItemStyled = styled(ListItem)(() => ({
    padding: 0,
    ".MuiButtonBase-root": {
      whiteSpace: "nowrap",
      marginBottom: "8px",
      padding: "8px 10px",
      borderRadius: "8px",
      backgroundColor: "inherit",
      color: theme.palette.text.secondary,
      paddingLeft: "10px",
      "&:hover": {
        backgroundColor: theme.palette.primary.light,
        color: theme.palette.primary.main,
      },
      "&.Mui-selected": {
        color: "white",
        backgroundColor: theme.palette.primary.main,
        "&:hover": {
          backgroundColor: theme.palette.primary.main,
          color: "white",
        },
      },
    },
  }));

  const [isOpen, setIsOpen] = useState(false);

  return (
    <List component="div" disablePadding key={item.id}>
      <ListItemStyled>
        <ListItemButton
          component={Link}
          href={item.href}
          disabled={item.disabled}
          selected={pathDirect === item.href}
          target={item.external ? "_blank" : ""}
          onClick={() => setIsOpen(!isOpen)}
        >
          <ListItemIcon
            sx={{
              minWidth: "36px",
              p: "3px 0",
              color: theme.palette.primary.contrastText,
            }}
          >
            {itemIcon}
          </ListItemIcon>
          <ListItemText
            sx={{
              color: theme.palette.primary.contrastText,
              "&:hover": {
                color: theme.palette.text.primary,
              },
            }}
          >
            {item.title}
          </ListItemText>
        </ListItemButton>
      </ListItemStyled>
    </List>
  );
};

export default NavMobileItem;
