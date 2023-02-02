export default function Progress(props) {
  let donationTotal = 0;
  props.donations.forEach((donation) => {
    donationTotal += donation.amount;
  });
  return (
    <section class="progress">
      <h2>
        Raised <span class="secondary">${donationTotal}</span> of
        <span class="secondary"> ${props.max}</span>
      </h2>
    </section>
  );
  // return null;
}
