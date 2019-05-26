import React, { Component } from 'react'

import { Formik, Form, Field } from 'formik';

interface InputTestProps {}

class InputTest extends Component {
  constructor(props: InputTestProps) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(values: any) {
    console.log('handleSubmit', values);
  }

  render() {
    return (
      <div className="wrapper">
        <Formik
          initialValues={{ value: ''}}
          onSubmit={(values) => {
            this.handleSubmit(values);
          }}
        >
          {() => (
          <Form>
            <Field type="text" name="text" />
            <button type="submit">
              Submit
            </button>
          </Form>
        )}
        </Formik>
      </div>
    )
  }
}

export default InputTest;
