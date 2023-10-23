import React, { Component } from "react";

export default class DigitalMarketing extends Component {
  render() {
    const theme = this.props.theme;

    // Replace SVG elements with image icons
    return (
      <div>
        <img
          src="https://logowik.com/content/uploads/images/buffer938.logowik.com.webp"
          alt="Ellipse"
          style={{
            width: "144.42094px",
            height: "18.74165px",
            backgroundColor: theme.text,
          }}
        />

        <img
          src="https://cdn.icon-icons.com/icons2/2407/PNG/512/mailchimp_icon_146054.png"
          alt="Rectangle1"
          style={{
            width: "436px",
            height: "272px",
            backgroundColor: theme.compImgHighlight,
          }}
        />

        <img
          src="https://cdn.icon-icons.com/icons2/2699/PNG/512/google_analytics_logo_icon_169085.png"
          alt="Rectangle2"
          style={{
            width: "436px",
            height: "272px",
            borderColor: theme.text,
            borderWidth: "2px",
          }}
        />

        {/* Continue to replace other SVG elements with image tags */}
      </div>
    );
  }
}
