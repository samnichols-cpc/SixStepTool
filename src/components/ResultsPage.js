import React from "react";

const stageContentsMap = {
  1: {
    name: "1. Ecosystem enablers",
    content: (
      <p>
        These are the start because they are fundamental to the viability and
        potential of an innovation place. Without a dynamic innovation ecosystem
        innovation places may be stymied in their efforts, which could lead to a
        waste of time and resources.
        <br />
        <br />
        Many places in the UK are still in the ecosystem stage. In these cases,
        leaders and stakeholders have some familiarity with the innovation
        opportunity but lack confidence or action plans for how to develop them.
        Only some of the known place, ecosystem and leadership ingredients are
        observed and prioritised.
      </p>
    ),
  },
  2: {
    name: "2. Audit",
    content: (
      <p>
        Once ecosystem conditions are in place, an audit stage is usually
        essential to distil the real areas of future strength and assess
        leadership appetite. Without it, there may be limited evidence or
        credibility about the scale of the opportunity, confusion about the
        place purpose, or an absence of reflection on the differentiating
        features or the character of competition locally and internationally
        <br />
        <br />
        Many places in the UK are still in the audit stage. In these cases,
        leaders and stakeholders have some familiarity with the innovation
        opportunity but lack confidence or action plans for how to develop them.
        Only some of the known place, ecosystem and leadership ingredients are
        observed and prioritised.
      </p>
    ),
  },
  3: {
    name: "3. Setup",
    content: (
      <p>
        ]. If auditing has confirmed the value of an innovation place, leaders
        of the place move to a setup stage. This is when strategy building and
        partnership engagement accelerates. Timing is often very important in
        this stage, especially around tactical questions of land value and
        assembly.
      </p>
    ),
  },
  4: {
    name: "4. Foundation stage",
    content: (
      <p>
        The foundation stage requires a first cycle of implementing the
        strategy. This is when a leadership team comes to the fore, and
        experiments with technology, partnership and governance are pursued.
      </p>
    ),
  },
  5: {
    name: "5. Growth stage",
    content: (
      <p>
        In the growth stage, innovation outcomes really flourish and project
        leaders are starting to embed the place’s role in the wider social,
        environmental and economic journey of the region. Co-ordination tasks
        and challenges grow, and relationships and profile beyond the boundaries
        of the place become a more sustained priority. Project leaders are
        shifting their attention to wider citywide or regional issues driving
        closer collaboration between governments and project leaders.
      </p>
    ),
  },
  6: {
    name: "6. Critical mass stage",
    content: (
      <p>
        Where to find out more Connected Places Catapult is hosting its
        first-ever Innovation Places Summit! Where some of the top place-makers
        and innovation practitioners will share how they are building hubs of
        innovation. We invite you to join and meet other place-makers and
        innovation leaders, share best practice, discuss potential solutions and
        practical funding tips and ideas.
      </p>
    ),
  },
};

class ResultsPage extends React.Component {
  render() {
    return (
      <div id="sst_resultsPage">
        <div id="sst_contentContainer">
          <div id="sst_banner">
            <img
              src="header.jpg"
              style={{
                width: "100%",
                height: "100%",
                backgroundSize: "contain",
              }}
            ></img>
          </div>
          <div
            id="sst_content"
            style={{ border: "solid 2px", padding: "20px" }}
          >
            <h3>{this.props.details.firstName}</h3>
            <h5>Your results are here!</h5>
            <p>
              As we look to invest in growth and recovery across the country,
              creating hubs for innovation activity is more important than ever.
              <br />
              <br />
              Innovation is at the heart of the UK’s recovery from COVID and the
              future economy. At the same time, it is widely recognised that
              economic productivity is unevenly distributed across the UK.
              <br />
              <br />
              No innovation place succeeds all at once. Whether a place
              initially evolves organically, or whether it is brought into being
              through external stimulus, its delivery of whole-place success
              requires patient interventions and intentional choices.
              International experience suggests that these choices are logically
              sequenced across 6 stages.
              <br />
              <br />
              Based on your answers we believe you are current at stage:
            </p>
            <p style={{ fontWeight: "bold", color: "#fc5e36" }}>
              {stageContentsMap[this.props.level].name}
            </p>
            {stageContentsMap[this.props.level].content}

            <div
              style={{
                display: "block",
                margin: "40px 10% 40px 10%",
                border: "solid #fc5e36 1px",
              }}
            />
            <div style={{ fontWeight: "bold", color: "#fc5e36" }}>
              Where to find out more
            </div>

            <p>
              <br />
              Connected Places Catapult is hosting its first-ever Innovation
              Places Summit! Where some of the top place-makers and innovation
              practitioners will share how they are building hubs of innovation.{" "}
              <br />
              <br />
              We invite you to join and meet other place-makers and innovation
              leaders, share best practice, discuss potential solutions and
              practical funding tips and ideas.
            </p>
          </div>
          <div id="sst_footer" style={{ position: "relative" }}>
            <a
              href="https://hopin.com/events/innovation-places-summit?utm_campaign=innovation-places-summit&utm_source=hopin&utm_medium=6-step-tool-results-page&utm_content=register"
              style={{
                display: "block",
                marginLeft: "35%",
                marginTop: "50px",
                marginBottom: "50px",
                width: "30%",
                padding: "20px",
                backgroundColor: "#fc5e36",
                color: "white",
                textAlign: "center",
              }}
            >
              Register Here
            </a>

            <p>
              Through our experience partnering with places to help unlock new
              economic potential through the adoption of new technologies and
              innovative approaches. Connected Places Catapult has created the
              Hubs of Innovation Playbook to help more places spark new hubs of
              innovation activity or amplify the impact of existing ones. The
              <br />
              <br />
              Playbook helps places which are already in the process of creating
              a hub, identify where they are on their journey, the key inputs,
              actions and decisions necessary – and importantly the pitfalls to
              avoid. For places that have yet to begin, it sets out the key
              ecosystem enablers which need to be established at the start of
              the journey and provides a roadmap to be consulted along the way.
              <br />
              <br />
              <br />
              <br />
              <br />
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default ResultsPage;
