
export default function DonationForm(props) {
  const { donations } = props
  console.log(donations)
// const donationCount = `You could be donation {donations.id}`
  return (
    <section className="donation">
  <h3>You could be donation #<span class="secondary">{donations[donations.length -1].id + 1}!</span></h3>
  <form>
    <label htmlFor="name"
      >Name<input
        id="name"
        name="name"
        type="text"
        placeholder="Your name..." /></label
    ><label htmlFor="caption"
      >Caption<input
        id="caption"
        name="caption"
        type="text"
        placeholder="Add a brief message..." /></label
    ><label htmlFor="amount"
      >Amount<input
        id="amount"
        name="amount"
        type="number"
        placeholder="0" /></label
    ><button>Donate!</button>
  </form>
</section>
);
};
