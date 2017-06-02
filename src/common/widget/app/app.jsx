/**
 * @file
 * Created by z7 on 16/8/24.
 * 导航栏目
 */
import React from 'react';
import 'common/widget/app/app.less';
// require('./app.less');
import Nav from 'common/widget/nav/nav.jsx';

export default React.createClass({

    render () {
        let props = this.props;
        let children = React.Children.map(this.props.children, function (child) {
            return React.cloneElement(child, props);
        });
        return (
            <div>
                <Nav {...props}/>
                <div className="main">
                    {children}
                </div>
            </div>
        );
    },
    componentDidMount () {

    }
});