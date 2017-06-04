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
            <p>
                采用技术：webpack+react+react-router+antd+recharts
            </p>
          </div>
        );
    }
}