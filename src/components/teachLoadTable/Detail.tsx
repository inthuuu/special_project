import GetData from "./GetData";
import React,{ useState } from "react";
import Modal from "react-bootstrap/Modal";
import "./Modal.css"
import { stat } from "fs";


const DetailData = ({teacherChecked, index, roleId}: {teacherChecked:any, index: any, roleId: any} ) => {


    enum Status {
        NotChecked = 'notChecked',
        Success = 'success',
        Failed = 'failed',
    }

    const [status, setStatus] = useState(Status.NotChecked);
    const [reason, setReason] = useState('');

    const handleConfirm = () => {
        setStatus(Status.Success);
    };

    const handleReject = () => {
        setReason('');
        setStatus(Status.Failed);
    };

    const handleReasonChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setReason(event.target.value);
    };

    const [showModal, setShowModal] = useState(false);

    const renderBackdrop = (props: any) => <div className="backdrop" {...props} />

    let handleClose = () => {
        setShowModal(false);
    }

    let handleSave = () => {
        console.log("success");
    }    

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
        
            <th scope="col"><center>{showModal ? "ชื่ออาจารย์ : " : ""}{teacherChecked.name}</center></th>
            <th scope="col"><center>{showModal ? "สถานะ : " : ""}{teacherChecked.teacherChecked ? <p className="text-secondary">ส่งแล้ว</p> : <p className="text-danger">ยังไม่ส่ง</p>}</center></th>
            <th scope="col">
                <center>
                    <button className="button" onClick={() => setShowModal(true)}>รายละเอียด</button>
                </center>
            </th>
            <th scope="col"><p>
                <center>
                {status === Status.NotChecked && (
                    <div>
                        ยังไม่ได้ตรวจ
                    </div>
                )}

                    {status === Status.Success && <div style={{ color: 'green'}}>ได้รับการตรวจสำเร็จ</div>}

                    {status === Status.Failed && (
                        <div>
                            <div style={{ color: 'red' }}>ตรวจไม่สำเร็จ</div>
                        </div>
                )}
                </center></p></th>
            <th scope="col"><p className="text-danger"><center>{reason}</center></p></th>
            {/* <th scope="col"><center>{showModal ? "สถานะการยืนยัน : " : ""}{checkStatus? <p className="text-secondary">ตรวจแล้ว</p> : <p className="text-danger">ยังไม่ตรวจ</p>}</center></th> */}
            
                <Modal
                    show={showModal}
                    onHide={handleClose}
                    renderBackdrop={renderBackdrop}
                    fullscreen={true}
                >
                    <>
                    <Modal.Header closeButton color="black">
                        <Modal.Title>รายละเอียด</Modal.Title>
                    </Modal.Header>
                    <div className="container card-header element">
                        <div className="row">
                            <div className="col">ชื่ออาจารย์ : {teacherChecked.name}</div>
                            <div className="col">สถานะ : {teacherChecked.teacherChecked ? <p className="text-secondary">ส่งแล้ว</p> : <p className="text-danger">ยังไม่ส่ง</p>}</div>
                            <div className="col">สถานะการยืนยัน : <p>{status === Status.Success && <div style={{ color: 'green'}}>ได้รับการตรวจสำเร็จ</div>}</p> </div>
                            {/* <div className="col">สถานะการยืนยัน : {checkStatus? <p className="text-secondary">ตรวจแล้ว</p> : <p className="text-danger">ยังไม่ตรวจ</p>}</div> */}
                        </div>
                    </div>
                    <Modal.Body>
                        <tr key={index + 1}>
                            <th colSpan={7}>  
                                <> 
                                <GetData teacherId={teacherChecked.teacherId} checked={checkStatus}></GetData>
                                </>
                                {status === Status.NotChecked && (
                                    <div>
                                        <button onClick={handleConfirm}>ยืนยัน</button>
                                        <button onClick={handleReject}>ปฏิเสธ</button>
                                    </div>
                                )}

                                {status === Status.Success && <div style={{ color: 'green'}}>ได้รับการตรวจสำเร็จ</div>}

                                {status === Status.Failed && (
                                    <div>
                                        <div style={{ color: 'red' }}>ตรวจไม่สำเร็จ</div>
                                        <input type="text" value={reason} onChange={handleReasonChange} placeholder="เหตุผล" />
                                        <button type="submit">ยืนยัน</button>
                                    </div>
                                )}
                                {/* {!showReasonForm && (
                                    <div>
                                        <button className="text-success" onClick={handleConfirm}>ยืนยัน</button>
                                        <button className="text-danger" onClick={handleReject}>ปฏิเสธ</button>
                                    </div>
                                )}
                                {showReasonForm && (
                                    <form onSubmit={handleSubmitReason}>
                                        <input type="text" value={reason} onChange={(e) => setReason(e.target.value)} placeholder="เหตุผล" />
                                        <button type="submit">ยืนยัน</button>
                                    </form>
                                )} */}
                            </th>

                           
                        </tr>
                    </Modal.Body>
                    <Modal.Footer>
                        <div className="row">
                            <div className="col"><button className="button" onClick={handleClose}>ปิด</button> </div>
                            { checkStatus ? (<></>):(<>
                                <div className="col"><button className="button-save" onClick={handleSave}>สิ้นสุด</button></div>
                            </>)}
                        </div>
                    </Modal.Footer>
                    </>    
                </Modal>
            
        </>
    )
}

export default DetailData;