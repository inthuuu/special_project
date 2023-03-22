import { ExpendableButton } from "../expandButton/ExpandableButton";
import GetData from "./GetData";
import useOpenController from '../../Hooks/useOpenController';

const DetailData = ({teacherChecked, index, roleId}: {teacherChecked:any, index: any, roleId: any} ) => {

    const { isOpen, toggle } = useOpenController(false);

    let checkStatus;

    if(roleId === '2') {
        checkStatus = teacherChecked.headOfTeacherChecked;
    } else if (roleId === '3') {
        checkStatus = teacherChecked.regChecked;
    } else if (roleId === '4') {
        checkStatus = teacherChecked.hrChecked;
    } else if (roleId === '5') {
        checkStatus = teacherChecked.financeChecked;
    }


    return (
        <>
        <tr key={index}>
            <th scope="col"><center>{isOpen ? "ชื่ออาจารย์ : " : ""}{teacherChecked.name}</center></th>
            <th scope="col"><center>{isOpen ? "สถานะ : " : ""}{teacherChecked.teacherChecked ? <p className="text-secondary">ส่งแล้ว</p> : <p className="text-danger">ยังไม่ส่ง</p>}</center></th>
            <th scope="col">
                <center><ExpendableButton isOpen={isOpen} toggle={toggle} label={"รายละเอียด"} disable={!teacherChecked.teacherChecked}/></center>
            </th>
            <th scope="col"><center>{isOpen ? "สถานะการยืนยัน : " : ""}{checkStatus? <p className="text-secondary">ตรวจแล้ว</p> : <p className="text-danger">ยังไม่ตรวจ</p>}</center></th>
        </tr>
        <tr key={index + 1}>
            <th colSpan={7}>
                {isOpen && 
                <> 
                <GetData teacherId={teacherChecked.teacherId} checked={checkStatus}></GetData>
                </>
                }
            </th>
        </tr>
        </>
    )
}

export default DetailData;