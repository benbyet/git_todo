import React, {useEffect, useState} from "react";
import {Box, Checkbox, Grid, List, ListItem, ListItemText, Stack, styled, Typography} from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';

const BpIcon = styled('span')(({ theme }) => ({
    borderRadius: 3,
    width: 16,
    height: 16,
    boxShadow: 'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
    backgroundColor: '#fff',
    backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
    '.Mui-focusVisible &': {
        outline: '2px auto rgba(19,124,189,.6)',
        outlineOffset: 2,
    },
    'input:hover ~ &': {
        backgroundColor: '#ebf1f5',
        ...theme.applyStyles('dark', {
            backgroundColor: '#30404d',
        }),
    },
    'input:disabled ~ &': {
        boxShadow: 'none',
        background: 'rgba(206,217,224,.5)',
        ...theme.applyStyles('dark', {
            background: 'rgba(57,75,89,.5)',
        }),
    },
    ...theme.applyStyles('dark', {
        boxShadow: '0 0 0 1px rgb(16 22 26 / 40%)',
        backgroundColor: '#394b59',
        backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.05),hsla(0,0%,100%,0))',
    }),
}));

const BpCheckedIcon = styled(BpIcon)({
    backgroundColor: '#137cbd',
    backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
    '&::before': {
        display: 'block',
        width: 16,
        height: 16,
        backgroundImage:
            "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath" +
            " fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 " +
            "1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='%23fff'/%3E%3C/svg%3E\")",
        content: '""',
    },
    'input:hover ~ &': {
        backgroundColor: '#106ba3',
    },
});

function BpCheckbox(props) {
    return (
        <Checkbox
            sx={{ '&:hover': { bgcolor: 'transparent' } }}
            disableRipple
            color="default"
            checkedIcon={<BpCheckedIcon />}
            icon={<BpIcon />}
            inputProps={{ 'aria-label': 'Checkbox demo' }}
            {...props}
        />
    );
}


const ItemList = () => {
    const [currentDate, setCurrentDate] = useState("");
    const [checkedItems, setCheckedItems] = useState([]);

    useEffect(() => {
        const today = new Date();
        const formattedDate = today.toLocaleDateString(); // 오늘 날짜 형식화
        setCurrentDate(formattedDate);
    }, []);
    
    const [items, setItems] = useState([
        "퇴마록 영화 보기",
        "교육 시청하기",
        "홈플러스 가기",
        "서류 제출하기",
        "",
        "",
        "",
        "",
        ""
    ]);

    const handleCheckboxChange = (index) => {
        setCheckedItems((prevCheckedItems) => {
            if (prevCheckedItems.includes(index)) {
                return prevCheckedItems.filter((item) => item !== index);
            } else {
                return [...prevCheckedItems, index];
            }
        });
    };
    
    return (
        
        <Box>
            <Stack direction={"row"} alignItems={"center"} sx={{height: "80px"}}>
                <Box width={"150px"}>
                    <Typography variant="h6" justifyContent="center" fontFamily={"'Black Han Sans', sans-serif"}>
                        To Do List
                    </Typography>
                </Box>

            </Stack>

            <Stack direction={"row"} justifyContent={"right"} alignItems={"center"} sx={{height: "30px", backgroundColor: "#1976D2", paddingRight: "10px"}}>
                <ArrowBackIosNewIcon sx={{width: "10px", height: "10px", color: "#fff"}}/>
                <Box width={"90px"} align={"center"} justifyContent="center">
                    <Typography variant="caption" justifyContent="center" fontFamily={"'Black Han Sans', sans-serif"} color={"#fff"}>
                        {currentDate}
                    </Typography>
                </Box>
                <ArrowForwardIosIcon sx={{width: "10px", height: "10px", color: "#fff"}}/>
            </Stack>
            <Grid container sx={{borderTop: '2px solid #1976D2', borderBottom: '2px solid #1976D2'}}>
                {items.map((item, index) => (
                    <Grid item xs={12} key={index}>
                        <Stack
                            direction={"row"}
                            justifyContent={"space-between"}
                            sx={{
                                borderTop: '1px solid #a2c6e8',
                                borderBottom: '1px solid #a2c6e8',
                                paddingLeft: '20px',
                                paddingRight: '5px',
                                display: 'flex',
                                alignItems: 'center',
                                margin: '-0.5px',
                            }}
                        >
                            <Box>
                                <BpCheckbox
                                    checked={checkedItems.includes(index)}
                                    onChange={() => handleCheckboxChange(index)}
                                    sx={{
                                        borderLeft: '1px solid #a2c6e8',
                                        borderRadius: 0,
                                    }}

                                />
                                <Typography variant="caption">{item}</Typography>
                            </Box>
                                <MenuOutlinedIcon sx={{width: "15px", height: "15px"}}/>
                        </Stack>
                    </Grid>
                ))}
            </Grid>
            <Stack direction={"row"} alignItems={"center"} spacing={"5px"} sx={{height: "40px"}}>
                <AddOutlinedIcon sx={{width: "15px", height: "15px", color: "#878d91"}}/>
                <Typography variant={"caption"} color={"#878d91"}>추가</Typography>
            </Stack>
        </Box>
    );
};

export default ItemList;