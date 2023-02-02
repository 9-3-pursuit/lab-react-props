// export default function RecentDonations() {
  // return null;
// }
export default function RecentDonations ({donations}) {
  const liFromArr =donations.map(({name, caption, amount}) => (
    
      <li key = {name}>{name} donated ${amount} - {caption}</li>
    
  ))

  return (
    <section>
      <h2>Recent Donations</h2>
      <ul>
        {liFromArr}
        
      </ul>
    </section>
  );
}
