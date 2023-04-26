import React, { Component } from "react";
import { Card, Button } from "semantic-ui-react";
import factory from "../ethereum/factory";
import Layout from "../components/Layout";
import Link from "next/link";
import Loading from "../components/Loading";

class CampaignIndex extends Component {
  static async getInitialProps() {
    const campaigns = await factory.methods.getDeployedCampaigns().call();

    return { campaigns };
  }

  renderCampaigns() {
    const items = this.props.campaigns.map((address) => {
      return {
        header: address,
        description: (
          <Link href={`/campaigns/${address}`}>
            <a>View Campaign</a>
          </Link>
        ),
        fluid: true,
      };
    });

    return <Card.Group items={items} />;
  }

  render() {
    return (
      <div>
       <Loading/>
       <Layout>
        <div>
          <h3>Open Campaigns</h3>
          <Link href="/campaigns/new">
              <Button
                floated="right"
                content="Create Campaign"
                icon="add circle"
                primary
              />
          </Link>
          {this.renderCampaigns()}
        </div>
      </Layout>
      </div>
   
    );
  }
}

export default CampaignIndex;
