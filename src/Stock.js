import React, { Component } from "react";

class Stock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stockChartXValues: [],
      stockChartYValues: [],
    };
  }

  componentDidMount() {
    this.fetchStock();
  }

  fetchStock() {
    const API_KEY = "KGOAMZGIUYPXHOTO";
    let API_Call = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=IBM&outputsize=full&apikey=${API_KEY}`;

    fetch(API_Call)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);
      });
  }
  render() {
    return (
      <div>
        <h1>Stock Market</h1>
      </div>
    );
  }
}
export default Stock;
