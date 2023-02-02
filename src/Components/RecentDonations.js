// export default function RecentDonations() {
//   return null;
// }

const RecentDonations = (props) =>{

  return (
    
    <div>
    <h2>Recent Donations</h2>

      <ul>
        {props.donations.map((donation) => {
          return <li>{donation.name} donated  ${donation.amount} {donation.caption}</li>
        })}

 
      </ul>
      
      </div>
      )
     
}

export default RecentDonations;
