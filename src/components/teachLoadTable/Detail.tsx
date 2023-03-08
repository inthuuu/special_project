import { ExpendableButton } from "../expandButton/ExpandableButton";
import GetData from "./GetData";
import useOpenController from '../../Hooks/useOpenController';
import DowloadButton from "../printButton/dowloadButton";
import PrintBtn from '../PdfPrint/PdfPrint'

const DetailData = ({teacherChecked, index}: {teacherChecked:any, index: any} ) => {

    const { isOpen, toggle } = useOpenController(false);

    return (
        <>
        <tr key={index}>
            <th scope="row"><center>{isOpen ? "ชื่ออาจารย์ : " : ""}{teacherChecked.name}</center></th>
            <th scope="row"><center>{isOpen ? "สถานะ : " : ""}{teacherChecked.teacherChecked ? "ส่งแล้ว" : "ยังไม่ส่ง"}</center></th>
            <th scope="row"><center>
                <ExpendableButton isOpen={isOpen} toggle={toggle} label={"ตรวจภาระงาน"}/></center>
            </th>
            <th scope="row"><center>{isOpen ? "สถานะการยืนยัน : " : ""}{teacherChecked.headOfTeacherChecked? "ตรวจแล้ว" : "ยังไม่ตรวจ"}</center></th>
            <th scope="row"><center>{isOpen ? "สถานะการยืนยัน : " : ""}{teacherChecked.headOfTeacherChecked? "ตรวจแล้ว" : "ยังไม่ตรวจ"}</center></th>
            {/* <center><DowloadButton /><PrintBtn /></center> */}
            <th scope="row"><center><DowloadButton /></center></th>
            <th scope="row"><center><PrintBtn /></center></th>
        </tr>
        <tr key={index + 1}>
            <th colSpan={7}>
                {isOpen && 
                <> <GetData teacherId={teacherChecked.teacherId}></GetData>
                </>
                }
            </th>
        </tr>
        </>
    )
}

export default DetailData;