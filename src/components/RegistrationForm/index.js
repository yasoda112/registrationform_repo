// Write your JS code here
import './index.css'
import {Component} from 'react'

class RegistrationForm extends Component {
  state = {
    firstNameInput: '',
    lastNameInput: '',
    showFirstNameError: false,
    showLastNameError: false,
    isFormSubmitted: false,
  }

  onChangeFirstName = event => {
    this.setState({firstNameInput: event.target.value})
  }

  onBlurFirstName = () => {
    const isValidFirstName = this.validateFirstName()
    this.setState({showFirstNameError: !isValidFirstName})
  }

  renderFirstNameInput = () => {
    const {firstNameInput, showFirstNameError} = this.state
    const className = showFirstNameError ? 'input err-msg' : 'input'

    return (
      <div className="input-container">
        <label className="label-el" htmlFor="firstName">
          FIRST NAME
        </label>
        <input
          type="text"
          className={className}
          value={firstNameInput}
          id="firstName"
          placeholder="First name"
          onChange={this.onChangeFirstName}
          onBlur={this.onBlurFirstName}
        />
      </div>
    )
  }

  onBlurLastName = () => {
    const isValidLastName = this.validateLastName()
    this.setState({showLastNameError: !isValidLastName})
  }

  onChangeLastName = event => {
    this.setState({lastNameInput: event.target.value})
  }

  renderSecondNameInput = () => {
    const {lastNameInput, showLastNameError} = this.state
    const className = showLastNameError ? 'input err-msg' : 'input'

    return (
      <div className="input-container">
        <label className="label-el" htmlFor="secondName">
          LAST NAME
        </label>
        <input
          type="text"
          className={className}
          value={lastNameInput}
          id="lastName"
          placeholder="Last name"
          onChange={this.onChangeLastName}
          onBlur={this.onBlurLastName}
        />
      </div>
    )
  }

  validateFirstName = () => {
    const {firstNameInput} = this.state
    return firstNameInput !== ''
  }

  validateLastName = () => {
    const {lastNameInput} = this.state
    return lastNameInput !== ''
  }

  onSubmitForm = event => {
    event.preventDefault()

    const isValidFirstName = this.validateFirstName()
    const isValidLastName = this.validateLastName()

    if (isValidFirstName && isValidLastName) {
      this.setState({isFormSubmitted: true})
    } else {
      this.setState({
        showFirstNameError: !isValidFirstName,
        showLastNameError: !isValidLastName,
        isFormSubmitted: false,
      })
    }
  }

  renderForm = () => {
    const {showFirstNameError, showLastNameError} = this.state
    return (
      <form onSubmit={this.onSubmitForm}>
        {this.renderFirstNameInput()}
        {showFirstNameError && <p className="error-msg">Required</p>}
        {this.renderSecondNameInput()}
        {showLastNameError && <p className="error-msg">Required</p>}
        <button type="submit" className="submit-btn">
          Submit
        </button>
      </form>
    )
  }

  onChangeForm = () => {
    this.setState(prevState => ({
      firstNameInput: '',
      lastNameInput: '',
      isFormSubmitted: !prevState.isFormSubmitted,
    }))
  }

  renderAnotherForm = () => (
    <>
      <img
        src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        alt="success"
        className="success-img"
      />
      <p className="success-text">Submitted Successfully</p>
      <button
        className="submit-another-btn"
        type="button"
        onClick={this.onChangeForm}
      >
        Submit Another Response
      </button>
    </>
  )

  render() {
    const {isFormSubmitted} = this.state

    return (
      <div className="bg-container">
        <h1 className="heading">Registration</h1>
        <div className="form">
          {isFormSubmitted ? this.renderAnotherForm() : this.renderForm()}
        </div>
      </div>
    )
  }
}
export default RegistrationForm
