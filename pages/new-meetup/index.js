import { Fragment } from "react";
import NewMeetupForm from '../../components/meetups/NewMeetupForm'


function NewMeetupPage() {
    function addMeetupHandler(enteredMeetupData) {
        console.log(enteredMeetupData);
    }
    return(
        <Fragment>

            <NewMeetupForm onAddMeetup={addMeetupHandler} />
 
        </Fragment>
    )
}

export default NewMeetupPage