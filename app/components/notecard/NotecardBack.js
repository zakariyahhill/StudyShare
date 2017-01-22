import React from 'react';
import $ from 'jquery';
import NotecardSelector from './NotecardSelector';

import '../../scss/notecard.scss';

export default class NotecardBack extends React.Component {
    static defaultProps = {
        id: 0
    };

    state = {
        view: 0
    };

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id={"notecard-back-"+this.props.cardId}
                className="back"
                    onClick={rotateCard.bind(null, this.props.cardId, false)}>
                <NotecardSelector cardId={this.props.cardId}/>

                {this.props.content}
            </div>
        );
    }

    componentWillMount() {
    }

    componentDidMount() {
    }

    componentWillReceiveProps(nextProps) {
    }

    shouldComponentUpdate(nextProps, nextState) {
        return true;
    }

    componentWillUpdate(nextProps, nextState) {
    }

    componentDidUpdate(prevProps, prevState) {
    }

}
