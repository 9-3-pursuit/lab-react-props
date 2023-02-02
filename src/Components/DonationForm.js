export default function DonationForm( {donations} ) {
  return (
    <div>
      <h2>You could be donation <span className="secondary">#{donations.length + 1}!</span></h2>
      <form className="donation">
        <label>Name 
        <input type="text" placeholder="Your name..." />
        </label>
        <label>Caption 
        <input type="text" placeholder="Add a brief message..." />
        </label>
        <label>Amount 
        <input type="text"placeholder="0" />
        </label>
        <input type="submit" value="Donate!" />
      </form>
    </div>
  )
}
