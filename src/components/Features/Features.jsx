import "./Features.scss";
import iconOnline from './../../images/icon-online.svg';
import iconBudgeting from './../../images/icon-budgeting.svg';
import iconOnBoarding from './../../images/icon-onboarding.svg';
import iconApi from './../../images/icon-api.svg';

const Features = () => {
    return ( 
        <section className="feature">
        <div className="feature__content container container--pall">

          <div className="feature__intro">
            <h2>Why choose Easybank?</h2>
            <p>We leverage Open Banking to turn your bank account into your financial hub. Control
              your finances like never before.</p>
          </div>


          <div className="feature__grid">
            <div className="feature__item">
              <div className="feature__icon"><img src={iconOnline} alt="Online Banking" /></div>
              <div className="feature__title">
                <h3>Online Banking</h3>
              </div>
              <div className="feature__description">Our modern web and mobile applications allow you to keep track of your
                finances
                wherever you are in the world.</div>
            </div>
            <div className="feature__item">
              <div className="feature__icon"><img src={iconBudgeting} alt="Simple Budgeting" /></div>
              <div className="feature__title">
                <h3>Simple Budgeting</h3>
              </div>
              <div className="feature__description">See exactly where your money goes each month. Receive notifications when
                you’re
                close to hitting your limits.</div>
            </div>
            <div className="feature__item">
              <div className="feature__icon"><img src={iconOnBoarding} alt="Fast Onboarding" /></div>
              <div className="feature__title">
                <h3>Fast Onboarding</h3>
              </div>
              <div className="feature__description">We don’t do branches. Open your account in minutes online and start taking
                control
                of your finances right away.</div>
            </div>
            <div className="feature__item">
              <div className="feature__icon"><img src={iconApi} alt="Open API" /></div>
              <div className="feature__title">
                <h3>Open API</h3>
              </div>
              <div className="feature__description">Manage your savings, investments, pension, and much more from one account.
                Tracking
                your money has never been easier.</div>
            </div>

          </div>

        </div>

      </section>
     );
}
 
export default Features;