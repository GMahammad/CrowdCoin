import React, { Component } from "react";
import { Form, Button, Input,Message } from "semantic-ui-react";
import Layout from "../../components/Layout";
import factory from "../../ethereum/factory"
import {Router} from '../../routes';
import Loading from "../../components/Loading";

class CampaignNew extends Component {
  state = {
    minimumContribution: "",
    errorMessage: "",
    loading: false,
  };
  onSubmit = async (event) => {
    event.preventDefault();
    this.setState({ loading: true, errorMessage: "" });

    try {
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      await factory.methods
        .createCampaign(this.state.minimumContribution)
        .send({
          from: accounts[0],
        });
        Router.pushRoute('/')
    } catch (err) {
      this.setState({ errorMessage: err.message });
    }

    this.setState({ loading: false });
  };
  render() {
    return (
      <div>
        <Loading/>
        <Layout>
        <h3>Create a Campaign</h3>
        <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
          <Form.Field>
            <label>Minimum Contribution</label>
            <Input
              label="wei"
              labelPosition="right"
              value={this.state.minimumContribution}
              onChange={(event) =>
                this.setState({ minimumContribution: event.target.value })
              }
            />
          </Form.Field>
          <Message error header="Oops!" content={this.state.errorMessage} />
          <Button loading={this.state.loading} primary> Create !</Button>
        </Form>
      </Layout>
      </div>
   
    );
  }
}

export default CampaignNew;
