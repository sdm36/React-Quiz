import React from 'react'
import Toggle from 'react-toggle'

class QuizRounds extends React.Component {
    render() {
        return ( 
            <div className="row justify-content-between rounds">
                <div className="col"><h4>{this.props.round.label} Round</h4></div>
                <div className="col text-right">
                    <ul className="list-inline quiz-rounds">
                        {this.props.rounds.map(r => {
                            return (
                                <li className="list-inline-item">
                                    <label><span>{r.label}</span> <input
                                            type="radio"
                                            name="select-round"
                                            value={r.flag}
                                            onChange={this.props.setRound}
                                            defaultChecked={(r.flag === this.props.round.flag) ? true : false }
                                        /><span></span>
                                    </label>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        );
    }
}

export default QuizRounds