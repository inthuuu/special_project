import { Component } from "react";
import Title from "../Props/titleProbs";
import service from '../Hooks/firestoreService'
import { Row, Table } from "reactstrap"

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
            <div className="list row">
                <Row>
                <div className="col">
                    <h4>Special problem</h4>
                    <Table className="align-item-center table-light table-flush" responsive>
                        <thead className="thead">
                            <tr>
                            <th scope="col">ชื่อเรื่อง</th>
                            <th scope="col">ระดับ</th>
                            <th scope="col">ชื่อนักศึกษา</th>
                            <th scope="col">จำนวนที่ปรึกษา</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                {titles && titles.map((titles, index)=> (
                                    <>
                                        <td>{titles.title}</td>
                                        <td>{titles.degree}</td>
                                        <td>{
                                            titles.studentName.map((studentName)=> (
                                                <li>{studentName.name} {studentName.lastname}</li>
                                            ))
                                        }</td>
                                        <td>{
                                            titles.advisorName.map((advisorName)=> (
                                                <li>{advisorName.name} {advisorName.lastname}</li>
                                            ))
                                        }</td>
                                    </>
                                ))} 
                            </tr>
                        </tbody>
                    </Table>
                </div>

                </Row>
            </div>
            </>
        )
        }
}

export default List;
