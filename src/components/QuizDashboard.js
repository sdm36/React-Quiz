import React from 'react'
import { Questions, TieBreakers } from '../Questions'
import QuizHeader from './QuizHeader'
import QuizRounds from './QuizRounds'
import QuizBlock from './QuizBlock'

class QuizDashboard extends React.Component {
    state = {
        qNumber: 0,
        welcome: true,
        round: { label: 'Question', flag: true, fields: Questions },
        showAnswer: false,
        showAnswers: false,
    }

    startQuiz = () => {
        this.setState({ welcome: false })
    }

    setRound = () => {
        let r = { label: 'Question', flag: true, fields: Questions  }
        if (this.state.round.flag) {
            r = {  label: 'Tie Break', flag: false, fields: TieBreakers }
        }

        this.setState({
            round: r,
            qNumber: 0,
            showAnswer: false,
            showAnswers: false,
        })
    }

    nextQuestion = (e) => {
        const totalQs = this.state.round.fields.length,
            id = e.target.getAttribute("id")
        let nextQ = this.state.qNumber + 1
        if (id === 'next') {
            if (nextQ >= totalQs) {
                nextQ = 0
            }
        } else {
            nextQ = this.state.qNumber - 1
            if (nextQ < 0) {
                nextQ = this.state.round.fields.length - 1
            }
        }
        this.setState({
            qNumber: nextQ,
        })
    }

    toggleAnswer = () => {
        this.setState({
            showAnswer: !this.state.showAnswer,
        })
    }

    toggleAnswers = () => {
        this.setState({
            showAnswers: !this.state.showAnswers,
        })
    }

    render(){
        return(
            <div className={"quiz " + (this.state.welcome ? 'initialize' : 'en-marche')}>
                <QuizHeader
                    date="24th March 2021"
                    title="Team Quiz"
                    category="Music"
                    start={this.startQuiz}
                />
                <div className="container quiz-block">
                    <QuizRounds 
                        round={this.state.round}
                        setRound={this.setRound}
                    />
                    <QuizBlock
                        qNumber={this.state.qNumber}
                        nextQuestion={this.nextQuestion}
                        fields={this.state.round.fields}
                        showAnswers={this.state.showAnswers}
                        toggleAnswers={this.toggleAnswers}
                        showAnswer={this.state.showAnswer}
                        toggleAnswer={this.toggleAnswer}
                    />
                </div>
            </div>
        );        
    }
}

export default QuizDashboard