import { ExpendableButton } from "../expandButton/ExpandableButton";
import GetData from "./GetData";
import useOpenController from '../../Hooks/useOpenController';
import '../teachLoadTable/teachload.css'

const DetailData = ({teacherChecked, index}: {teacherChecked:any, index: any} ) => {

    const { isOpen, toggle } = useOpenController(false);

    return (
        <>
        <tr key={index}>
            <th scope="col"><center>{isOpen ? "ชื่ออาจารย์ : " : ""}{teacherChecked.name}</center></th>
            <th scope="col"><center>{isOpen ? "สถานะ : " : ""}{teacherChecked.teacherChecked ? "ส่งแล้ว" : "ยังไม่ส่ง"}</center></th>
            <th scope="col">
                <center><ExpendableButton isOpen={isOpen} toggle={toggle} label={"รายละเอียด"} disable={!teacherChecked.teacherChecked}/></center>
            </th>
            <th scope="col"><center>{isOpen ? "สถานะการยืนยัน : " : ""}{teacherChecked.headOfTeacherChecked? "ตรวจแล้ว" : "ยังไม่ตรวจ"}</center></th>
        </tr>
        <tr key={index + 1}>
            <th colSpan={7}>
                {isOpen && 
                <> <GetData teacherId={teacherChecked.teacherId} checked={teacherChecked.headOfTeacherChecked}></GetData>
                </>
                }
            </th>
        </tr>
        </>
    )
}

export default DetailData;