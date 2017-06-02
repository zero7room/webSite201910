/**
 * @file 首页
 * @author zeqi wang
 */

import React from 'react';
import {render} from 'react-dom';

export default class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    componentWillReceiveProps(nextProps) {
    }

    componentWillUnmount() {
    }


    render() {
        return (
          <div>
            <p>自我介绍1</p>
          </div>
        );
    }
}