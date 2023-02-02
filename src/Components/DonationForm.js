
const DonationForm = (props) => {
return (
  <section class="donation">
  <h3>
    You could be donation <span class="Secondary">#{props.donations}!</span>
  </h3>
  <form>
    <label>
      Name
      <input id="name" name="name" type="text" placeholder="Your Name..." />
    </label>
    <label>
      Caption
      <input id="caption" name="caption" type="text" placeholder="Add A Brief Message..." />
    </label>
    <label for="amount">
      Amount
      <input id="amount" name="amount" type="number" placeholder="0" />
    </label>
    <button>Donation!</button>$
  </form>
</section>
)



}



export default DonationForm;