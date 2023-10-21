import './App.css';
import * as firebaseDatabase from 'firebase/database'
import * as firebaseAuth from 'firebase/auth'
import {Component} from "react";

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    componentDidMount() {
        const db = firebaseDatabase.getDatabase();
        console.log(db);
    }

    handleChange = ({target: {value, id}}) => {
        this.setState({
            [id]: value
        })
    }

    createAccount = () => {
        const {email, password} = this.state;
        const auth = firebaseAuth.getAuth();
        // firebaseAuth.createUserWithEmailAndPassword(auth, email, password)
        //     .catch(error => console.log(error));
        firebaseAuth.signInWithEmailAndPassword(auth, email, password)
            .catch()
    }

    render() {
        console.log(this.state);
        return (
            <div>
                <div className="login_block">
                    <input type="text" placeholder="email" id="email" onChange={this.handleChange}/>
                    <input type="password" id="password" placeholder="password" onChange={this.handleChange}/>
                    <input type="submit" onClick={this.createAccount}/>
                </div>
            </div>
        )
    }
}
