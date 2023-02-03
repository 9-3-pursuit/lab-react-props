export default function Progress(donations) {

    let sum = 0;
    for (let i = 0; i < donations.length; i++) {
      sum += donations[i].amount
    }
  
    return (
      <section className="progress">
        <h2>
          Raised <span classname="secondary">${sum}</span>
          <span className="secondary">of $1000</span>
        </h2>
      </section>
    )
  }


