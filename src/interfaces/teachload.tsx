// export function Teachload() {
//     return <h1>teachload page</h1>
// }

import {
    Card,
    CardHeader,
    Media,
    Table,
    Container,
    Row,
  } from "reactstrap";

//ตรวจภาระงานต้องเป็นปุ่ม   
  const Teachload = () => {
    return (
      <>
        {/* Page content */}
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
                  <tr>
                    <th scope="row">
                        <Media>
                          <span className="mb-0 text-sm">
                            รักชาติ เมืองไทย
                          </span>
                        </Media>
                    </th>
                    <td>ส่งแล้ว</td>
                    <td>
                       ตรวจสอบภาระงาน
                    </td>
                    <td> ตรวจแล้ว </td>
                  </tr>
                  <tr>
                    <th scope="row">
                        <Media>
                          <span className="mb-0 text-sm">
                            รักชาติ เมืองไทย
                          </span>
                        </Media>
                    </th>
                    <td>ยังไม่ส่ง</td>
                    <td> 
                        ตรวจสอบภาระงาน
                    </td>
                    <td> ตรวจแล้ว </td>
                  </tr>

                  <tr>
                    <th scope="row">
                      <Media className="align-items-center">
                        <Media>
                          <span className="mb-0 text-sm">รักชาติ เมืองไทย</span>
                        </Media>
                      </Media>
                    </th>
                    <td>ยังไม่ส่ง</td>
                    <td>
                        ตรวจสอบภาระงาน
                    </td>
                    <td> ตรวจแล้ว </td>
                  </tr>

                  <tr>
                    <th scope="row">
                      <Media className="align-items-center">
                        <Media>
                          <span className="mb-0 text-sm">
                            รักชาติ ยิ่งชีพ
                          </span>
                        </Media>
                      </Media>
                    </th>
                    <td>ยังไม่ส่ง</td>
                    <td>
                        ตรวจสอบภาระงาน
                    </td>
                    <td> ตรวจแล้ว </td>
                  </tr>
                </tbody>
              </Table>
            </Card>
          </div>
        </Row>
        </Container>
      </>
      
    );
  };
  
  export default Teachload;
  