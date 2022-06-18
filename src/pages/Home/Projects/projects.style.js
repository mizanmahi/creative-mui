import { Box, styled } from "@mui/material";

export const Wrapper = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    padding: '50px 0',
}));