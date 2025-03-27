import React, { useState, useEffect } from "react";
import {Box, Container, Stack, styled, Typography} from "@mui/material";
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';

const StyledStack = styled(Stack) (({ theme }) => ({
    backgroundColor: '#1976D2',
    minHeight: '40px',
    // width: '100%'
}));

const Header = () => {


    return (
        <StyledStack direction={"row"} alignItems={"center"} justifyContent={"right"} sx={{paddingRight: "20px"}}>
            <PermIdentityOutlinedIcon sx={{color: "#fff"}}/>
        </StyledStack>
    );
};

export default Header;