import React from 'react';
import {render} from '@testing-library/react';
import {MobileVerifyCode} from '..';
import {Form} from '@mxjs/form';
import {MemoryRouter} from 'react-router';

describe('test', () => {
  test('basic', () => {
    const result = render(<MemoryRouter>
      <Form>
        <MobileVerifyCode/>
      </Form>
    </MemoryRouter>);
    expect(result.container).toMatchSnapshot();
  });
});
