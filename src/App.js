import React,{ Component } from 'react';
import {connect} from 'react-redux';
import {sendMessage} from './components/Chat/Chat.js';
import './components/Chat/Chat.css'

class App extends Component {
  render(){
  const {feed, sendMessage} = this.props;
  return (
    <div>
      <h1>MILCO RESPONDE</h1>
      <div class="chatbox">
        <div class="chatlogs">
          <div class="chat friend">
              <p>
                {feed.map(entry => <div class="chat self"><div class="user-photo"><img src="https://www.lima2019.pe/images/milco/milco-2.png" /></div><p class="chat-message">{entry.text}</p></div>)}
              </p>
          </div>
        </div>  
        <div class="chat-form">
          <input type="text" onKeyDown={(e) => e.keyCode === 13 ? sendMessage(e.target.value):null}/>
        </div>
      </div>
    </div>
  );
}
}

const mapStateToProps = state => ({
  feed: state
});

export default connect(mapStateToProps,{
  sendMessage
})(App);
