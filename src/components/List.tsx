import { Component } from "react";
import Title from "../Props/titleProbs";
import service from '../Hooks/firestoreService'
import { Row } from "reactstrap"

type Probs = {};

type State = {
    titles: Array<Title>,
    currentTitle: Title | null,
    currentIndex: number,
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
            currentIndex: -1
        }

        this.unsubscribe = () => {};
    }

    componentDidMount(){
        this.unsubscribe = service.getAll('1').orderBy("title", "asc").onSnapshot(this.onDateChange);
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    onDateChange(items: any) {
        let titles = new Array<Title>();

        items.forEach((item: any)=> {
            let id = item.id;
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
            currentIndex: -1
        })
    }

    setTitle(titles: Title, index: number, names: []) {
        this.setState({
            currentTitle: titles,
            currentIndex: index,
        })
    }

    render() {

        const { titles, currentIndex } = this.state;

        return (
            <>
            <div className="list row">
                <Row>
                <div className="col">
                    <h4>Special problem</h4>
                    <table>
                        <thead className="thead">
                            <tr>
                            <th scope="col">ชื่อเรื่อง</th>
                            <th scope="col">ระดับ</th>
                            <th scope="col">ชื่อนักศึกษา</th>
                            <th scope="col">จำนวนที่ปรึกษา</th>
                            </tr>
                        </thead>
                        
                        
                    
                    <ul className="list-group">
                        {titles && titles.map((titles, index, )=> (
                            <li 
                            className={
                                "list-group-item" + 
                                (index === currentIndex ? "active": "")
                            }
                            key={index}
                            >
                                {titles.title}
                                {/* {titles.degree} */}
                            </li>
                        ))}
                        
                    </ul>
                    
                    </table>
                </div>

                </Row>
            </div>
            </>
        )
        }
}

export default List;
