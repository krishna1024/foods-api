import React from 'react'
export default className WizardBreadCrumb extends React.Component {

    constructor(props) {
        super(props);
        this.stateclassNameMap = {
            previous: 'previous',
            current: 'current',
            next: 'next'
        }
    }

    render() {
        let currentStage = this.props.currentStage;
        return(<nav>
            <ul>
                { this.props.stages.map( (stage,index,stages) => <li
                    key={ index }
                    classNameName={ this.getclassNameName(index,stages,currentStage) }
                >
                  { stage.name }
                 </li>)
                }
            </ul>
        </nav>);
    }

    getclassNameName(index,stages,currentStage) {
        const state = this.getStageState(index,stages,currentStage);
        return this.stateclassNameMap[state];
    }

    getStageState(index,stages,currentStage){
        let currentIndex = stages.findIndex( (stage) => stage.id === currentStage );
        if( index === currentIndex ) return 'current';
        else if( currentIndex!== -1 && index > currentIndex ) return 'next';
        else return 'previous';
    }
}

