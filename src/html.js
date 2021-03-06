import React from "react"
import favicon from './favicon.png';

export default class HTML extends React.Component {
  render() {
    return (
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <meta name="theme-color" content="#6c27ae" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <link rel="shortcut icon" type="image/png" href={favicon} />
          <link rel="apple-touch-icon" href={favicon} />
          {this.props.headComponents}
          <noscript>Your browser does not support JavaScript!</noscript>
        </head>
        <body {...this.props.bodyAttributes}>
          {this.props.preBodyComponents}
          <div
            key={`body`}
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          {this.props.postBodyComponents}
        </body>
      </html>
    )
  }
}
