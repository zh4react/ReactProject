import React, { Component } from 'react';
import { Layout, Menu, Breadcrumb, Icon, Form, Input, Button, Select, Row, Col } from 'antd';

import md5 from 'md5';

import MenuRouter from './MenuRouter';

const { SubMenu } = Menu;
const { Option } = Select;


const salt = '19970521';





class TestLayout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            current: 'translate',
            url: '',
            oldtranslation: '',
            newtranslation: ''
        }
    };
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div>
                <Form>
                    <Form.Item >{
                        getFieldDecorator('original')
                            (<Input.TextArea rows={4} />)
                    }
                    </Form.Item>
                    <Form.Item >{
                        getFieldDecorator('translation')
                            (<Input.TextArea rows={4} />)}
                    </Form.Item>

                    <Row type="flex" >
                        <Col span={4}>
                            <Form.Item>{
                                getFieldDecorator('language')
                                    (<Select initialValue='zh' style={{ width: 160 }}>
                                        <Option value='zh'>Chinese</Option>
                                        <Option value='en'>English</Option>
                                        <Option value='jp'>Japanese</Option>
                                    </Select>)
                            }
                            </Form.Item>
                        </Col>
                        <Col span={4}>
                            <Form.Item>{
                                (
                                    <Button onClick={this.handleInput}>翻译</Button>
                                )
                            }
                            </Form.Item>
                        </Col>
                    </Row>
                </Form>

            </div>

        )

    };

    //获取需要翻译的文本值,传入百度api之中
    handleInput = (value) => {

        const language = this.props.form.getFieldValue('language');
        const original = this.props.form.getFieldValue('original');
        const str = '20190817000327144' + original + salt + '0u50SoEtDxTFs0usoIcs';
        const md5text = md5(str);
        const strtwo = '/api/trans/vip/translate?q=' + original + '&from=auto&to=' + language + '&appid=20190817000327144&salt=' + salt + '&sign=' + md5text;
        if (strtwo !== '') {
            fetch(strtwo, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json;charset=UTF-8',

                },
                mode: 'cors',
                cache: 'default'
            })
                .then(res => res.json())
                .then((data) => {
                    this.props.form.setFieldsValue({ 'translation': data.trans_result[0].dst });

                })
                .catch(error => {
                    console.log(error)
                })
        }
    };



}
TestLayout = Form.create({})(TestLayout);
export default TestLayout;


