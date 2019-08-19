import React, { Component } from 'react';
import { HashRouter, Route, Switch, Link } from 'react-router-dom';
import TestLayout from './TestLayout';
import { Menu } from 'antd';

class MenuRouter extends Component {
    constructor(props){
        super(props);
        this.state = {
            current: 'translate'
        }
    }
    handleClick = (value) =>{
        this.setState({
            current: value.key,
          });
    }

    render() {
        return (
            <div>
                <HashRouter>
                    <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal" >
                        <Menu.Item key="tanslate" >
                            <Link to='/translate' />
                            Translate
                        </Menu.Item>

                        <Menu.Item key="one">
                            <Link to='/one' />
                            Navigation One
                        </Menu.Item>

                        <Menu.Item key="two">
                            <Link to='/two' />
                            Navigation Two
                        </Menu.Item>

                        <Menu.Item key="three">
                            <Link to='/three' />
                            Navigation Three
                        </Menu.Item>
                    </Menu>

                    <Switch>
                        <Route exact path="/translate" component={TestLayout} />
                        <Route exact path="/one" component={TestLayout} />
                        <Route exact path="/two" component={TestLayout} />
                        <Route exact path="/three" component={TestLayout} />
                    </Switch>
                </HashRouter>


            </div>

        )
    }
}
export default MenuRouter;