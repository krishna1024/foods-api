import React from 'react'
import "./_wizardBreadCrumb.scss"

export default class WizardBreadCrumb extends React.Component {

    constructor(props) {
        super(props);
        this.stateclasseMap = {
            previous: 'previous',
            current: 'current',
            next: 'next'
        }
    }

    render() {
        let currentStage = this.props.currentStage;
        return(<nav className="white z-depth-1 wizard-bread-crumb">
            <ul>
                { this.props.stages.map( (stage,index,stages) => <li
                    key={ index }
                    className={ this.getclassNameName(index,stages,currentStage) + " black-text lighten-1" }
                >
                  <i className="material-icons blue-text darken-2 done" >check_circle</i>
                  <span className="todo blue white-text circle" > { index + 1 } </span>
                  <span className="label" >{ stage.name }</span>
                 </li>)
                }
            </ul>
        </nav>);
    }

    getclassNameName(index,stages,currentStage) {
        const state = this.getStageState(index,stages,currentStage);
        return this.stateclasseMap[state];
    }

    getStageState(index,stages,currentStage){
        let currentIndex = stages.findIndex( (stage) => stage.id === currentStage );
        if( index === currentIndex ) return 'current';
        else if( currentIndex!== -1 && index > currentIndex ) return 'next';
        else return 'previous';
    }
}

