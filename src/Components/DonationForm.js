export default function DonationForm( {donations} ) {
  return (
    <div>
      <h2>You could be donation <span className="secondary">#{donations.length + 1}!</span></h2>
      <form className="donation">
        <label>Name <br></br>
        <input type="text"/>
        </label><br></br>
        <label>Caption <br></br>
        <input type="text" />
        </label><br></br>
        <label>Amount <br></br>
        <input type="text" />
        </label><br></br>
        <input type="submit" value="Donate!" />
      </form>
    </div>
  )
}
