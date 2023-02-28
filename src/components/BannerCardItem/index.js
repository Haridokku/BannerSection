// Write your code here.
import './index.css'

const TextDescription = prop => {
  const {header} = prop
  const {headerText, description, className} = header
  return (
    <li className={className}>
      <div className="text_container">
        <h1 className="title">{headerText}</h1>
        <p className="textStyle">{description}</p>
        <div>
          <button className="button1">Show More</button>
        </div>
      </div>
    </li>
  )
}
export default TextDescription
