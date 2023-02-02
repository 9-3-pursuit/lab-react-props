import "./RecentDonations.css"
export default function DonationForm({donationForm}) {

  return (
    <>
    
  <h3>You could be donation <span  className="numberSix">#6! </span></h3>
  <form>
    <label><strong>Name</strong></label>
    <br/>
    <input type = "text" className="name"placeholder = "Your name..."></input>
    <br/>
    
    <label><strong>Caption</strong></label>
    <br/>
    <input type = "text" className="caption"placeholder = "Add a brief message..."></input>
    <br/>
    <label><strong>Amount</strong></label>
    <br/>
    <input type = "number" className="number"placeholder = "0"></input>
    <br/>
    <input type ="submit" className="donates"value = "Donate"></input>
    </form>
    </>
  )
}
