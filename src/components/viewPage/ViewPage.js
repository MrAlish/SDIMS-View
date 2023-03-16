import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Avatar, Badge, Collapse } from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import dash from './sidebar/data/Dashboard'
import common from './sidebar/data/Common'
import planning from './sidebar/data/Planning'
import revenue from './sidebar/data/Revenue'

import { useRouter } from "next/router";
import { useSelector } from "react-redux";

const drawerWidth = 250;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function ViewPage(props) {
  const userData = useSelector((state) => state.userDetail);

  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
 

  // for dashboard
  const [openDash,setOpenDash] = React.useState(false)
  const [openDash2,setOpenDash2] = React.useState(false)

  // For common
  const [openCommon,setOpenCommon] = React.useState(false)
  const [openCommon2,setOpenCommon2] = React.useState(false)

  // For planning
  const [openPlanning,setOpenPlanning] = React.useState(false)
  const [openPlanning2,setOpenPlanning2] = React.useState(false)

  // For Revenue
  const [openRevenue,setOpenRevenue] = React.useState(false)
  const [openRevenue2,setOpenRevenue2] = React.useState(false)

  const [commonDataShow, setCommonDataShow] = React.useState(false);

  // const handleClick1 = () => {
  //   setOpen1(!open1);
  // };

  // const handleDrawerOpen = () => {
  //   setOpen(true);
  // };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
      backgroundColor: "#44b700",
      color: "#44b700",
      boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
      "&::after": {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        borderRadius: "50%",
        animation: "ripple 1.2s infinite ease-in-out",
        border: "1px solid currentColor",
        content: '""',
      },
    },
    "@keyframes ripple": {
      "0%": {
        transform: "scale(.8)",
        opacity: 1,
      },
      "100%": {
        transform: "scale(2.4)",
        opacity: 0,
      },
    },
  }));

  const router = useRouter();
  console.log(router.pathname.split("/"),"hello")
  const [show, setShow] = React.useState(false);

  const handleClick2 = () =>{
    router.push(contentData.link)
  }
  return (
    <div>
      <Box sx={{ display: "flex " }}>
        <AppBar position="fixed" open={open}>
          <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
            {/* <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{
                marginRight: 5,
                ...(open && { display: "" }),
              }}
            >
              <MenuIcon
                onClick={() => {
                  setShow(!show);
                }}
                className={``}
              />
            </IconButton> */}

            <MenuIcon
              onClick={() => setOpen(!open)}
              className="cursor-pointer"
            />

            <Typography variant="h6" noWrap component="div">
              <div className="flex gap-4 justify-end ">
                <div className="text-lg font-bold ">
                  {" "}
                  Hello {userData?.user?.data?.name}!
                </div>
                <div>
                  <StyledBadge
                    overlap="circular"
                    anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                    variant="dot"
                  >
                    <Avatar
                      alt="Remy Sharp"
                      src="https://media.istockphoto.com/id/637696304/photo/patan.jpg?s=612x612&w=0&k=20&c=-53aSTGBGoOOqX5aoC3Hs1jhZ527v3Id_xOawHHVPpg="
                    />
                  </StyledBadge>
                </div>
              </div>
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open}>
          <DrawerHeader>
            <div className="text-lg font-bold ">भोटखोला गाउँपालिका</div>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "rtl" ? (
                <ChevronRightIcon />
              ) : (
                <ChevronLeftIcon />
              )}
            </IconButton>
          </DrawerHeader>
          <Divider />
          <List>
            {dash.map((contentData, index) => {
              return (
                <>
                  <ListItemButton key={index}>
                    <ListItemIcon onClick={() => setOpen(!open)}>
                      {contentData.icon}
                    </ListItemIcon>
                    <ListItemText
                      primary={contentData.title}
                      
                      onClick={() => {setOpenDash2(!openDash2);router.push(contentData.link)}}
                      className={`${
                        router.pathname === contentData.link
                          ? "text-red-500"
                          : ""
                      } `}
                    />
                    {contentData.item?.length > 0 ? (
                      <>
                        {openDash2 ? (
                          <div onClick={() => setOpenDash2(!openDash2)}>
                            {" "}
                            <ExpandLess />
                          </div>
                        ) : (
                          <div onClick={() => setOpenDash2(!openDash2)}>
                            {" "}
                            <ExpandMore />{" "}
                          </div>
                        )}
                      </>
                    ) : null}
                  </ListItemButton>
                  <Collapse
                    in={openDash2}
                    timeout="auto"
                    unmountOnExit
                    className="bg-[#787878]"
                  >
                    <List component="div" disablePadding>
                      {contentData?.item?.map((contentData1, index) => {
                        return (
                          <>
                            <ListItemButton sx={{ pl: 4 }} key={index}>
                              <ListItemIcon
                                onClick={() => router.push(contentData1.link)}
                              >
                                {contentData1.icon}
                              </ListItemIcon>
                              <ListItemText
                                primary={contentData1.list}
                                onClick={() => router.push(contentData1.link)}
                                className={`${
                                  router.pathname === contentData1.link
                                    ? " border-2  border-[#1876D2] text-black uppercase bg-white rounded-md  py-2 items-center flex justify-center "
                                    : ""
                                }`}
                              />
                            </ListItemButton>
                          </>
                        );
                      })}
                    </List>
                  </Collapse>
                </>
              );
            })}
          </List>
          <List>
            {common.map((contentData, index) => {
              return (
                <>
                  <ListItemButton key={index}>
                    <ListItemIcon onClick={() => setOpen(!open)}>
                      {contentData.icon}
                    </ListItemIcon>
                    <ListItemText
                      primary={contentData.title}
                      
                      onClick={() => {setOpenCommon2(!openCommon2);router.push(contentData.link)}}
                      className={`${
                        router.pathname.split("/")[1] === "common"
                          ? "text-red-500"
                          : ""
                      } `}
                    />
                    {contentData.item?.length > 0 ? (
                      <>
                        {openCommon2 ? (
                          <div onClick={() => setOpenCommon2(!openCommon2)}>
                            {" "}
                            <ExpandLess />
                          </div>
                        ) : (
                          <div onClick={() => setOpenCommon2(!openCommon2)}>
                            {" "}
                            <ExpandMore />{" "}
                          </div>
                        )}
                      </>
                    ) : null}
                  </ListItemButton>
                  <Collapse
                    in={openCommon2}
                    timeout="auto"
                    unmountOnExit
                    className="bg-[#787878]"
                  >
                    <List component="div" disablePadding>
                      {contentData?.item?.map((contentData1, index) => {
                        return (
                          <>
                            <ListItemButton sx={{ pl: 4 }} key={index}>
                              <ListItemIcon
                                onClick={() => router.push(contentData1.link)}
                              >
                                {contentData1.icon}
                              </ListItemIcon>
                              <ListItemText
                                primary={contentData1.list}
                                onClick={() => router.push(contentData1.link)}
                                className={`${
                                  router.pathname === contentData1.link
                                    ? " border-2  border-[#1876D2] text-black uppercase bg-white rounded-md  py-2 items-center flex justify-center "
                                    : ""
                                }`}
                              />
                            </ListItemButton>
                          </>
                        );
                      })}
                    </List>
                  </Collapse>
                </>
              );
            })}
          </List>
          <List>
            {planning.map((contentData, index) => {
              return (
                <>
                  <ListItemButton key={index}>
                    <ListItemIcon onClick={() => setOpen(!open)}>
                      {contentData.icon}
                    </ListItemIcon>
                    <ListItemText
                      primary={contentData.title}
                      onClick={() => {setOpenPlanning2(!openPlanning2);router.push(contentData.link)}}
                      className={`${
                        router.pathname === contentData.link
                          ? "text-red-500"
                          : ""
                      } `}
                    />
                    {contentData.item?.length > 0 ? (
                      <>
                        {openPlanning2 ? (
                          <div onClick={() => setOpenPlanning2(!openPlanning2)}>
                            {" "}
                            <ExpandLess />
                          </div>
                        ) : (
                          <div onClick={() => setOpenPlanning2(!openPlanning2)}>
                            {" "}
                            <ExpandMore />{" "}
                          </div>
                        )}
                      </>
                    ) : null}
                  </ListItemButton>
                  <Collapse
                    in={openPlanning2}
                    timeout="auto"
                    unmountOnExit
                    className="bg-[#787878]"
                  >
                    <List component="div" disablePadding>
                      {contentData?.item?.map((contentData1, index) => {
                        return (
                          <>
                            <ListItemButton sx={{ pl: 4 }} key={index}>
                              <ListItemIcon
                                onClick={() => router.push(contentData1.link)}
                              >
                                {contentData1.icon}
                              </ListItemIcon>
                              <ListItemText
                                primary={contentData1.list}
                                onClick={() => router.push(contentData1.link)}
                                className={`${
                                  router.pathname === contentData1.link
                                    ? " border-2  border-[#1876D2] text-black uppercase bg-white rounded-md  py-2 items-center flex justify-center "
                                    : ""
                                }`}
                              />
                            </ListItemButton>
                          </>
                        );
                      })}
                    </List>
                  </Collapse>
                </>
              );
            })}
          </List>
          <List>
            {revenue.map((contentData, index) => {
              return (
                <>
                  <ListItemButton key={index}>
                    <ListItemIcon onClick={() => setOpen(!open)}>
                      {contentData.icon}
                    </ListItemIcon>
                    <ListItemText
                      primary={contentData.title}
                      
                      onClick={() => {setOpenRevenue2(!openRevenue2);router.push(contentData.link)}}
                      className={`${
                        router.pathname === contentData.link
                          ? "text-red-500"
                          : ""
                      } `}
                    />
                    {contentData.item?.length > 0 ? (
                      <>
                        {openPlanning2 ? (
                          <div onClick={() => setOpenRevenue2(!openRevenue2)}>
                            {" "}
                            <ExpandLess />
                          </div>
                        ) : (
                          <div onClick={() => setOpenRevenue2(!openRevenue2)}>
                            {" "}
                            <ExpandMore />{" "}
                          </div>
                        )}
                      </>
                    ) : null}
                  </ListItemButton>
                  <Collapse
                    in={openRevenue2}
                    timeout="auto"
                    unmountOnExit
                    className="bg-[#787878]"
                  >
                    <List component="div" disablePadding>
                      {contentData?.item?.map((contentData1, index) => {
                        return (
                          <>
                            <ListItemButton sx={{ pl: 4 }} key={index}>
                              <ListItemIcon
                                onClick={() => router.push(contentData1.link)}
                              >
                                {contentData1.icon}
                              </ListItemIcon>
                              <ListItemText
                                primary={contentData1.list}
                                onClick={() => router.push(contentData1.link)}
                                className={`${
                                  router.pathname === contentData1.link
                                    ? " border-2  border-[#1876D2] text-black  bg-white rounded-md  py-2 items-center flex justify-center  "
                                    : ""
                                }`}
                              />
                            </ListItemButton>
                          </>
                        );
                      })}
                    </List>
                  </Collapse>
                </>
              );
            })}
          </List>
          <Divider />
        </Drawer>
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <DrawerHeader />
          {props.children}
        </Box>
      </Box>
    </div>
  );
}
