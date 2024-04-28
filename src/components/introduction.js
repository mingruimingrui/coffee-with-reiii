import { Component } from "react";

import "./introduction.css";

export class Introduction extends Component {
  render() {
    return (
      <div className="Introduction">
        <div class="text-box-for-img">
          <h2>What is 3rd wave coffee?</h2>

          <p>
            Unlike traditional coffee, which often prioritizes consistency and
            convenience, third wave coffee places emphasis on the unique
            flavors, origins, and processing methods of coffee beans.
          </p>

          <p>
            This attention to detail and quality often results in more distinct
            and nuanced flavor profiles. Expect to find fruity and floral notes
            that are not typically associate with coffee.
          </p>
        </div>
      </div>
    );
  }
}
