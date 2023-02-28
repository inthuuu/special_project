import { idText } from "typescript";

interface color {
    teacherId: string,
    color: string
}

let colors = ["color1", "color2", "color3", "color4", "color5"]

const BgColors = ({teacherId, index}: {teacherId: Array<color>, index: any}) => {

    let bgColors = new Array<color>();

    for(let i = 0; i < teacherId.length; i++) {
        for(let j = 0; j < colors.length; j++) {
            bgColors.push({
                teacherId: teacherId[i].teacherId,
                color: colors[i]
            })
        }
    }
    return (
        <>
        <div>
            <td>
                {index}
                {bgColors.map((color: color)=> (
                    <>
                    <td className={color.color}>
                    </td>
                    </>  
                ))
                }
            </td>
        </div>
        </>
    )
}

export default BgColors;