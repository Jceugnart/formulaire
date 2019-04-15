import React, { Component } from 'react';

class FormEmployee extends Component {
    constructor(props){
        super(props);
        this.state = {
            nameFilm: '',
            firstname: '',
            urlFilm: '',
            config :{
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(this.state),
            },
            url: "http://campus-bordeaux.ovh:3001/api/quests/movies/"
        }
        this.onChange = this.onChange.bind(this);
        this.submitForm = this.submitForm.bind(this);
    }
    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value,
        });
    }
    submitForm(e) {
        e.preventDefault();
        fetch(this.state.url, this.state.config)
        .then(res => res.json())
        .then(res =>{
            if (res.error) {
                alert(res.error);
            } else {
                alert(`Le resultat n'a pas été envoyé ${res}!`);
            }
        }).catch(e => {
            console.error(e);
            alert('Erreur lors de l\'ajout du film');
        });
    }

    render () {
        return (
            <div className="FormEmployee">
                <h1>Saisi du film</h1>

                <form onSubmit={this.submitForm}>
                    <fieldset>
                        <legend>Informations</legend>
                        <div className="form-data">
                            <label htmlFor="nameFilm">Nom du film</label>
                            <input type="text" name="nameFilm" id="nameFilm" onChange={this.onChange} value={this.state.nameFilm}/>
                        </div>

                        <div className="form-data">
                            <label htmlFor="url">l'url du film</label>
                            <input type="url" name="url" id="url" onChange={this.onChange} value={this.state.urlFilm} />
                        </div>
                        <div className="form-data">
                            <label htmlFor="avisFilm">Avis sur le film</label>
                            <input type="textarea" name="avisFilm" id="avisFilm" onChange={this.onChange} value={this.state.avisFilm}/>
                        </div>
                        <hr />
                        <div className="form-data">
                            <input type="submit" value="Envoyer"/>
                        </div>
                    </fieldset>
                </form>
            </div>

        );
    }
}

export default FormEmployee;