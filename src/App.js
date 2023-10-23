import './App.css';
import * as firebaseDatabase from 'firebase/database'
import * as firebaseAuth from 'firebase/auth'
import {Component} from "react";

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            hasAccount: false,
            name: '',
            key: '',
            value: ''
        }
    }

    componentDidMount() {
        const db = firebaseDatabase.getDatabase();
        const name = firebaseDatabase.ref(db, 'name');
        const name1 = firebaseDatabase.onValue(name, (element) => {
            this.setState({name: element.val()})
        });
        console.log(name);
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
            .then(response => this.setState({hasAccount: true}))
            .catch(error => console.log(error))
    }

    sendData = () => {
        const{key, value} = this.state;
        const db = firebaseDatabase.getDatabase();
        const databaseReference = firebaseDatabase.ref(db, key);
        firebaseDatabase.push(databaseReference, value);
        alert("your data was written to db");
    }

    getData = () => {
        const db = firebaseDatabase.getDatabase();
        const surname =  firebaseDatabase.ref(db, 'surname');
        firebaseDatabase.onValue(surname, (element) => {
            console.log(element.val(), 'qq11');
        });
    }

    render() {
        const {hasAccount, name} = this.state;
        this.getData();
        return (
            <div>
                {
                    hasAccount ?
                        (
                            <div>
                                <input type="text" name="" id="key" placeholder="enter key" onChange={this.handleChange}/>
                                <input type="text" name="" id="value" placeholder="enter value" onChange={this.handleChange}/>
                                <input type="submit" onClick={this.sendData}/>
                            </div>
                        )
                        :
                        (
                            <div className="login_block">
                                <input type="text" placeholder="email" id="email" onChange={this.handleChange}/>
                                <input type="password" id="password" placeholder="password"
                                       onChange={this.handleChange}/>
                                <input type="submit" onClick={this.createAccount}/>
                            </div>
                        )

                }
            </div>
        )
    }
}
