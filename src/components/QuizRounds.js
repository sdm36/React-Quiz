import React from 'react'
import Toggle from 'react-toggle'

class QuizRounds extends React.Component {
    render() {
        return ( 
            <div className="row justify-content-between rounds">
                <div className="col"><h4>{this.props.round.label} Round</h4></div>
                <div className="col text-right">
                    <label>
                        <span>Questions / Tie Break</span>
                        <Toggle
                            defaultChecked={this.props.round.flag}
                            onChange={this.props.setRound}
                            icons={false}
                        />
                    </label>
                </div>
            </div>
        );
    }
}

export default QuizRounds