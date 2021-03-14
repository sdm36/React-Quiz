import React from 'react'
import { Questions, TieBreakers, RoundTwo, RoundThree } from '../Questions'
import QuizHeader from './QuizHeader'
import QuizRounds from './QuizRounds'
import QuizBlock from './QuizBlock'

class QuizDashboard extends React.Component {
    rounds = [
        { label: 'Question', flag: 0, fields: Questions },
        { label: 'Round 2', flag: 1, fields: RoundTwo },
        { label: 'Round 3', flag: 2, fields: RoundThree },
        { label: 'Tie Break', flag: 3, fields: TieBreakers }
    ]

    state = {
        qNumber: 0,
        welcome: true,
        round: this.rounds[0],
        showAnswer: false,
        showAnswers: false,
    }

    startQuiz = () => {
        this.setState({ welcome: false })
    }

    setRound = (e) => {
        this.setState({
            round: this.rounds[e.target.value],
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
            showAnswer: false,
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
        const tq = this.rounds.map(x => {
            return x.fields.length
        }),
        totalQuestions = tq.reduce((a, b) => a + b, 0)

        return(
            <div className={"quiz " + (this.state.welcome ? 'initialize' : 'en-marche')}>
                <QuizHeader
                    date="24th March 2021"
                    title="Team Quiz"
                    //category="Music"
                    info={{
                        rounds: this.rounds.length,
                        questions: totalQuestions,
                    }}
                    start={this.startQuiz}
                />
                <div className="container quiz-block">
                    <QuizRounds 
                        round={this.state.round}
                        rounds={this.rounds}
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