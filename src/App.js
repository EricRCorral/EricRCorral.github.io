import React from 'react'
import Home from './components/home';
import AboutMe from './components/about-me'
import Projects from './components/projects';
import Contact from './components/contact';
import Skills from './components/skills';
import M from 'materialize-css'
import './css/materialize.css'
import 'materialize-css'

class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            show: 0,
            sidenav: [],
            alternate: false,
        };

        this.navigate = this.navigate.bind(this);
        this.sidenav = this.sidenav.bind(this);
        this.alternateTheme = this.alternateTheme.bind(this);
    }

    async sidenav() {

        let count = 0;

        let sidenavFull = new Array(6).fill('')

        const SIDENAVARR = [
            '<inicio>',
            'id = "eric"',
            'aptitudes()',
            '/proyectos/ig',
            'const ACTO',
            '</cerrar>'
        ]

        await new Promise(done => {

            let randomizer = setInterval(() => {

                let randomText = ''

                let sideArr = []

                while (randomText.length < 78) {

                    let random = String.fromCharCode(Number((Math.random() * 90 + 35).toFixed(0)));

                    randomText += random
                }

                for (let i = 0; i < randomText.length / 13; i++) {
                    sideArr.push(randomText.slice(i * 13, i * 13 + 13))
                }

                this.setState({
                    sidenav: sideArr
                })

                count += 1

                if (count === 20) {

                    clearInterval(randomizer)

                    done()

                }
            }, 40);
        })

        count = 0;

        let sidenavLetters = setInterval(() => {

            for (let i = 0; i < SIDENAVARR.length; i++) {

                if (SIDENAVARR[i][count] !== undefined) {

                    sidenavFull[i] += SIDENAVARR[i][count]

                }

            }

            count += 1

            this.setState({
                sidenav: sidenavFull
            })

            if (count === 15) {

                clearInterval(sidenavLetters)

            }

        }, 40);

    }

    navigate(event) {

        event.persist()

        let value = event.target.value

        if (value === this.state.show || value === 5) {
            return;
        }

        document.getElementsByClassName('fadeIn').item(0).classList.add('fadeOut');

        setTimeout(() => {

            this.setState({
                show: value
            })

        }, 1000);
    }

    alternateTheme() {

        localStorage.setItem('alternate', !this.state.alternate);

        this.setState({
            alternate: JSON.parse(localStorage.getItem('alternate'))
        })

    }

    componentDidMount() {

        let sidenavElement = document.querySelectorAll('.sidenav');

        M.Sidenav.init(sidenavElement);

        if (localStorage.getItem('alternate') === null) {
            localStorage.setItem('alternate', false)
        }

        this.setState({
            alternate: JSON.parse(localStorage.getItem('alternate'))
        })

    }

    render() {

        let alternate = this.state.alternate

        let sidenav = (alternate) ? 'sidenav-alternate' : 'sidenav';

        let sidenavClose = (alternate) ? 'sidenav-close-alternate sidenav-close' : 'sidenav-close ';

        let alternateIcon = (alternate) ? 'fas fa-tint-slash fa-2x tint' : 'fas fa-tint fa-2x tint'

        if (alternate) {

            document.getElementById('root').classList.add('alternate-theme')

        } else {

            if (localStorage.getItem('alternate') !== null) {

                document.getElementById('root').classList.remove('alternate-theme')
            }

        }

        return (

            <div id="app">

                <ul id="slide-out" className={sidenav}>
                    {this.state.sidenav.map((item, i) =>
                        <li key={i} onClick={this.navigate} value={i} className={sidenavClose}>{item}</li>
                    )}
                </ul>

                <div className="container">

                    <div className="top-app">

                        <i data-target="slide-out"
                            className="sidenav-trigger fas fa-bars fa-2x"
                            onClick={this.sidenav}>
                        </i>

                        <i className={alternateIcon} onClick={this.alternateTheme}></i>

                    </div>

                    <Home show={this.state.show} alternate={alternate} />

                    <AboutMe show={this.state.show} alternate={alternate} />

                    <Skills show={this.state.show} alternate={alternate} />

                    <Projects show={this.state.show} alternate={alternate}/>

                    <Contact show={this.state.show} alternate={alternate}/>
        
                </div>

            </div>
        )
    }
}

export default App