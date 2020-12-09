import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Joyride, {
  CallBackProps,
  STATUS,
  Step,
  StoreHelpers,
} from "react-joyride";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      run: false,
      steps: [
        {
          content: <h2>Let's learn how to!</h2>,
          locale: { skip: <strong aria-label="skip">SKIP</strong> },
          placement: "center",
          target: "body",
        },
        {
          content: <h2>First step</h2>,
          spotlightPadding: 20,
          target: ".shape1",
        },
        {
          content: "this is the 2nd square",
          placement: "bottom",
          /*styles: {
            options: {
              width: 300,
            },
          },*/
          target: ".shape2",
          title: "Our shapes",
        },
        {
          content: (
            <div>
              Try to render any component
              <br />
              <h3>Like this H3 title</h3>
            </div>
          ),
          placement: "top",
          target: ".shape3 h2",
          title: "Our Shapes",
        },
        {
          content: (
            <div>
              <h3>All about shapes</h3>
              <p>try to insert svg/img</p>
              <svg
                width="50px"
                height="50px"
                viewBox="0 0 96 96"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMidYMid"
              >
                <g>
                  <path
                    d="M83.2922435,72.3864207 C69.5357835,69.2103145 56.7313553,66.4262214 62.9315626,54.7138297 C81.812194,19.0646376 67.93573,0 48.0030634,0 C27.6743835,0 14.1459311,19.796662 33.0745641,54.7138297 C39.4627778,66.4942237 26.1743334,69.2783168 12.7138832,72.3864207 C0.421472164,75.2265157 -0.0385432192,81.3307198 0.0014581185,92.0030767 L0.0174586536,96.0032105 L95.9806678,96.0032105 L95.9966684,92.1270809 C96.04467,81.3747213 95.628656,75.2385161 83.2922435,72.3864207 Z"
                    fill="#000000"
                  />
                </g>
              </svg>
            </div>
          ),
          placement: "left",
          target: ".shape4",
        },
        {
          content: (
            <div>
              <h3>Shape 5</h3>
            </div>
          ),
          placement: "top",
          target: ".shape5",
          title: "Our Shapes",
        },
        {
          content: (
            <div>
              <h3>Shape 6</h3>
            </div>
          ),
          placement: "top",
          target: ".shape6",
          title: "Our Shapes",
        },
        {
          content: (
            <div>
              <h3>Text </h3>
              <p> try to scroll down </p>
            </div>
          ),
          placement: "top",
          target: ".shape7 h2",
          title: "Our Shapes",
        },
      ],
    };
  }
  handleJoyrideCallback = (data) => {
    const { status, type } = data;
    const finishedStatuses = [STATUS.FINISHED, STATUS.SKIPPED];

    if (finishedStatuses.includes(status)) {
      this.setState({ run: false });
    }

    // tslint:disable:no-console
    console.groupCollapsed(type);
    console.log(data);
    console.groupEnd();
    // tslint:enable:no-console
  };
  startDemo = () => {
    this.setState({
      run: true,
    });
    console.log(this.state.run);
  };
  getHelpers = (helpers) => {
    this.helpers = helpers;
  };
  render() {
    const { run, steps } = this.state;

    return (
      <div className="App">
        <Joyride
          callback={this.handleJoyrideCallback}
          continuous={true}
          run={run}
          scrollToFirstStep={true}
          getHelpers={this.getHelpers}
          showProgress={false}
          showSkipButton={true}
          steps={steps}
          styles={{
            options: {
              arrowColor: "#e3ffeb",
              backgroundColor: "#e3ffeb",
              overlayColor: "rgba(79, 26, 0, 0.4)",
              primaryColor: "blue",
              textColor: "#004a14",
              width: 300,
              zIndex: 1000,
            },
          }}
        />
        <button onClick={() => this.startDemo()}>Start</button>
        <div className="shape1">1</div>
        <div className="shape2">2</div>
        <div className="shape3">
          <h2>3</h2>
        </div>
        <div className="shape4">4</div>
        <div className="shape5">5</div>
        <div className="shape6">6</div>
        <div className="shape7">
          <h2>Better error handling</h2>
          Previously, runtime errors during rendering could put React in a
          broken state, producing cryptic error messages and requiring a page
          refresh to recover. To address this problem, React 16 uses a more
          resilient error-handling strategy. By default, if an error is thrown
          inside a component’s render or lifecycle methods, the whole component
          tree is unmounted from the root. This prevents the display of
          corrupted data. However, it’s probably not the ideal user experience.
        </div>
      </div>
    );
  }
}

export default App;
