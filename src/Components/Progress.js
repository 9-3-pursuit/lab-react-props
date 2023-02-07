export default function Progress(props) {
// console.log(props)
    let sum = 0;
    for (let i = 0; i < props.donations.length; i++) {
      sum += props.donations[i].amount
    }

    return (
      <section className="progress">
        <h2>
          Raised <span classname="secondary">${sum}</span>
          <span className="secondary"> of ${ props.targetAmount }</span>
        </h2>
      </section>
    )
  }


