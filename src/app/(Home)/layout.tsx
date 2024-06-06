"use client";

import { styled, Container, Box } from "@mui/material";
import { useState } from "react";
import Header from "@/app/(Home)/layout/header/Header";
import Sidebar from "@/app/(Home)/layout/sidebar/Sidebar";
import theme from "@/utils/theme";

const PageWrapper = styled("div")(() => ({
  display: "flex",
  flexGrow: 1,
  paddingBottom: "90px",
  flexDirection: "column",
  zIndex: 1,
  backgroundColor: theme.palette.primary.light,
}));

interface Props {
  children: React.ReactNode;
}

export default function RootLayout({ children }: Props) {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [isMobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  return (
    <>
      {/* Header */}
      <Header toggleMobileSidebar={() => setMobileSidebarOpen(true)} />

      {/* Main Wrapper */}
      <PageWrapper className="page-wrapper">
        {/* Sidebar */}
        <Sidebar
          isSidebarOpen={isSidebarOpen}
          isMobileSidebarOpen={isMobileSidebarOpen}
          onSidebarClose={() => setMobileSidebarOpen(false)}
        />
        {/* PageContent */}
        <Container
          sx={{
            paddingTop: "20px",
            maxWidth: "1200px",
          }}
        >
          <Box sx={{ minHeight: "calc(100vh - 170px)" }}>{children}</Box>
        </Container>
      </PageWrapper>
    </>
  );
}
