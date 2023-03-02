import { ExpendableButton } from "../expandButton/ExpandableButton";
import GetData from "./GetData";
import useOpenController from '../../Hooks/useOpenController';

const DetailData = ({teacherChecked, index}: {teacherChecked:any, index: any} ) => {

    const { isOpen, toggle } = useOpenController(false);

    return (
        <>
        <tr key={index}>
            <th scope="row">{isOpen ? "ชื่ออาจารย์ : " : ""}{teacherChecked.name}</th>
            <th scope="row">{isOpen ? "สถานะ : " : ""}{teacherChecked.teacherChecked ? "ส่งแล้ว" : "ยังไม่ส่ง"}</th>
            <th scope="row">
                <ExpendableButton isOpen={isOpen} toggle={toggle} label={"ตรวจภาระงาน"}/>
            </th>
            <th scope="row">{isOpen ? "สถานะการยืนยัน : " : ""}{teacherChecked.headOfTeacherChecked? "ตรวจแล้ว" : "ยังไม่ตรวจ"}</th>
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