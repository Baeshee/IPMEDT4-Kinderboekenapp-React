export const CHANGE_COLORVALUE = "CHANGE_COLORVALUE";
export const CHANGE_USERDATA = "CHANGE_USERDATA";
export const CHANGE_BASEURL = "CHANGE_BASEURL";

export const changeColor = colorValue =>({
    type: CHANGE_COLORVALUE,
    payload: colorValue
});

export const changeUserData = changeUserData =>({
    type: CHANGE_USERDATA,
    payload: changeUserData
});

export const changeBASE_URL = changeBASE_URL =>({
    type: CHANGE_BASEURL,
    payload: changeBASE_URL
});