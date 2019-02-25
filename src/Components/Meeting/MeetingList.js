import React, {Component} from 'react'

class MeetingList extends Component{
    constructor(props){
        super(props) ; 
        this.state = {  
            meetingName: '' 
        } ; 

        this.handleChange = this.handleChange.bind(this) ; 
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        const itemName = e.target.name;
        const itemValue = e.target.value;
    
        this.setState({ [itemName]: itemValue });
      }
    
      handleSubmit(e) {
        e.preventDefault();
        this.props.addMeeting(this.state.meetingName);
        this.setState({ meetingName: '' });
      }
    render(){
        const {meetings} = this.props ; 
        const myMeetings = meetings.map(item =>{
          return(  
            <div className="list-group-item d-flex" key={item.meetingID}>
                <section className="pl-3  text-left align-self-center" >
                    {item.meetingName}
                </section>
            </div>
        )}); 
        
        return (
            <div>{myMeetings}
           </div>
        ) ; 
    }
}
export default MeetingList;
