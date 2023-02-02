function DonationForm({donNum}) {
  return (
    <section className="donation">

      <h3>You could be donation 
        <span className="secondary"> #{donNum}!</span>
      </h3>

      <form>
        {/* Name Label */}
        <label htmlFor="name"> 
          Name 
          <input 
          id="name"
          name="name" 
          type="text" 
          placeholder="Your name..." /> </label>
        {/* Caption Label */}
        <label htmlFor="caption">
          Caption 
          <input 
          id="caption" 
          name="caption" 
          type="text" 
          placeholder="Add a brief message..." /> </label>
        {/* Amount Label */}
        <label htmlFor="amount">
        Amount 
        <input
        id="amount"
        name="amount"
        type="number"
        placeholder="0" /> </label>
        {/* Button */}
        <button>Donate!</button>
      </form>

    </section>
  );
}

export default DonationForm