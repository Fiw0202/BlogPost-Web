import { ExpandLess, ExpandMore, StarBorder } from "@mui/icons-material";
import {
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Collapse,
  List,
} from "@mui/material";
import { TablerIconsProps } from "@tabler/icons-react";

interface IList {
  open: boolean;
  item: IListDetail;
}

interface IListDetail {
  id: string;
  title: string;
  icon: (props: TablerIconsProps) => JSX.Element;
  href: string;
  subheader: ISubList[];
}

interface ISubList {
  id: string;
  title: string;
  icon: (props: TablerIconsProps) => JSX.Element;
  href: string;
}

const ItemAccordion = ({ item, open = true }: IList) => {
  return (
    <>
      <ListItemButton>
        <ListItemIcon>{/* <InboxIcon /> */}</ListItemIcon>
        <ListItemText primary={item.title} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={true} timeout="auto" unmountOnExit>
        {item.subheader.map((m) => {
          return (
            <>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon>
                    <StarBorder />
                  </ListItemIcon>
                  <ListItemText primary={m.title} />
                </ListItemButton>
              </List>
            </>
          );
        })}
      </Collapse>
    </>
  );
};

export default ItemAccordion;
