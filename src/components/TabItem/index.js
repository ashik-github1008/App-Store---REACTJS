// Write your code here
import './index.css'

const TabItem = props => {
  const {tabItemDetails, clickTabItem, isActive} = props

  const {displayText, tabId} = tabItemDetails

  const onClickTabItem = () => {
    clickTabItem(tabId)
  }

  const activeTabClassName = isActive ? 'active-tab-btn' : ''

  return (
    <li className="tab-item mr-4">
      <button
        type="button"
        onClick={onClickTabItem}
        className={`tab-button ${activeTabClassName}`}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
