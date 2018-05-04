import React, { Component } from 'react';
import fire from './fire';
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Wrapper from "./components/Wrapper";
import Featured from './components/Featured.js';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { messages: [] }; // <- set up react state
  }
  componentWillMount(){
    /* Create reference to messages in Firebase Database */
    let messagesRef = fire.database().ref('messages').orderByKey().limitToLast(100);
    messagesRef.on('child_added', snapshot => {
      /* Update React state when message is added at Firebase Database */
      let message = { text: snapshot.val(), id: snapshot.key };
      this.setState({ messages: [message].concat(this.state.messages) });
    })
  }
  addMessage(e){
    e.preventDefault(); // <- prevent form submit from reloading the page
    /* Send the message to Firebase */
    fire.database().ref('messages').push( this.inputEl.value );
    this.inputEl.value = ''; // <- clear the input
  }
  render() {
    return (
      <div>
      <Wrapper>
       <Navbar />
       <div className="container text-center">
         <div className="row">
            <Featured />
      </div>
         </div>
            <Footer />
            </Wrapper>
      <br></br>
      <br></br>
      <br></br>
 
      <form onSubmit={this.addMessage.bind(this)}>
        <center>
        <input type="text" ref={ el => this.inputEl = el }/>
        <input type="submit"/>
        </center>
        <ul className='message'>
          { /* Render the list of messages */
            this.state.messages.map( message => <li key={message.id}>{message.text}</li> )
          }
        </ul>
      </form>
      </div>
    );
  }
}
export default App;
