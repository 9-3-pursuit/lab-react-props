const DonationForm = (props) => {
  return (
    <section className="Donation">
      <h3>You could be donation <span class="secondary">#{props.donorPosition}!</span></h3>
      <form>
      <label htmlFor="name">Name
      <br/>
      <input
          id="name"
          name="name"
          type="text"
          placeholder="Your name..." />
        </label>
        <br></br>
        <label htmlFor="caption">Caption
        <br/>
        <input
          id="caption"
          name="caption"
          type="text"
          placeholder="Add a brief message..." />
          </label>
          <br></br>
          <label htmlFor="amount">Amount
          <br/>
          <input
          id="amount"
          name="amount"
          type="number"
          placeholder="0" />
          </label>
          <br></br>
          <button>Donate!</button>
    </form>
    </section>
  )
}
export default DonationForm