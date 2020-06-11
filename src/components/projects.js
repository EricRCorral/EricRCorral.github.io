import React from 'react'
import storelist from '../assets/images/storelist.png'
import fordKa from '../assets/images/template-plan-ford-ka.png'
import gourmetaurant from '../assets/images/gourmetaurant.png'
import cof from '../assets/images/cry-of-fear.png'
import imgFirebase from '../assets/images/images-firebase.png'
import tmdb from '../assets/images/tmdb.png'

class Projects extends React.Component {

    constructor(props) {

        super(props);

        this.state = {}
    }

    render() {

        let alternate = this.props.alternate

        let cardContent = (alternate) ? 'card-content card-content-alternate' : 'card-content'

        let cardReveal = (alternate) ? 'card-reveal card-reveal-alternate' : 'card-reveal'

        let projectLink = (alternate) ? 'project-link-alternate' : 'project-link'

        let cardBox = (alternate) ? 'card card-alternate' : 'card'

        let projects1 = [
            {
                image: storelist,
                title: 'Storelist',
                description: 'App para crear listas de negocios y sublistas de articulos. Cuenta con creación de usuario, Google Maps para ubicar las tiendas, etiquetas y dark/light theme. ',
                details: 'Angular 8, Bootstrap 4, Angular Material, API Rest Auth Firebase, base de datos Cloud Firestore, hosting en Firebase.',
                demo: 'https://todolistmaps-d435d.web.app/',
                repo: 'https://github.com/EricRCorral/StoreList'
            },
            {
                image: fordKa,
                title: 'Plan Ford clon',
                description: 'Replica de una pagina web de planes de ahorro, link a la pagina original en el footer del mismo.',
                details: 'HTML, CSS y Javascript',
                demo: 'https://ericrcorral.github.io/Ford-Ka-Replica/',
                repo: 'https://github.com/EricRCorral/Ford-Ka-Replica'
            },
            {
                image: gourmetaurant,
                title: 'Gourmetaurant',
                description: 'Template de un sitio de comidas.',
                details: 'HTML y CSS.',
                demo: 'https://ericrcorral.github.io/Gourmetaurant',
                repo: 'https://github.com/EricRCorral/Gourmetaurant'
            }
        ]

        let projects2 = [
            {
                image: cof,
                title: 'Cry of fear',
                description: 'Template del sitio de un videojuego.',
                details: 'HTML y CSS.',
                demo: 'https://ericrcorral.github.io/CryOfFear',
                repo: 'https://github.com/EricRCorral/CryOfFear'
            },
            {
                image: imgFirebase,
                title: 'Images Firebase',
                description: 'App para almacenar imagenes en la base de datos de Firebase.',
                details: 'Angular 8, Cloud Firestore y Storage Firebase.',
                demo: 'https://ericrcorral.github.io/ImagenesFirebase',
                repo: 'https://github.com/EricRCorral/ImagenesFirebase'
            },
            {
                image: tmdb,
                title: 'MoviesApp',
                description: 'App que consume la API de TMDB para obtener información de peliculas. Dispone de un buscador.',
                details: 'Angular 8 y Bootstrap 4.',
                demo: 'https://ericrcorral.github.io/TMovieDB-App/',
                repo: 'https://github.com/EricRCorral/TMovieDB-App'
            }
        ]

        return (

            (this.props.show === 3 &&

                <div className='fadeIn m-cols'>

                    <h2 className='center-align'>Proyectos</h2>

                    <div className="row">

                        {projects1.map((item, i) => {

                            return (<div key={i} className="col l4 s12 ">

                                <div className={cardBox}>

                                    <div className="card-image">
                                        <img className='img-size activator' src={item.image} alt={item.title} />
                                    </div>

                                    <div className={cardContent}>
                                        <span className="card-title activator center-align">{item.title}</span>
                                    </div>

                                    <div className={cardReveal}>

                                        <span className='card-title center-align'>{item.title}</span>

                                        <p>{item.description}</p>

                                        <p>Detalles técnicos: {item.details}</p>

                                        <div className="links-space">
                                            <a href={item.demo} className={projectLink} rel="noopener noreferrer" target="_blank"><i className='fas fa-globe fa-2x'></i></a>
                                            <a href={item.repo} className={projectLink} rel="noopener noreferrer" target="_blank"><i className='fab fa-github fa-2x'></i></a>
                                        </div>

                                    </div>
                                </div>
                            </div>)
                        })}
                    </div>

                    <div className="row">

                        {projects2.map((item, i) => {

                            return (<div key={i} className="col l4 s12 ">

                                <div className={cardBox}>

                                    <div className="card-image">
                                        <img className='img-size activator' src={item.image} alt={item.title} />
                                    </div>

                                    <div className={cardContent}>
                                        <span className="card-title activator center-align">{item.title}</span>
                                    </div>

                                    <div className={cardReveal}>

                                        <span className='card-title center-align'>{item.title}</span>

                                        <p>{item.description}</p>

                                        <p>Detalles técnicos: {item.details}</p>

                                        <div className="links-space">
                                            <a href={item.demo} className={projectLink} rel="noopener noreferrer" target="_blank"><i className='fas fa-globe fa-2x'></i></a>
                                            <a href={item.repo} className={projectLink} rel="noopener noreferrer" target="_blank"><i className='fab fa-github fa-2x'></i></a>
                                        </div>

                                    </div>
                                </div>
                            </div>)
                        })}
                    </div>

                    <div className='center-align'>¿Interesado/a en ver más ? Todos mis proyectos están en producción, toca al gatito para verlos <a className={projectLink} href="https://github.com/EricRCorral?tab=repositories" target="_blank" rel="noopener noreferrer"><i className='fab fa-github-alt'></i></a></div>

                </div>
            )
        )
    }
}

export default Projects
