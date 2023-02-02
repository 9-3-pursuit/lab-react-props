function RecentDonations({donation}) {
  return (
    <section>
      <h3>Recent Donations</h3>
      <ul>
        {donation}
      </ul>
    </section>
  );
}

export default RecentDonations

/* 
Donations:
{
  amount: number
  caption: string
  id: number
  name: string
}
*/