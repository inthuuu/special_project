import {
    Card,
    Table,
    Row,
  } from "reactstrap";
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react'
import { teacher } from "../../Props/teacher";
import { teachloadChecked } from "../../Props/teachloadProbs";
import useOpenController from '../../Hooks/useOpenController';
import { ExpendableButton } from '../expandButton/ExpandableButton';
import SearchBox from "../searchBox/searchBox";
import GetData from "./GetData";
import Conclusion from "../../interfaces/conclusion";
import './teachload.css'

const TableDetail = ({teachloads, teachers} : {teachloads: Array<teachloadChecked>, teachers: Array<teacher>}) => {

    const { isOpen, toggle } = useOpenController(false);

    const [contacts, setContacts] = useState('');
    const [search, setSearch] = useState('');

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
                    <th scope="col"><center>ภาระงาน</center></th>
                    <th scope="col"><center>สถานะการยืนยัน</center></th>
                    <th scope="col"><center>report</center></th>
                  </tr>
                </thead>

                <tbody>
                  
                    {teachload.map((teacherChecked, index)=> (
                    <>
                    <tr key={index}>
                        <td scope="row"><center>{teacherChecked.name}</center></td>
                        <td scope="row"><center>{teacherChecked.teacherChecked ? "ส่งแล้ว" : "ยังไม่ส่ง"}</center></td>
                        <td scope="row"><center>
                            <ExpendableButton isOpen={isOpen} toggle={toggle} label={"ตรวจภาระงาน"}/></center>
                        </td>
                        <td scope="row"><center>{teacherChecked.headOfTeacherChecked? "ตรวจแล้ว" : "ยังไม่ตรวจ"}</center></td>
                        <td scope="row"><center>{teacherChecked.headOfTeacherChecked? "ตรวจแล้ว" : "ยังไม่ตรวจ"}</center></td>
                      <center><Conclusion /></center>
                    </tr>
                    

                    <th colSpan={7}>
                        {isOpen && 
                        <GetData teacherId={teacherChecked.teacherId}></GetData>
                        
                        }
                    </th>
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