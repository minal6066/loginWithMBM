import React, { Component } from "react";
import "./landing.css";

class Landing extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <section className="wrapper_landing">
        <div className="main-content_landing">
          <div className="logo_mbm_landing"></div>
          <h1 id="title_landing">M.B.M. ENGINEERING COLLEGE</h1>
          <div class="image_landing"></div>
          <br />
          <br />
          <div class="info">
            <div className="left_landing">
              <p>
                M.B.M Engineering College, established on 15th of August, 1951
                by the Government of Rajasthan, is one of the oldest engineering
                institutions in the country. Later in 1962, the college became a
                constituent faculty of Jai Narain Vyas University, Jodhpur. The
                college boasts of its high standards of education, prestigious
                legacy and a flourishing environment that caters for the overall
                development of its students, faculties and staff members.
              </p>
            </div>
            <div className="right_landing"></div>
          </div>
          <div class="clearfix"></div>
        </div>
      </section>
    );
  }
}

export default Landing;
