import React, {Component} from 'react'
import { Modal, Button } from 'antd';
import 'antd/lib/modal/style/css';
import 'antd/lib/button/style/css';

import LoginForm from '../forms/LoginForm'

import ui from "../../assets/theme/ui";

class ModalLogin extends Component {
  state = { visible: false }
  showModal = () => {
    this.setState({
      visible: true,
    });
  }
  handleOk = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }
  handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }
  render() {
    return (
      <div>
        <Button type="primary" onClick={this.showModal} style={ui.button}>Open</Button>
        <Modal
            title="Please Sign Up or Log In"
            visible={this.state.visible}
            onOk={this.handleOk}
            onCancel={this.handleCancel}
            footer={null}
        >
          <LoginForm />
        </Modal>
      </div>
    );
  }
}

export default ModalLogin 