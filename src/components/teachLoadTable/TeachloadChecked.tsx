import { Info } from "../../Props/info";
import { section } from "../../Props/sectionProps";
import { teachLoad } from "../../Props/teachloadProbs";
import { subject } from "../../Props/subjectProps";
import { professor } from "../../Props/sectionProps";
import { useState } from 'react';
import { Table } from "reactstrap";
import TeachingWeekTable from "./TeachingWeekTable";

let colors = ["color1", "color2", "color3", "color4", "color5"]

const Teachload = ({teachloads, sections, subjects}:  {teachloads: Array<teachLoad>, sections:  Array<section>, subjects: Array<subject>}) => {

    const [confirm, setConfirm] = useState();

    

    let info = new Array<Info>();
        
        for(let i = 0; i < teachloads.length; i++) {
            for(let j = 0; j < sections.length; j++) {
             if(teachloads[i].subjectId === sections[j].subjectID){
                 for(let l = 0; l < subjects.length; l++) {
                     if(sections[j].subjectCode === subjects[l].subjectCode) {
                        info.push({
                            sectionId: sections[j].sectionId,
                            subjectID: sections[j].subjectID,
                            subjectCode: sections[j].subjectCode,
                            totalStudents: sections[j].totalStudents,
                            degree: sections[j].degree,
                            faculty: sections[j].faculty,
                            department: sections[j].department,
                            year: sections[j].year,
                            typeLearning: sections[j].typeLearning,
                            professor: sections[j].professor,
                            teachingWeek: sections[j].teachingWeek,
                            name: subjects[l].name,
                            language: subjects[l].language,
                            teachingDate: subjects[l].teachingDate,
                            totalWeek: teachloads[i].totalWeek,
                            totalTeachload: teachloads[i].totalTeachload,
                            teacherId: teachloads[i].teacherId
                        })
                     }
                 }
             }
            }
         }



    return (
        <>
        <div>
            {info.map((info) => (
                <>
                <div className="container">
                {/* first row */}
                <p>
                    <div className="row">
                        <div className="col-sm"><td scope="row">รหัสวิชา : {info.subjectCode}</td></div>
                        <div className="col-sm"><td scope="row"><h6>ชื่อวิชา : {info.name}</h6></td></div>
                        <div className="col-sm"><td scope="row"> {info.typeLearning}</td></div>
                        <div className="col-sm"><td scope="row">คณะ : {info.faculty}</td></div>
                        <div className="col-sm"><td scope="row">สาขา : {info.department}</td></div>
                    </div>
                </p>
                 {/* second row */}
                 <p>
                    <div className="row">
                        <div className="col-sm"><td scope="row">จำนวนนักศึกษาต่อภาคเรียน : {info.totalStudents}</td></div>
                        <div className="col-sm"><td scope="row">จำนวนนักศึกษาต่อสัปดาห์ : {info.totalStudents}</td></div>
                        <div className="col-sm"><td scope="row">จำนวนสัปดาห์ที่สอนต่อภาคเรียน : {info.totalWeek}</td></div>
                        <div className="col-sm"><td scope="row">จำนวนชั่วโมงที่สอนต่อภาคเรียน : {info.totalWeek * 3}</td></div>
                    </div>
                </p>
                 {/* third row */}
                 <p>
                    <div className='row'>
                        <h5>อาจารย์ผู้สอน</h5><br />
                        <div className='col-sm'>
                            <ul className='list-group'>
                                {info.professor && info.professor.map((professor: professor, index: number)=> (
                                    <>
                                    <li className= 'list-group-item'>
                                    <p>
                                        <td className={colors[index] }></td>
                                        <td>{professor.name}</td>
                                    </p>
                                    </li>
                                    </>
                                ))}
                            </ul>
                        </div>
                    </div>
                </p>
                {/* table teaching week */}
                <p>
                    <h5>หมายเหตุ :</h5><br />
                    <Table className="table table-bordered">
                        <thead>
                            <tr>
                                <th scope="col-sm-8">จำนวนสัปดาห์ที่สอน(ไม่รวมสัปดาห์สอบ)</th>
                                <th scope="col">จำนวนชั่วโมงภาระงานต่อภาคเรียน</th>
                            </tr>
                        </thead>
                        <tbody>
                            <th colSpan={1} scope="col-sm-8">
                                {info.teachingWeek?.map((teachingWeek) => (
                                    <>
                                    <TeachingWeekTable teachingWeek={teachingWeek} ></TeachingWeekTable>
                                    </>
                                ))}
                            </th>
                            <td>{info.totalTeachload}</td>
                        </tbody>
                    </Table>
                </p>
                {/* button */}
                <p>
                    <div className="row">
                        <div className="col">
                            <button className="btn btn-success">ยืนยัน</button>&nbsp;
                            <button className="btn btn-danger">ตีกลับ</button>
                        </div>
                    </div>
                </p>
                </div>
                </>
            ))}
        </div>
        </>
    )
}

export default Teachload;