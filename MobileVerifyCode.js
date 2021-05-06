// TODO
// 1. 移除 jQuery
// 2. 表单更新

import React from 'react';
import './verify-code';
import {Field} from '@mxjs/form';
import PropTypes from 'prop-types';
import $ from 'jquery';

class MobileVerifyCode extends React.Component {
  static defaultProps = {
    name: 'verifyCode',
    maxLength: 6,
  };

  static propTypes = {
    url: PropTypes.string,
    mobile: PropTypes.string,
    defaultMobile: PropTypes.string,
    name: PropTypes.string,
    maxLength: PropTypes.number,
  };

  componentDidMount() {
    let options = {};
    if (this.props.url) {
      options.url = this.props.url;
    }

    $('.js-verify-code-send').verifyCode(options);
  }

  render() {
    if (this.props.defaultMobile && this.props.defaultMobile === this.props.mobile) {
      return '';
    }

    return <div className="js-verify-code-from-group form-group">
      <label htmlFor="verify-code" className="control-label">
        验证码{' '}
        <span className="text-warning">*</span>
      </label>
      <div className="col-control">
        <div className="input-group">
          <Field type="tel" className="form-control" id="verify-code" name={this.props.name} placeholder="请输入验证码"
            maxLength={this.props.maxLength}/>
          <span className="input-group-append">
            <button type="button" className="js-verify-code-send btn btn-outline-primary">
              获取验证码
            </button>
          </span>
        </div>
      </div>
    </div>;
  }
}

export default MobileVerifyCode;
