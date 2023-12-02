import './index.css'

const PasswordList = props => {
  const {list, showPassword, delUserPass} = props
  const {id, username, password, website} = list

  const deleteUser = () => {
    delUserPass(id)
  }

  return (
    <li className="listClass" key={id}>
      <div className="circle">
        <p>{username[0].toUpperCase()}</p>
      </div>
      <div className="listInner">
        <p>{website}</p>
        <p>{username}</p>
        <p>
          {showPassword ? (
            password
          ) : (
            <img
              className="passCode"
              src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
              alt="stars"
            />
          )}
        </p>
      </div>
      <button className="btn2" type="button" onClick={deleteUser}>
        <img
          className="delIcon"
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
          alt="delete"
          data-testid="delete"
        />
      </button>
    </li>
  )
}
export default PasswordList
