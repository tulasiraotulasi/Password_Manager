import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import PasswordList from '../PasswordList'
import './index.css'

class PasswordMain extends Component {
  state = {
    userList: [],
    websiteInput: '',
    usernameInput: '',
    passwordInput: '',
    showPassword: false,
    searchInput: '',
  }

  websiteInputChange = event => {
    this.setState({websiteInput: event.target.value})
  }

  usernameInputChange = event => {
    this.setState({usernameInput: event.target.value})
  }

  passwordInputChange = event => {
    this.setState({passwordInput: event.target.value})
  }

  searchInputChange = event => {
    this.setState({searchInput: event.target.value})
  }

  checkboxInputChange = () => {
    this.setState(prSt => ({showPassword: !prSt.showPassword}))
  }

  addUser = event => {
    event.preventDefault()
    const {websiteInput, usernameInput, passwordInput} = this.state
    if (websiteInput !== '' && usernameInput !== '' && passwordInput !== '') {
      const newUser = {
        id: uuidv4(),
        username: usernameInput,
        password: passwordInput,
        website: websiteInput,
      }
      this.setState(prSt => ({
        userList: [...prSt.userList, newUser],
        websiteInput: '',
        usernameInput: '',
        passwordInput: '',
      }))
    }
  }

  delUserPass = id => {
    this.setState(pS => ({
      userList: pS.userList.filter(list => id !== list.id),
    }))
  }

  render() {
    const {websiteInput, usernameInput, passwordInput} = this.state
    const {showPassword, searchInput, userList} = this.state
    const finalSearchList = userList.filter(eachValue =>
      eachValue.website.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="mainDiv1">
        <img
          className="img1"
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
          alt="app logo"
        />
        <div className="mainDiv2">
          <img
            className="img21"
            src="https://assets.ccbp.in/frontend/react-js/password-manager-sm-img.png"
            alt="password manager"
          />
          <form className="mainDiv3" onSubmit={this.addUser}>
            <div className="mainDiv3">
              <h1>Add New Password</h1>
              <div className="bar">
                <img
                  className="icon"
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                  alt="website"
                />
                <input
                  type="text"
                  placeholder="Enter Website"
                  onChange={this.websiteInputChange}
                  value={websiteInput}
                />
              </div>
              <div className="bar">
                <img
                  className="icon"
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                  alt="username"
                />
                <input
                  type="text"
                  placeholder="Enter Username"
                  onChange={this.usernameInputChange}
                  value={usernameInput}
                />
              </div>
              <div className="bar">
                <img
                  className="icon"
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                  alt="password"
                />
                <input
                  type="password"
                  placeholder="Enter Password"
                  onChange={this.passwordInputChange}
                  value={passwordInput}
                />
              </div>
              <button
                className="btn"
                type="submit"
                testid="delete"
                onClick={this.addUser}
              >
                Add
              </button>
            </div>
          </form>
          <img
            className="img2"
            src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
            alt="password manager"
          />
        </div>
        <div className="mainDiv2 mainDiv6">
          <div className="mainDiv5">
            <h1>Your Passwords</h1>
            <p>{finalSearchList.length}</p>
            <div className="bar">
              <img
                className="icon"
                src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                alt="search"
              />
              <input
                type="search"
                placeholder="Search"
                onChange={this.searchInputChange}
                value={searchInput}
              />
            </div>
          </div>
          <div className="mainDiv7">
            <input
              type="checkbox"
              id="cc"
              onChange={this.checkboxInputChange}
            />
            <label htmlFor="cc"> Show Passwords</label>
          </div>
          {finalSearchList.length === 0 ? (
            <div>
              <img
                className="noPasswords"
                src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
                alt="no passwords"
              />
              <p>No Passwords</p>
            </div>
          ) : (
            finalSearchList.map(sendList => (
              <ul className="footer" key={sendList.id}>
                <PasswordList
                  key={sendList.id}
                  list={sendList}
                  delUserPass={this.delUserPass}
                  showPassword={showPassword}
                />
              </ul>
            ))
          )}
        </div>
      </div>
    )
  }
}
export default PasswordMain
