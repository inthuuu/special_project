import { ExpendableButton } from "../expandButton/ExpandableButton";
import GetData from "./GetData";
import useOpenController from '../../Hooks/useOpenController';
import DownloadButton from "../printButton/downloadButton";
import PrintBtn from '../PdfPrint/PdfPrint'

const DetailData = ({teacherChecked, index}: {teacherChecked:any, index: any} ) => {

    const { isOpen, toggle } = useOpenController(false);

    return (
        <>
        <tr key={index}>
            <th scope="col"><center>{isOpen ? "ชื่ออาจารย์ : " : ""}{teacherChecked.name}</center></th>
            <th scope="col"><center>{isOpen ? "สถานะ : " : ""}{teacherChecked.teacherChecked ? <p className="text-secondary">ส่งแล้ว</p> : <p className="text-danger">ยังไม่ส่ง</p>}</center></th>
            <th scope="col">
                <center><ExpendableButton isOpen={isOpen} toggle={toggle} label={"รายละเอียด"} disable={!teacherChecked.teacherChecked}/></center>
            </th>
            <th scope="col"><center>{isOpen ? "สถานะการยืนยัน : " : ""}{teacherChecked.headOfTeacherChecked? <p className="text-secondary">ตรวจแล้ว</p> : <p className="text-danger">ยังไม่ตรวจ</p>}</center></th>
        </tr>
        <tr key={index + 1}>
            <th colSpan={7}>
                {isOpen && 
                <> 
                <GetData teacherId={teacherChecked.teacherId} checked={teacherChecked.headOfTeacherChecked}></GetData>
                </>
                }
            </th>
        </tr>
        </>
    )
}

export default DetailData;