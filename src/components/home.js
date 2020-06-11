import React from 'react'

class Home extends React.Component {

  constructor(props) {

    super(props);

    this.state = {
      me: ''
    }
  }

  async componentDidMount() {

    let homeText1 = 'Eric Corral desarrollador front end junior'.split('')

    let homeText2 = 'trainee'.split('')

    let homeText3 = 'estudiante autodidacta.'.split('')

    let homeText = ''

    await new Promise(done => {

      let write = setInterval(() => {

        homeText += homeText1.shift();

        this.setState({
          me: homeText
        })

        if (homeText1.length === 0) {

          clearInterval(write)

          done()

        }
      }, 80);
    });

    await new Promise(done => { setTimeout(() => done(), 2000); });

    await new Promise(done => {

      let write = setInterval(() => {

        homeText = homeText.substr(0, homeText.length - 1)

        this.setState({
          me: homeText
        })

        if (homeText.length === 36) {

          clearInterval(write);

          done();

        }
      }, 80);
    });

    await new Promise(done => {

      let write = setInterval(() => {

        homeText += homeText2.shift();

        this.setState({
          me: homeText,
        })

        if (homeText2.length === 0) {

          clearInterval(write)

          done()

        }
      }, 80);
    });

    await new Promise(done => setTimeout(() => done(), 2000))

    await new Promise(done => {

      let write = setInterval(() => {

        homeText = homeText.substr(0, homeText.length - 1)

        this.setState({
          me: homeText
        })

        if (homeText.length === 12) {

          clearInterval(write);

          done()
        }
      }, 80);
    })

    let write = setInterval(() => {

      homeText += homeText3.shift();

      this.setState({
        me: homeText
      })

      if (homeText3.length === 0) {

        clearInterval(write)

      }

    }, 80);
  }

  render() {

    let endLine = (this.props.alternate) ? '_' : '|'

    return (

      (this.props.show === 0 && <div className="fadeIn">

        <p className="text-home">
          {this.state.me}
          <span className="blink ">{endLine}</span>
        </p>

      </div>)
    )
  }
}

export default Home