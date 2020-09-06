import React from 'react';

// Components
import {
    Container,
    Row
} from 'reactstrap';
import Preamble from '../generic/preamble';
import Feature from './feature';

// Scss
import '../../styles/components/features.scss';

// Icons
import {
    faUserSecret,
    faLifeRing,
    faGlobe,
    faFighterJet,
    faSignal,
    faTerminal,
    faPiggyBank,
    faUsers,
    faRetweet,
    faCrosshairs,
    faCircle,
    faChartLine
} from '@fortawesome/free-solid-svg-icons';

const Features = () => (
    <section className="features section section--gradient__1">
        <Container>
            <Preamble light title="Unique Proxy Features">
                Our infrastructure is unique, battle-tested and carefully monitored by
                <br />
                Proxy Professionals 24/7 365 Days a year. We have extreme confidence that our service
                <br />
                operates at a level that will 100% satisfy your Proxy/Socks needs, every single time.
            </Preamble>
            <Row>
                <Feature icon={faUserSecret} title="Fully Anonymous">
                    All of our proxies are carefully decided and monitored in
                    order to ensure 100% anonymity, without any sort of ip or dns leaks.
                </Feature>
                <Feature icon={faLifeRing} title="24/7 Dedicated Support">
                    Sometimes the kind of support you offer means more than your product and we
                    know that. We're always available and you can give us a try.
                </Feature>
                <Feature icon={faGlobe} title="Fully Customizable">
                    We're offering more than 100 locations for our proxies and we constantly refresh our
                    list to add more locations from all over the world, this ensures high quality connections
                    purchase after purchase.
                </Feature>
            </Row>
            <Row>
                <Feature icon={faFighterJet} title="Instant activation">
                    Your proxies are activated INSTANTLY once your payment clears our system.
                    We take pride in offering a service with the word "Instant" and actually 
                    make good on that promise. Words on our website aren't just for SEO. We mean them.
                </Feature>
                <Feature icon={faSignal} title="Ultra High Speed">
                    All of our servers are attached to 1Gbps through 10Gbps connections and we are 
                    constantly updating our networking stacks to maintain the top speed available.
                </Feature>
                <Feature icon={faTerminal} title="Dedicated Backend Monitoring">
                    From Status Checking to Managing and Service Testing, we have it all.
                    Our stack is fully Automated and Dedicated and Self-Healing without any intervention.
                </Feature>
            </Row>
            <Row>
                <Feature icon={faPiggyBank} title="Honest Vandor Pricing">
                    Given the extremely high performance and service we provide, we can proudly say that our 
                    pricing is honest and with low profit margin. We do not price up as many proxy providers
                    are known for. We are committed in giving a service that is above the line in quality, but
                    surprisingly cheap for the quality of our Protocols.
                </Feature>
                <Feature icon={faUsers} title="Dual Authentication">
                    Why is it that almost all providers force you to pick your authentication method? Are you
                    not purchasing a service? Why limit your ability to make your own decisions? No thanks.
                    We hold you accountable for your actions using our service, with that means you decide how
                    you want to use that paid service. Authenticate how you want, we're here for your satisfaction.
                </Feature>
                <Feature icon={faRetweet} title="Monthly List Refreshing">
                    Each month you can replace your proxies with it without our assistance.
                    Our User Dashboard was designed for you. Allowing you to achieve full control.
                </Feature>
            </Row>
            <Row>
                <Feature icon={faChartLine} title="Unlimited Bandwidth">
                    We're not placing any limit on your bandwith. No cap, no reduction. It's yours for the
                    time YOU paid for it. Enjoy fast, responsive proxies for your needs.
                </Feature>
                <Feature icon={faCrosshairs} title="Pick Your Proxy">
                    We don't sell you packages. You can pick each IP individually using our search tools. 
                    Sort by Protocol, Country, State, City and more! You're in full control. You paid for it.
                </Feature>
                <Feature icon={faCircle} title="No Leaks">
                    Our automation suite constantly monitors and checks the proxies against IP and DNS leaks.
                    This ensure elite anonymity for you, all year long. Focus on your task, we focus on you.
                </Feature>
            </Row>
        </Container>
    </section>
    );

export default Features;
