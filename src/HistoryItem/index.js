import './index.css'

const HistoryItem = props => {
  const {itemDetails, deleteLogo} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = itemDetails

  const onDeleteLogo = () => {
    deleteLogo(id)
  }

  return (
    <li className="item-container">
      <p className="time-accessed">{timeAccessed}</p>
      <div className="text-container">
        <img src={logoUrl} alt="domain logo" className="logo-url" />
        <div className="title-and-delete-logo-container">
          <div className="title-container">
            <p className="title">{title}</p>
            <p className="domain-url">{domainUrl}</p>
          </div>
          <button
            type="button"
            data-testid="delete"
            onClick={onDeleteLogo}
            className="delete-button"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
              alt="delete"
            />
          </button>
        </div>
      </div>
    </li>
  )
}

export default HistoryItem
