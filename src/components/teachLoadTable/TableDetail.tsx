import {
    Card,
    Table,
    Row,
  } from "reactstrap";
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react'
import { teacher } from "../../Props/teacher";
import { teachloadChecked } from "../../Props/teachloadProbs";
import DetailData from "./Detail";
import '../teachLoadTable/teachload.css'

const TableDetail = ({teachloads, teachers} : {teachloads: Array<teachloadChecked>, teachers: Array<teacher>}) => {

    let teachload = new Array<teachloadChecked>();

    const [search, setSearch] = useState('');

    for(let i = 0; i < teachloads.length; i++) {
        for(let j = 0; j < teachers.length; j++) {
            if(teachers[j].teacherId === teachloads[i].teacherId) {
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
          {/* Table */}
          <Row className="mt-5">
          <div className="col"> 
          <h3 className="head"><center>ตรวจภาระงานอาจารย์</center></h3>
          <div className="search">
              <Container>
                <Form>
                    <InputGroup className="my-3">

                        <Form.Control
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder="ค้นหารายชื่อ"
                        />
                    </InputGroup>
                </Form>
              </Container>
        </div>
            <Card className="table table-striped">
              <Table className="Table">
                <thead className="thead">
                  <tr>
                    <th scope="col"><center>ชื่ออาจารย์</center></th>
                    <th scope="col"><center>สถานะ</center></th>
                    <th scope="col"><center>ภาระงาน</center></th>
                    <th scope="col"><center>สถานะการยืนยัน</center></th>

                  </tr>
                </thead>

                <tbody>
                {teachload.map((teacherChecked, index)=> (
                    <>
                    <DetailData teacherChecked={teacherChecked} index={index}></DetailData>
                    </> 
                ))}
                </tbody>
              </Table>
            </Card>
          </div>
        </Row>
        </>
    )
}

export default TableDetail;