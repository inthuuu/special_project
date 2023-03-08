import React, { useState, useContext, useEffect } from "react";
import { getMonth } from "./util";

function Calendar() {
    const [currenMonth, setCurrentMonth] = useState(getMonth());

}

export default Calendar;