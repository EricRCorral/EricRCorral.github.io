import React from 'react'

class AboutMe extends React.Component {

    constructor(props) {

        super(props);

        this.state = {
            textAbout: '',
            drawing: false,
            photo: []
        }

        this.aboutContent = this.aboutContent.bind(this);

    }

    async aboutContent() {

        const PHOTOASCII = [
            'MNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNmNmmmmmmmmmmmmmm',
            'NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNmmmmmmmmmmmmmmm',
            'NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNmmmmmmmmmmmmmmmmm',
            'NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNmmmmmmmmmmmmmmmm',
            'NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNmmmmmmmmmmmmmmmm',
            'NNNNNNNNNNNNNNMNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNmmmmmmmmmmmmmmm',
            'NNNNNNNNNNNNMMNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNmmmmmmmmmmmmmmmm',
            'NNNNNNNNNNMMNMNMMMNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNmmmmmmmmmmmmmmmmm',
            'NNNNNNNMNNMMMMMMNNNNNNNNNNNNNNNNNNNNNNhysosydmNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNmmmmmmmmmmmmmmmm',
            'NNNMMMMMMMMMMMMMMNNNNNNNNNNNNNNNNNds/-.......-/odNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNmmmmmmmmmmmmmmmmm',
            'MNMMMMMMMMNMMMMNNNNNNNNNNNNNNNNNy/.............../dNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNmmmmmmmmmmmmmmmmmm',
            'MMNMMMMMMMMMNMNNNNNNNNNNNNNNNNNs-.................-omNNNNNNNNNNNNNNNNNNNNNNNNNNNNmmmmmmmmmmmmmmmmmmm',
            'MMMNMMMNMNNMNNNNNNNNNNNNNNNNNNm+/++///::-------.....:mNNNNNNNNNNNNNNNNNNNNNNNNNNNmmmmmmmmmmmmmmmmmmm',
            'MMMMMMMMMNNNNNNNNNNNNNNNNNNNNNyhhhhyyssssssoooo++o++-/mNNNNNNNNNNNNNNNNNNNNNNNNNmmmmmmmmmmmmmmmmmmmm',
            'MMMMMMMMNNNNNNNNNNNNNNNNNNNMNydddddhhyyyyyyssssssssss+/dNNNNNNNNNNNNNNNNNNNNNNNNmmmmmmmmmmmmmmmmmmmm',
            'MNMMMMNNNNNNNNNNNNNNNNNNNMMNydddddddhhyyyyyysssssssssso:dNNNNNNNNNNNNNNNNNNNNNNNmmmmmmmmmmmmmmmmmmmm',
            'MMMMNMNNNMNNNNNNNNNNNNNNNNNdydddddddhhyyyyyyyssssssssss+/NNNNNNNNNNNNNNNNNNNNNNmmmmmmmmmmmmmmmmmmmmm',
            'MNMMNNNNNNNNNNNMMMNNNNNNNMNoyddddhhhhyyyyyyyssssssssssso:sNNNNNNNNNNNNNNNNNNNNNmmmmmmmmmmmmmmmmmmmmm',
            'MNNNNNNMNNNNNNNMMMMMMMMNNMm/ydyso++++oooosss++++////+oso/:NNNNNNNNNNNNNNNNNNNNmmmmmmmmmmmmmmmmmmmmmm',
            'MNNNNNNNNNNNNMMMMMMMMMMMMMd/yysooo++++o+oso+:::-----::+o:-mNNNNNNNNNNNNNNNNNNNmmmmmmmmmmmmmmmmmmmmmm',
            'NNNNNNNNNNNNMMMMMMMMMMMMMMm/yhhyo+/:/osyhyso+/::::://+++:-dNNNNNNNNNNNNNNNNNNNmmmmmmmmmmmmmmmmmmmmmm',
            'NNNNNNNNNNMMMMMMMMMMMMMMMMN/hdyos+::+oyhdhyso+::-..::/oo:-dNNNNNNNNNNNNNNNNNmmmmmmmmmmmmmmmmmmmmmmmm',
            'NNNNNNNNNMMMMMMMMMMMMMMMMNNydddhhyssyhdddhysoo+////+//os/-mNNNNNNNNNNNNNNNNNmmmmmmmmmmmmmmmmmmmmmmmm',
            'NNNNNNNNNNMNMMMMMMMMMMMMMmhdddddhhhhdddddysssooooooooooss+mNNNNNNNNNNNNNNNNmmmmmmmmmmmmmmmmmmmmmmmmm',
            'NNNNNNNNNNMMNMMMMMMMMMMMMmhmmmdddhhhhddddysssooooosssssssosdNNNNNNNNNNNNNNNmmmmmmmmmmmmmmmmmmmmmmmmm',
            'NNNNNNNNNNNMMMMMMMMMMMMMMNddmmmddhhyhhshhyso+oooossssssss++hNNNNNNNNNNNNmmmmmmmmmmmmmmmmmmmmmmmmmmmm',
            'NNNNNNNNNNNNMMMMMMMMMMMMMMddmmdddhhhhyooss+::+ooossssssss+yNNNNNNNNNNNNmmmmmmmmmmmmmmmmmmmmmmmmmmmmm',
            'NNNNNNNNNNNNNMMMMMMMMMMMMMNddddddhsso/:-:/:..-/++oooooooosmNNNNNNNNNNmmmmmmmmmmmmmmmmmmmmmmmmmmmdddd',
            'NNNNNNNNNNNNNNNMNMNMMMMMMMNNdhddy///++++++/::----:+o++++smNNNNNNNNNNmmmmmmmmmmmmmmmmmmmmmmmmmmmmdddd',
            'NNNNNNNNNNNNNNNNNNNNNNNMNMNNmhhhsosyyyso+++//:::::+++++odNNNNNmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmdddddd',
            'NNNNNNNNNNNNNNNNNNNNNNMNNNNNNddhsshhhhyssoo++++++:/++++hNNNNNmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmddddddd',
            'NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNmh+ohhhhyssooo++++/:+/++/ymNmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmddddddddd',
            'NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNh//oosyysssoo++/:--////-:ymmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmdddddddddd',
            'NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNms:::/+o+:/++/-..´-://-.-:smmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmdddddddddd',
            'NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNmydy+:-:----::..´.-///:..---/+hdmmmmmmmmmmmmmmmmmmmmmmmmmmdddddddddddd',
            'NNNNNNNNNNNNNNNNNNNNNNNNNmdysoshyddhs+/:::---::////:-....--.-:+shmmmmmmmmmmmmmmmmmmmmmdddddddddddddd',
            'NNNNNNNNNNNNNNNNNNNNNmhyo+/::ohs/ddddhsssooo+oo++//:............-/ohdmmmmmmmmmmmmmmmdddddddddddddddd',
            'NNNNNNNNNNNNNNNNNNdyo+/:::::+hh/.sdddhhyysssssoo++-........´.....---/oyddddmmmmmmmmddddddddddddddddd',
            'NNNNNNNNNNNNNNNNds++/+::::/oyy+-:/dddhhhyyyyysooo:.........´...........-::/oydmmmmdddddddddddddddddd',
            'NNNNNNNNNNNNNNNh++///+/:-:/ys/::--ohhhhyyyhyssys:-........´´´´´.......----:::/oydddddddddddddddddddd',
            'NNNNNNNNNNNNNNh/++///+/:--++::-:-::yhysyhhysoys:--........´´´.....-------------:/shddddddddddddddddh',
            'NNNNNNNNNNNNNN+//////++/:-://:::---sysoo+ooo+/---.............--------------------:ohdddddddddddddhh',
            'NNNNNNNNNNNNNN///////+////::://:-.-o+-.´.--.´´´´.-....´´.....------------------------+yhdddddddddhhh',
            'NNNNNNNNNNNNNN+////////:////:/:-:-..´´´´....--.......´´´....------------------........-oyddddddhhhhh',
            'NNNNNNNNNNNNNNo////////-://////.:..´´´..-----.........´..-------------------...........-:+hdddhhhhhh',
            'NNNNNNNNNNNNNd/////////:://////-...-..------------------------------------...............-:yhhhhhhhh',
            'NNNNNNNNNNNNNy////////::://::::..--:-:::::::::::::-:-----------------------....-...--......-yhhhhhhh',
            'NNNNNNNNNNNNNy////////://::::::--::--:::::::::::::::-----------------------.......--.´´...../hhhhhhh',
            'NNNNNNNNNNNNNd//////////::::-:-:-::-:::::::::::::-----------------------.-..-.......´´´.....-yhhhhhh',
            'NmNNNNNNNNNmmms+///////:::/:-:::::--:::::::::::::::-::--------------------.--.....´´´´.......:yhhhhh',
            'mmmmNNmmmmmmmmy///////::://:-:-:::--::::::::::::::-----------------------..----..´´´´´........-yhhhh',
            'mmmmmmmmmmmmmmy//////:::://:---:::-:::::::::::::-------------------------..--.-´´´´´´´´´´......:hhhh',
            'mmmmmmmmmmmmmmh/////::::::::---:::::::::::::-::--------------------------------......´´´´´......shhh',
            'mmmmmmmmmmmmmmd///////::-:::---::-:::::::::--------------------:----.----------..´´´´´´´´´......:hhh',
            'mmmmmmmmmmmmmmd///////::-::--.---:::::::--::--:--------------------...-------.´´´´´´´´´´´´....´´.ohh',
            'mmmmmmmmmmmmmmm///////:::::--.-:.-:::::::::::::----------..-:------...------.´´´´´´´´.....´.´..´´.oh',
            'mmmmmmmmmmmmmmm+//////::::--.:----:::::::::::-:----..-----.---:---...-----.´´............´´´´´...´´/',
            'mmmmmmmmmmmmmmms/////:::::-.-:--::::::::::::-------..------------....----.´.----.....--....´´´´´...´',
            'mmmmmmmmmmmmmmms////:::::-.---:.::::::::::::-----...------------.´´.--..´´--------..----.......´´´..',
            'mmmmmmmmmmmmmmd+////:::::-.:---.::::::::::------...----------..-.´´.--´´´----------..---........´´´.',
            'dddmmmmmmmmmmmh///:://:::.-:--.-:::::::::--------.---::-:---...-´´´.-.´´´---------------.........´´´',
            'ddddmmmmmmmmmms///::///:-.:-.-´-::::::---:---------:::----......´´´..´´´.---------------..........´´',
            'dddddddmmmmmmd+/://::/::-.:---´--:::::--:::------:::::---......-´´´..´´´.--------------.............',
            'dddddddddmdddy/:://///::-.----´.::-:::-:::-----::::::--........-.´´´´´´...--------------............',
            'ddddddddddddd+/://://:::---.-..-::--::-:::----::::::-..........-.´´´´´´:-..---------------..........',
            'ddddddddddddh//://::/:::----:´--::----::::::-:::-:--.............´´´´.shy:...--------------.........',
            'ddddddddddddo/::///::::::--:-----:::-.-:::::::------..´´´.........´´´.hhhh/-------------------......',
        ];

        const aboutTextFull = [
            '֎ Aprendiendo desarrollo web desde agosto del 2019',
            '֎ Vivo en Tigre, Buenos Aires',
            '֎ Nivel de ',
            'inglés intermedio/avanzado',
            '֎ Desarrollé aplicaciones con autentificación, consumo de APIs y base de datos NoSQL',
            '֎ En búsqueda de mi primer experiencia laboral IT',
            '֎ Más información en mi ',
            'cv'
        ];

        let photoCharacters = new Array(67).fill('');

        let letter = 0;

        let item = 0;

        let paragraphs = new Array(8).fill('')

        if (this.state.drawing) {
            return;
        }

        this.setState({
            drawing: true
        })

        await new Promise(done => {

            setTimeout(() => {

                let draw = setInterval(() => {

                    for (let i = 0; i < PHOTOASCII.length; i++) {

                        photoCharacters[i] += PHOTOASCII[i][letter]
                    }

                    letter += 1

                    this.setState({
                        photo: photoCharacters
                    })

                    if (photoCharacters[0].length === 100) {

                        clearInterval(draw)

                        done()

                    }
                }, 35);
            }, 1000);
        })

        letter = 0;

        let aboutParagraphs = setInterval(() => {

            paragraphs[item] += aboutTextFull[item][letter]

            letter += 1

            this.setState({
                textAbout: paragraphs
            })

            window.scrollBy(0, 20)

            if (paragraphs[item].length === aboutTextFull[item].length) {

                if (item + 1 === aboutTextFull.length) {

                    clearInterval(aboutParagraphs)

                }

                letter = 0

                item += 1
            }

        }, 15);
    }

    render() {

        let alternate = this.props.alternate

        let bgPhoto = (alternate) ? 'bg-photo-alternate ' : 'bg-photo';

        let photo = (alternate) ? 'photo-alternate' : 'photo';

        let photoRight = (alternate) ? 'photo-right-alternate' : 'photo-right'

        let aboutLink = (alternate) ? 'about-link-alternate' : 'about-link'

        if (this.props.show === 1) {

            this.aboutContent()
        }

        return (

            (this.props.show === 1 &&

                <div className="fadeIn">

                    <h2 className="about-title">Sobre mí</h2>

                    <div className={bgPhoto}>
                        {this.state.photo.map((item, i) => {
                            if (Math.round(i / 2) === i / 2) {
                                return <p className={photo} key={i}>{item}</p>
                            } else {
                                return <p className={photoRight} key={i}>{item}</p>
                            }
                        })}
                    </div>

                    <ul className="about-ul">
                        <li className="about-li">{this.state.textAbout[0]}</li>
                        <li className="about-li">{this.state.textAbout[1]}</li>
                        <li className="about-li">{this.state.textAbout[2]}<a className={aboutLink} href="https://www.efset.org/cert/GsPYh7" target="_blank" rel="noopener noreferrer">{this.state.textAbout[3]}</a></li>
                        <li className="about-li">{this.state.textAbout[4]}</li>
                        <li className="about-li">{this.state.textAbout[5]}</li>
                        <li className="about-li">{this.state.textAbout[6]}<a className={aboutLink} href="assets/images/CV_Eric Corral_Front_End.pdf" download>{this.state.textAbout[7]}</a></li>
                    </ul>

                </div>)
        )
    }
}

export default AboutMe
