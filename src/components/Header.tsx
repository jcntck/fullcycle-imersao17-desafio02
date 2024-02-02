import { AppBar, Box, Typography } from "@mui/material";
import Image from "next/image";

export function Header() {
  return (
    <AppBar position="relative">
      <Box sx={{ margin: "auto", display: "flex", flexDirection: "column", alignItems: "center", my: "1rem" }}>
        <Image
          src="https://imersao.fullcycle.com.br/static/site/img/logo-top.png?id=43b9e8741d507c2687fddc2e4cb10d52"
          width={50}
          height={50}
          alt="Logo"
        />
        <Typography
          variant="h6"
          noWrap
          sx={{
            fontFamily: "monospace",
            fontWeight: 700,
            textAlign: "center",
            mt: "0.5rem",
            letterSpacing: ".2rem",
          }}
        >
          Desafio Next.js
        </Typography>
      </Box>
    </AppBar>
  );
}
