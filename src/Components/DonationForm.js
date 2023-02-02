// export default function DonationForm() {
  // return null;

// import RecentDonations from "./RecentDonations";

// }
export default function DonationForm  ({donationNumber}) {
  
  return (
    <section className="donation">
      <h3>you could be donation<span class="secondary">#{donationNumber}!</span></h3>
        
        
      
      <form>

        <label htmlFor="name">
          Name
          <input id="name" name="name" type="text" placeholder="Your name..."/>

        </label>

        <hr></hr>
      

        <label htmlFor="caption">
          Caption
          <input id="caption" name="caption" type="text" placeholder ="Add a brief message..."/>
        </label>
        <hr></hr>
        <label htmlFor="amount">
          Amount
          <input id="amount" name="amount" type="number" placeholder= "0"/>

        </label>
        <hr></hr>
        <button>Donate!</button>

      </form>
    </section>
  );
};

