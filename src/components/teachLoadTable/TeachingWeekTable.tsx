import '../teachLoadTable/BgColors.css'
import BgColors from './BgCompo';

const TeachingWeekTable = ({teachingWeek} : {teachingWeek: any}) => {

    return (
        <>
        <th colSpan={1} scope='col-sm-8 '>
            <center>
            <BgColors teacherId={teachingWeek.teacherId} index={teachingWeek.name}></BgColors>
            </center>
        </th>
        </>
    )
}

export default TeachingWeekTable;