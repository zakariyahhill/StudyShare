import React from 'react';

import NotecardContent from './NotecardContent';
import NotecardSidebar from './NotecardSidebar';
import ContentHeader from 'ContentHeader';
export default class Notecard extends React.Component {
    static defaultProps = {
        foo: "bar"
    };

    state = {
        foo: "bar"

    };

    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div>
                <ContentHeader title="Edit Deck"/>
                <NotecardSidebar/>
                <NotecardContent />
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
