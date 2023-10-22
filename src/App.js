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
            name: ''
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

    render() {
        const {hasAccount, name} = this.state;
        console.log(name);
        return (
            <div>
                {
                    hasAccount ?
                        (
                            <div>hello</div>
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
