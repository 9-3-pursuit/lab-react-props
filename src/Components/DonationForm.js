export default function DonationForm({ donations }) {
  return (
    <div>
      <h2>
        You could be donation <span></span>#{donations.length + 1}!
      </h2>
      <form>
        <label htmlFor="">Name</label>
        <input type="text" id="name" placeholder="Your name..." />
        <label htmlFor="">Caption</label>
        <input type="text" id="caption" placeholder="Add a brief message..." />
        <label htmlFor="">Amount</label>
        <input type="text" id="amount" placeholder="0" />
        <input type="submit" value="Submit" />
      </form>
    </div>

  );
}
