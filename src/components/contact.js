import React from 'react'
import emailjs from 'emailjs-com';

class Contact extends React.Component {

    constructor(props) {

        super(props);

        this.state = {
            userName: '',
            userEmail: '',
            message: '',
            checked: false
        }

        this.send = this.send.bind(this);
        this.writeInput = this.writeInput.bind(this);
    }

    writeInput(event) {

        let value = event.target.value

        switch (event.target.id) {
            case 'userName':

                this.setState({
                    userName: value
                })

                break;

            case 'userEmail':

                this.setState({
                    userEmail: value
                })

                break;

            default:

                this.setState({
                    message: value
                })

                break;
        }
    }

    send(event) {

        event.preventDefault();

        let paperPlane = document.getElementById('submit-icon')

        paperPlane.classList.remove('fa-paper-plane')

        paperPlane.classList.add('fa-spinner')

        paperPlane.classList.add('fa-pulse')

        emailjs.send('gmail', 'template_VwrsnqrH', this.state, 'user_8XFrb5L7X1OuMbMKLiKRh')
            .then(() => {

                paperPlane.style.setProperty('color', '#80808062', '!important')

                paperPlane.parentElement.setAttribute('disabled', '1')

                this.setState({
                    checked: true
                })

            })
    }

    render() {

        let alternate = this.props.alternate;

        let submitIcon = (this.state.checked) ? (alternate) ? 'submit-icon-alternate fas fa-check fa-2x' : 'submit-icon fas fa-check fa-2x' : (alternate) ? 'submit-icon-alternate fas fa-paper-plane fa-2x' : 'submit-icon fas fa-paper-plane fa-2x';

        let contactBox = (alternate) ? 'contact-box-alternate row' : 'contact-box row';

        let input = (alternate) ? 'input-alternate validate' : 'input validate';

        let submitButton = (alternate) ? 'btn-floating black' : 'btn-floating green darken-4'

        let textArea = (alternate) ? 'materialize-textarea input-alternate' : 'materialize-textarea input';

        let contactLink = (alternate) ? 'contact-link-alternate' : 'contact-link';

        return (

            (this.props.show === 4 &&

                <div className="fadeIn container">

                    <h2 className='center-align'>Contacto</h2>

                    <div className={contactBox}>

                        <form onSubmit={this.send} className='col s12 m9'>

                            <div className="row">

                                <div className="input-field col s12 m6">
                                    <input id="userName" type="text" className={input} required placeholder='Nombre' onChange={this.writeInput} value={this.state.userName} />
                                </div>

                                <div className="input-field col s12 m6">
                                    <input id="userEmail" type="email" className={input} placeholder='Email' required onChange={this.writeInput} value={this.state.userEmail} />
                                </div>

                            </div>

                            <div className="row valign-wrapper">

                                <div className='col s11 m11 input-field message'>
                                    <textarea className={textArea} id="message" placeholder='Escribí tu mensaje acá' required onChange={this.writeInput} value={this.state.message} />
                                </div>

                                <button className={submitButton} type="submit"><i id='submit-icon' className={submitIcon}></i></button>

                            </div>

                        </form>

                        <div className='col s12 m3 icon-contact'>

                            <div className='icon-margin'>
                                <a href="https://www.linkedin.com/in/eric-corral-906364192/" target="_blank " className={contactLink}>
                                    <i className="fab fa-linkedin fa-2x"></i>
                                </a>
                            </div>

                            <div className='icon-margin'>
                                <a href="https://github.com/EricRCorral" target="_blank " className={contactLink}>
                                    <i className="fab fa-github fa-2x"></i>
                                </a>
                            </div>

                            <div className='icon-margin'>
                                <a href="tel:+54 011 30131603" className={contactLink}><i className="fas fa-phone-square fa-2x"></i></a>
                            </div>
                        </div>
                    </div>
                </div>)
        )
    }
}

export default Contact