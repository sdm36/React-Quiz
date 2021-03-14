import React from 'react'

class QuizHeader extends React.Component {
    render(){
        return (
            <div className="quiz-header container-fluid">
                <div className="container">
                    <header className="row justify-content-between">
                        <div className="col"><h1>{this.props.title}<span>{this.props.date}</span></h1></div>
                        {( undefined === this.props.category ? null : 
                            <div className="col text-right header-text">Category: {this.props.category}</div>
                        )}
                    </header>
                    <div className="intro">
                        <p>{this.props.info.questions} Questions across {this.props.info.rounds} Rounds</p>
                        <button id="beginQuiz" className="btn secondary start-quiz" onClick={this.props.start}>Start</button>
                    </div>
                    
                </div>
            </div>
        )
    }
} 

export default QuizHeader