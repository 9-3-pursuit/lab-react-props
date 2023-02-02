function DonationForm(props) {
  
  // console.log(donations)
  return (
    <section className="donation">
      <h3>You could be donation <span class="secondary">#{props.donations}!</span></h3> 
      {/* props.name of you variable to make it refer to the working code in app.js files */}
      <form>
        <label htmlFor="name"
        >Name<input
          id="name"
          name="name"
          type="text"
          placeholder="Your name..."></input></label>
        <label htmlFor="caption">
          Caption<input
            id="caption"
            name="caption"
            type="text"
            placeholder="Add a brief message..." ></input>
        </label>
        <label htmlFor="amount">
          Amount<input
            id="amount"
            name="amount"
            type="number"
            placeholder="0"></input></label>
        <button>Donate!</button>
      </form>
    </section>
  )
}
export default DonationForm