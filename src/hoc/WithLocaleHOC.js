import React, { Component } from 'react'
import PropTypes from 'prop-types'

const WithLocaleHOC = (WrappedComponent) => {
    return class WithLocaleHOC extends Component {
        static contextTypes = { // any child that want to conusme the conte must white list the propetie it needs to access
            locale: PropTypes.object
        }

        componentDidMount() {
            this.context.locale.subscribe(() => this.forceUpdate());
        }

        render() {
            const { locale } = this.context;
            return <WrappedComponent {...this.props} locale={locale} />
        }
    }
} //without directly using hoc, as subject to change. reuse the behavior. hoc is a function that recive a compnent as a parameter and it returns a component

export default WithLocaleHOC;

//https://www.youtube.com/watch?v=mwYHDXS6uSc
//how to safely use react hoc  : mischelle