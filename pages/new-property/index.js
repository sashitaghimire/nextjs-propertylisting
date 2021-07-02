import NewPropertyForm from "../../components/properties/NewMeetupForm"

const NewMeetupPage = () => {
 function addPropertyHandler(enteredPropertyData) {
  console.log(enteredPropertyData);
}
 
 return (
  <NewPropertyForm onAddProperty={ addPropertyHandler}/>
 )
}

export default NewMeetupPage
