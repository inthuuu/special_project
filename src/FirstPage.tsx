import { Component } from "react"
import { userDetail } from "./Props/userDetail";
import service from "./Hooks/getUser"
import SubHeader from './subHeader';

type Probs = {
    user: any
}

type State = {
    userDetail: Array<userDetail>,
    role: Array<any>
}


class FirstPage extends Component<Probs, State> {

    "unsubscribeUser" : () => void;
    "unsubscribeRole" : () => void;

    constructor(probs: Probs) {
        super(probs)
        this.onUser = this.onUser.bind(this);
        this.onRole = this.onRole.bind(this);

        this.state = {
            userDetail: [],
            role: []
        }

        this.unsubscribeUser = () => {};
        this.unsubscribeRole = () => {};
    }

    componentDidMount () {
        this.unsubscribeUser = service.getUserDetail({this: this.props.user.uid}.this).onSnapshot(this.onUser);
        this.unsubscribeRole = service.getUserRole().onSnapshot(this.onRole);
    }

    componentWillUnmount () {
        this.unsubscribeRole();
        this.unsubscribeUser();
    }

    onUser(items: any) {
        let userDetail = new Array<userDetail>();
        let data = items.data;

        userDetail.push({
            uid: items.id,
            teacherId: data.teacherId,
            roleId: data.roleId,
            name: data.name,
            email: data.email
        })

        this.setState({
            userDetail: userDetail
        })
    }

    onRole (items: any) {
        let role = new Array();

        items.forEach((item: any)=> {
            let data = item.data();

            role.push({
                roleId: data.roleId,
                roleName: data.roleName
            })
        })

        this.setState({
            role: role
        })
    }

    render() {

    const { userDetail, role } = this.state

    return (
        <>
        <SubHeader user={this.props.user} userDetail={userDetail} role={role}></SubHeader>
        </>
    )
    }
}

export default FirstPage;