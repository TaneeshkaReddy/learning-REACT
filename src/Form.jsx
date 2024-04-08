function handleFormSubmit(e){ // e is an event object passed by default
  e.preventDefault(); // default tha kee- after submitting the form page apneaap refresh ho raha tha , so to prevent that we use this
  console.log("form submitted");
}

export default function Form(){
  return (
    <form onSubmit={handleFormSubmit}>
      <button>Submit</button>
    </form>
   
  )
}