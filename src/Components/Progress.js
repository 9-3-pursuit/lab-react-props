export default function Progress({ targetAmount, donations }) {
  const total = donations.reduce((total, donate) => {
    return total + donate.amount;
  }, 0);

  return (
    <section className="progress">
      <h2>
        Raised <span className="secondary">${total}</span> of
        <span className="secondary"> ${targetAmount}</span>
      </h2>
    </section>
  );
}
