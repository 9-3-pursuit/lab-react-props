import './DonationForm.css'

const DonationForm = (props) =>{
  return (
    <div>
      <form>
      <h3>You could be donation <span className='pink'>#{props.donations.length++}!</span> </h3>
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
      <button className='green'>Donate!</button>
      </form>
      </div>
  )
}
export default DonationForm
