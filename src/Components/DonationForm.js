import "./DonationForm.css"

export default function DonationForm() {

  return(
    <form className="donationForm">
      <label htmlFor="formName">Name</label>
      <input type="text" className="formName" placeholder="Your name..." />
      <label htmlFor="caption">Caption</label>
      <input type="text" className="formCaption" placeholder="Add a brief message..." />
      <label htmlFor="amount">Amount</label>
      <input type="number" className="amount" placeholder="0" />
      <input type="submit" className="formButton" value="Donate!" />
    </form>

  )
}
