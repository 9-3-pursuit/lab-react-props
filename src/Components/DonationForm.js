import "./DonationFrom.css"

export default function DonationForm(props) {
  return (
    <div>
      <form>
        <h3>You could be donation <span>#{props.donations.length++}!</span></h3>
        <label>Name</label>
        <br></br>
        <input type="text" placeholder="Your name..."></input>
        <br></br>
        <label>Caption</label>
        <br></br>
        <input type="text" placeholder="Add a brief message..."></input>
        <br></br>
        <label>Amount</label>
        <br></br>
        <input type="text" placeholder="0"></input>
        <br></br>
        <button type="Submit">Donate!</button>
      </form>
    </div>
  )
}
