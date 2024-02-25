import DealCards from "../DealCards/DealCards";
import "./Home.css";
import FeatureCards from "../FeatureCards/FeatureCards";
import Input from "../Input";
import Button from "../Button";
import "remixicon/fonts/remixicon.css";

function Home() {
  return (
    <div className="home">
      <h1>Best Website builders in the US</h1>
      <div id="article-detail">
        <div className="detail">
          <div style={{ display: "flex", gap: "2px" }}>
            <i className="ri-checkbox-circle-line"></i>
            <p>Last Updated - Feburary 22, 2020 </p>
          </div>
          <div style={{ display: "flex", gap: "2px" }}>
            <i className="ri-error-warning-line"></i>
            <p>Advertising Disclosure</p>
          </div>
        </div>
        <div className="selector">
          <div>Top Relevant</div>
          <i className="ri-arrow-drop-down-line"></i>
        </div>
      </div>

      <div id="features">
        <div>Tools</div>
        <div>AWS Builders</div>
        <div>Start Build</div>
        <div>Build Supplies</div>
        <div>Tooling</div>
        <div>BlueHosting</div>
      </div>

      <FeatureCards
        premium="Best Choice"
        title="WixPro 72-Inch Responsive Website Builder"
        description="Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)"
        mainHighlight="[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides."
        rating="9.8"
      ></FeatureCards>

      <FeatureCards
        premium="Best Value"
        title="SiteCraft 68-Inch Ultimate Web Design Studio"
        description="Advanced Site Creation Toolkit, Intuitive Drag-and-Drop Editor for Dynamic Websites and E-commerce Platforms (Green/White)"
        mainHighlight="[What You Get]: Gain access to the SiteCraft design studio, featuring a robust selection of design elements, SEO optimization tools, and e-commerce integrations."
        rating="8.9"
      ></FeatureCards>

      <FeatureCards
        title="WixPro 72-Inch Responsive Website Builder"
        description="Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)"
        mainHighlight="[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides."
        rating="9.8"
      ></FeatureCards>

      <FeatureCards
        title="CDK Resposive Builder"
        description="An extensive library of widgets and apps, and detailed step-by-step guides"
        mainHighlight="[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides."
        rating="7.1"
      ></FeatureCards>

      <div id="deal-cards">
        <DealCards
          cardTitile="Webbuilder 1"
          offerPercent="20"
          offerTime="Limited time"
          heading="Webbuilder 1"
          description="Computer  Modern clasic with wix support"
          price="49.96"
        ></DealCards>
        <DealCards
          cardTitile="Webbuilder 1"
          offerPercent="20"
          offerTime="Limited time"
          heading="Webbuilder 1"
          description="Computer  Modern clasic with wix support"
          price="49.96"
        ></DealCards>
        <DealCards
          cardTitile="Webbuilder 1"
          offerPercent="20"
          offerTime="Limited time"
          heading="Webbuilder 1"
          description="Computer  Modern clasic with wix support"
          price="49.96"
        ></DealCards>
      </div>
      <div className="signUp">
        <h3>
          Sign up and get exclusive
          <br /> special deals
        </h3>
        <div className="signUp-contact">
          <Input
            type="text"
            width="348px"
            height="52px"
            borderRadius="0px"
            bgColor="#F2F4F7"
          />
          <Button className="" width="65px" height="52px" text="Sign Up" />
        </div>
      </div>
    </div>
  );
}

export default Home;
