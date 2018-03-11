import React, {Component } from 'react';
import PropTypes from 'prop-types'
import ReminderListItem from './ReminderListItem'
import WithLocaleHOC from '../hoc/WithLocaleHOC'

class ReminderList extends Component {

    constructor(props){
        super(props);
    }

    /*static contextTypes = { // any child that want to conusme the conte must white list the propetie it needs to access
        locale: PropTypes.object
    }*/

    static propTypes = { // any child that want to conusme the conte must white list the propetie it needs to access
        locale: PropTypes.object
    }

    render() {
        //const locale = this.hoc;
        //console.log('REMINDERS', this.props.reminders);
        //const { locale } = this.hoc;
        const { locale } = this.props;
        return(
            <ul>
                <span>{locale.strings.header}</span>
                { this.props.reminders.map((item, index) => {
                    return <ReminderListItem
                        key={index}
                        id={item.id}
                        text={item.text}
                        removeItem={(e) => { this.props.removeItem(item.id)}} />
                        //return <li onClick={(e) => { this.props.removeItem(index)}} key={item.id}>{item.text}</li>
                })}
            </ul>
        );
    }
}

ReminderList.propTypes = {
    reminders: PropTypes.array,
    removeItem: PropTypes.func
}

export default WithLocaleHOC(ReminderList)

//https://github.com/tastejs/todomvc/tree/gh-pages/examples/react