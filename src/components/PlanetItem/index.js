import './index.css'

const PlanetItem = props => {
  const {children} = props
  console.log(children)

  return (
    <div>
      <h1>Planet</h1>
      <div className="children-container">{children}</div>
    </div>
  )
}

export default PlanetItem
