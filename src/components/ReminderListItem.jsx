import React, {Component} from 'react';
import PropTypes from 'prop-types'

class ReminderListItem extends Component {

    render() {
        const { id, text } = this.props;
        return (
            <li key={id} className="list-group-item" onClick={(e) => { this.props.removeItem(id)}}>
                {text}
            </li>
        )
    }
}

ReminderListItem.propTypes = {
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    removeItem: PropTypes.func
}

export default ReminderListItem;

//https://stackoverflow.com/questions/44831916/how-to-delete-a-todo-item-onclick-in-react