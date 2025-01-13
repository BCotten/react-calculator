/* eslint-disable react/prop-types */

export default function Button(props) {

  console.log(props)
  console.log(props.details)
  return (
    <div>
      <button className="btn">{props.details.text}</button>
    </div>
  )
}