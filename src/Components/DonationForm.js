import './DonationForm'

function DonationForm(props) {
  return (
    <div>
      <form>
      <h3>You could be donation #{props.donations.length++}! </h3>
        <label>Name</label>
      <br/>
        <input type="text" placeholder="Your Name"></input>
        <br />
        <br />
        
        <label>Caption</label>
        <br/>
        <input type="text" placeholder="Add a brief message"></input>
        <br />
        <br />
        
        <label>Amount</label>
        <br/>
        <input type="text" placeholder="0"></input>
        <br />
        <br/>
      <button>Donate</button>
      </form>
      </div>
  )
}
export default DonationForm
