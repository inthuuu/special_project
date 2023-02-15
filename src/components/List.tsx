import { Component } from "react";
import { NavLink } from "react-router-dom"
import { Nav } from "react-bootstrap"
import Title from "../Props/titleProbs";
import service from '../Hooks/firestoreService'
import Table from 'react-bootstrap/Table';
import From from '../components/Form'
import { Row } from "reactstrap"
import '../components/Table.css'

type Probs = {};

type State = {
    titles: Array<Title>,
    currentTitle: Title | null,
}

class List extends Component<Probs, State>{

    "unsubscribe": () => void;

    constructor(props: Probs) {
        super(props);
        this.refreshList = this.refreshList.bind(this);
        this.setTitle = this.setTitle.bind(this);
        this.onDateChange = this.onDateChange.bind(this);
        

        this.state = {
            titles: [],
            currentTitle: null,
        }

        this.unsubscribe = () => {};
    }

    componentDidMount(){
        this.unsubscribe = service.getTitle('1').orderBy("title", "asc").onSnapshot(this.onDateChange);
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    onDateChange(items: any) {
        let titles = new Array<Title>();

        items.forEach((item: any)=> {
            let data = item.data();
            titles.push({
                id: item.id,
                title: data.title,
                degree: data.degree,
                studentName: data.studentName,
                advisorName: data.advisorName,
            })
        })

        this.setState({
            titles: titles
        })
    }

    refreshList() {
        this.setState({
            currentTitle: null,
        })
    }

    setTitle(titles: Title, index: number, names: []) {
        this.setState({
            currentTitle: titles
        })
    }

    render() {

        const { titles} = this.state;

        return (
            <>
            <div className="headspe">
                <br />
                <center>รายชื่อปัญหาพิเศษ, โครงการพิเศษ, วิทยานิพนธ์</center>
                <br />
            </div>
            <Table striped bordered hover size="sm">
                
                <thead>
                    <tr>
                        <th scope="col">ชื่อเรื่อง</th>
                        <th scope="col">ระดับ</th>
                        <th scope="col">ชื่อนักศึกษา</th>
                        <th scope="col">ที่ปรึกษา</th>
                        <th scope="col">แก้ไข/ลบ</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        {titles && titles.map((titles, index)=> (
                            <div className="">
                            <td scope='row'>{titles.title}</td>
                            <td scope='row'>{titles.degree}</td>
                            <td scope='row'>{titles.studentName.map((studentName)=> (
                                <li>{studentName.name} {studentName.lastname}</li>))}</td>
                            <td scope='row'>{titles.advisorName.map((advisorName)=> (
                                <li>{advisorName.name} {advisorName.lastname}</li>))}</td>
                            <td scope='row'>แก้ไข/ลบ</td> 
                            </div>
                            
                            ))} 
                            </tr>
                        </tbody>
            </Table>

            <div className="addSpe">
                <Nav.Link to="/from" as={NavLink}>
                    เพิ่มชื่อเรื่อง
                </Nav.Link>
                
            </div>
            </>
        ) //close return
        } //render
} //class

export default List;
