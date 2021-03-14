import React from 'react'

class QuizBlock extends React.Component {
    render() {
        console.log(this.props)
        const q = this.props.fields[this.props.qNumber],
        question = q.q,
        answer = q.a,
        img = (undefined !== q.img ? <img src={q.img.src} className={(q.img.showOnAnswer ? 'on-answer ' : '') + "quiz-image"} alt="" /> : null),
        containerClass = 'questions-block ' + (this.props.showAnswers === true || this.props.showAnswer === true ? 'show-answers' : 'no-answers') 

        return (<>
            <div className={containerClass}>
                <div className="jumbotron">
                    { (null === img ? [
                        <h2 key="a1"><span>{this.props.qNumber + 1}. </span> {question}</h2>,
                        <div key="a2" className="answer-block card">
                            <div className="card-body"><strong>Answer:</strong><p className="answer">{answer}</p></div>
                        </div>
                    ] : 
                        <div className="row">
                            <div className="col-md-4 order-md-2">{img}</div>
                            <div className="col-md-8 order-md-1">
                                <h2><span>{this.props.qNumber + 1}. </span> {question}</h2>
                                <div className="answer-block card">
                                    <div className="card-body"><strong>Answer:</strong><p className="answer">{answer}</p></div>
                                </div>
                            </div>
                        </div>
                    )}
                    <div className="question-counter"><p>{this.props.qNumber+1}/{this.props.fields.length}</p></div>
                </div>
            </div>
            <div className="controls">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col">
                            <button type="button" className="btn primary" id="prev" onClick={this.props.nextQuestion}>Previous</button>
                            <button type="button" className="btn primary" id="next" onClick={this.props.nextQuestion}>Next</button>
                        </div>
                        <div className="col text-right">
                            <button
                                type="button"
                                className="btn primary this-answer"
                                id="singleAnswerToggle"
                                onClick={this.props.toggleAnswer}
                                disabled={(this.props.showAnswers ? "disabled" : null)}
                            >{(this.props.showAnswers === false && this.props.showAnswer === false ? 'Show' : 'Hide')} Answer</button>
                            <button type="button" className="btn primary all-answers" id="answerToggle" onClick={this.props.toggleAnswers}>{(this.props.showAnswers === false ? 'Show' : 'Hide')} All Answers</button>
                        </div>
                    </div>
                </div>
            </div>
        </>)
    }
}

export default QuizBlock