import { ExpendableButton } from "../expandButton/ExpandableButton";
import GetData from "./GetData";
import useOpenController from '../../Hooks/useOpenController';
import Conclusion from "../../interfaces/conclusion";

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
            <center><Conclusion /></center>
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