import React from "react";
import { PieChart, Pie, Tooltip } from "recharts";

const Chart = (props) => {
    const calculatedSize = props.width
        ||
        (
            props.viewportWidth <= 992 ?
                props.viewportWidth / 1.5
                :
                props.viewportWidth / 2.5
        )
    const size = Math.min(calculatedSize, 500);
    return (
        <div>
            <PieChart width={size} height={size}>
                <Pie data={props.data} dataKey="value" nameKey="name" />
                <Tooltip />
            </PieChart>
        </div>
    )
}
export default Chart