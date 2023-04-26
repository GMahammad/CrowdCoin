import React, { useState, useEffect } from "react";
import { Segment, Dimmer, Loader } from "semantic-ui-react";

function Loading() {
  const styleCss = {
    'height': "100%",
    'width': "100%",
    'left' : '0%',
    'top': "0%",
    'position': "absolute",
  };
  const [load, setLoad] = useState(false);
  useEffect(() => {
    setLoad(true);
    setTimeout(() => {
      setLoad(false);
    }, 1500);
  }, []);
  return (
    <div>
      {load ? (
        <div>
          <Segment style={styleCss}>
            <Dimmer active inverted>
              <Loader inverted>Loading</Loader>
            </Dimmer>
          </Segment>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default Loading;
