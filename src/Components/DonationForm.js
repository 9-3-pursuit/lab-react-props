// export default function DonationForm() {
//   return null;
// }

import "./DonationForm.css"

function DonationForm(props) {
  return (
    <div>
      <form>
      <h3>You could be donation #{props.donations.length++}! </h3>
      
      <label>Name</label>
      <input type="text" placeholder="Your Name"></input>
      <label>Caption</label>
      <input type="text" placeholder="Add a brief message"></input>
      <label>Amount</label>
      <input type="text" placeholder="0"></input>
      <button>Donate</button>
      </form>
      </div>
  )
}
export default DonationForm