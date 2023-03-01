import {
    Card,
    CardHeader,
    Table,
    Container,
    Row,
  } from "reactstrap";

import { teacher } from "../../Props/teacher";
import { teachloadChecked } from "../../Props/teachloadProbs";
import useOpenController from '../../Hooks/useOpenController';
import { ExpendableButton } from '../expandButton/ExpandableButton';
import GetData from "./GetData";

const TableDetail = ({teachloads, teachers} : {teachloads: Array<teachloadChecked>, teachers: Array<teacher>}) => {

    const { isOpen, toggle } = useOpenController(false);

    let teachload = new Array<teachloadChecked>();

    for(let i = 0; i < teachloads.length; i++) {
        for(let j = 0; j < teachers.length; j++) {
            if(teachers[j].teacherId == teachloads[i].teacherId) {
                teachload.push ({
                    teacherId: teachers[j].teacherId,
                    name: teachers[j].name,
                    financeChecked: teachloads[i].financeChecked,
                    headOfTeacherChecked: teachloads[i].headOfTeacherChecked,
                    regChecked: teachloads[i].regChecked,
                    teacherChecked: teachloads[i].teacherChecked,
                })
            }
        }
    }
    return (
        <>
        <Container className="mt--7" fluid>
          {/* Table */}
          <Row className="mt-5">
          <div className="col"> 
          <h3 className="align-items-center mb-0">ตรวจภาระงานอาจารย์</h3>

            <Card className="table">
              <CardHeader className="bg-transparent border-0">
              </CardHeader>
              <Table
                className="align-items-center table-light table-flush"
                responsive
              >
                <thead className="thead">
                  <tr>
                    <th scope="col">ชื่ออาจารย์</th>
                    <th scope="col">สถานะ</th>
                    <th scope="col">ภาระงาน</th>
                    <th scope="col">สถานะการยืนยัน</th>
                  </tr>
                </thead>
                <tbody>
                    {teachload.map((teacherChecked, index)=> (
                    <>
                    <tr key={index}>
                        <td scope="row">{teacherChecked.name}</td>
                        <td scope="row">{teacherChecked.teacherChecked ? "ส่งแล้ว" : "ยังไม่ส่ง"}</td>
                        <td scope="row">
                            <ExpendableButton isOpen={isOpen} toggle={toggle} label={"ตรวจภาระงาน"}/>
                        </td>
                        <td scope="row">{teacherChecked.headOfTeacherChecked? "ตรวจแล้ว" : "ยังไม่ตรวจ"}</td>
                    </tr>
                    <th colSpan={7}>
                        {isOpen && 
                        <> <GetData teacherId={teacherChecked.teacherId}></GetData>
                        </>
                        }
                    </th>
                    </> 
                    ))}
                </tbody>
              </Table>
            </Card>
          </div>
        </Row>
        </Container>
        </>
    )
}

export default TableDetail;