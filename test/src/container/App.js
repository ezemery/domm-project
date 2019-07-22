import PropTypes from 'prop-types';
import React, { Component } from 'react';
import woman from "../assets/middle_aged_woman.png"
import logo from "../assets/logo.png";
import login from "../assets/login.png";
import secure from "../assets/pay.png";
import fill from "../assets/fill.png";
import padlock from "../assets/secure.png";
import phone from "../assets/phone.png";
import profile from "../assets/profile.png";
import companyone from "../assets/companyone.png";
import companytwo from "../assets/companytwo.png";
import integrations from "../assets/integrations.png";
import ios from "../assets/ios.png";
import android from "../assets/android.png";
import dark from "../assets/logo-dark.png";


import {
  Button,
  Card,
  Form,
  Container,
  Rating,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Visibility,
} from 'semantic-ui-react';

import "../style/App.css"

// Heads up!
// We using React Static to prerender our docs with server side rendering, this is a quite simple solution.
// For more advanced usage please check Responsive docs under the "Usage" section.
const getWidth = () => {
  const isSSR = typeof window === 'undefined'

  return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth
}

/* eslint-disable react/no-multi-comp */
/* Heads up! HomepageHeading uses inline styling, however it's not the best practice. Use CSS or styled components for
 * such things.
 */
const HomepageHeading = ({ mobile }) => (
  <Container>
    <Grid stackable columns={2}>
      <Grid.Row>
        <Grid.Column>
          <Header
              as='h1'
              content='One-click'
              style={{
                fontSize: mobile ? '2em' : '50px',
                marginBottom: 0,
                marginTop: mobile ? '1em' : '1em',
              }}
            />
            <Header
              as='h1'
              content='Sign up, Login and Pay'
              style={{
                fontSize: mobile ? '2em' : '50px',
                marginBottom: 0,
              }}
            />
            <p>Everywhere, with a Fast button</p>

            <div className="attached-button">
            <Segment attached>
            <Form>
              <Form.Field>
                <input type="email"
                placeholder='Enter your Email'/>
              </Form.Field>
            </Form>
            </Segment>
            <Button attached='bottom' className="signup-btn">
              <div className="signup-content"> 
                <p>Sign up without password</p>  
                <div className="image">
                <Image size='large' src={logo} className="btn-logo" />  
                </div>
              </div>
            </Button>
            </div>
            <Image size='medium' src={padlock} className="padlock" />  
        </Grid.Column>
        <Grid.Column>
        <Image size='large' src={woman} className="banner"/>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Container>
)

HomepageHeading.propTypes = {
  mobile: PropTypes.bool,
}

/* Heads up!
 * Neither Semantic UI nor Semantic UI React offer a responsive navbar, however, it can be implemented easily.
 * It can be more complicated, but you can create really flexible markup.
 */
class DesktopContainer extends Component {
  state = {}

  hideFixedMenu = () => this.setState({ fixed: false })
  showFixedMenu = () => this.setState({ fixed: true })

  render() {
    const { children } = this.props
    const { fixed } = this.state

    return (
      <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
        >
          <Segment
            inverted color="grey"
            style={{ minHeight:"800px"}}
            vertical
          >
            <Menu
              color="green" 
              inverted={!fixed}
              pointing={!fixed}
              secondary={!fixed}
              size='large'
            >
              <Menu.Item>
                <Image size='large' src={logo} className="logo" />
             </Menu.Item>
            
                <Menu.Item position='right'>
                  <Menu.Item as='a' active>
                    Home
                  </Menu.Item>
                  <Menu.Item as='a'>Products</Menu.Item>
                  <Menu.Item as='a'>About</Menu.Item>
                  <Menu.Item as='a'>Developers</Menu.Item>
                  <Menu.Item as='a'>Help Center</Menu.Item>
                  <Menu.Item as='a'><Button basic color='green' className="start-btn"> Get Started</Button></Menu.Item>

      
                </Menu.Item>
            </Menu>
            <HomepageHeading />          
          </Segment>
        </Visibility>

        {children}
      </Responsive>
    )
  }
}

DesktopContainer.propTypes = {
  children: PropTypes.node,
}

class MobileContainer extends Component {
  state = {}

  handleSidebarHide = () => this.setState({ sidebarOpened: false })

  handleToggle = () => this.setState({ sidebarOpened: true })

  render() {
    const { children } = this.props
    const { sidebarOpened } = this.state

    return (
      <Responsive
        as={Sidebar.Pushable}
        getWidth={getWidth}
        maxWidth={Responsive.onlyMobile.maxWidth}
      >
        <Sidebar
          color="green" 
          direction="right"
          as={Menu}
          animation='overlay'
          inverted
          onHide={this.handleSidebarHide}
          vertical
          visible={sidebarOpened}
        >
          <Menu.Item as='a' active>
            Home
          </Menu.Item>
          <Menu.Item as='a'>Work</Menu.Item>
          <Menu.Item as='a'>Company</Menu.Item>
          <Menu.Item as='a'>Careers</Menu.Item>
          <Menu.Item as='a'>Log in</Menu.Item>
          <Menu.Item as='a'>Sign Up</Menu.Item>
        </Sidebar>

        <Sidebar.Pusher dimmed={sidebarOpened}>
          <Segment
            inverted color="grey"
            textAlign='center'
            style={{ minHeight: 350 }}
            vertical
          >
            <Menu inverted color="green"  pointing secondary size='large'>
            <Menu.Item position="left">
                <Image src={logo} size="tiny" />
             </Menu.Item>

              <Menu.Item onClick={this.handleToggle} position='right'>
              <Button content='Get Started' style={
                  { fontSize: '1ß0px',
                  marginRight:"10px",
                  backgroundColor:"#fff", 
                  color:"#88D20F", 
                  width:"150px", 
                  alignSelf:"center"}
                  }/>
                <Icon name='sidebar' />
              </Menu.Item>
              </Menu>
            <HomepageHeading mobile />
          </Segment>

          {children}
        </Sidebar.Pusher>
      </Responsive>
    )
  }
}

MobileContainer.propTypes = {
  children: PropTypes.node,
}

const ResponsiveContainer = ({ children }) => (
  <div>
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </div>
)

ResponsiveContainer.propTypes = {
  children: PropTypes.node,
}

const App = () => (
  <ResponsiveContainer>
    <Segment style={{ padding: '8em 0em', backgroundColor: "#FBFDF7"}} vertical>
      <Grid centered >
        <Grid.Row>
            <Header as='h3' className="intro-section">
              Tap and Pay online
            </Header>
        </Grid.Row>
        <p style={{ fontSize: '1.33em' }}>
            No more passwords, no more typing credit card or shipping details
            </p>
      </Grid>

    <Container fluid style={{ padding: '4em 0em'}}>
      <Grid stackable columns={3}>
        <Grid.Row>
          <Grid.Column>
            <Card className="intro-cards">
              <Card.Content>
                <Image src={login} className="intro-icons" />
                <Card.Header className="intro-header">Fast Login</Card.Header>
                <Card.Meta className="intro-meta">One Click login</Card.Meta>
                <Card.Description className="intro-desc">
                Login and authenticate once using Fast, then one-click register and login at every Fast enabled site. Ultra-fast, ultra-secure
                </Card.Description>
                <Button floated="right" labelPosition='right' icon='right chevron' content='Get Started' />
              </Card.Content>
            </Card>
            </Grid.Column>

            <Grid.Column>
            <Card className="intro-cards">
              <Card.Content>
                <Image src={fill} className="intro-icons" />
                <Card.Header className="intro-header">Fast fill</Card.Header>
                <Card.Meta className="intro-meta">One Click Shipping fill</Card.Meta>
                <Card.Description className="intro-desc">
                Only enter your shipping details if you move. Otherwise, just tap and let Fast fill them in for you.</Card.Description>
                <Button floated="right" labelPosition='right' icon='right chevron' content='Get Started' />
              </Card.Content>
            </Card>
            </Grid.Column>

            <Grid.Column>
            <Card className="intro-cards">
              <Card.Content>
                <Image src={secure} className="intro-icons" />
                <Card.Header className="intro-header">Fast Pay</Card.Header>
                <Card.Meta className="intro-meta">One Click Payment</Card.Meta>
                <Card.Description className="intro-desc">
                Connect your credit and debit cards to Fast, then pay with just a tap on any site, even on your first visit. </Card.Description>
                <Button floated="right" labelPosition='right' icon='right chevron' content='Get Started' />
              </Card.Content>
            </Card>
            </Grid.Column>
          </Grid.Row>
        </Grid>
    </Container>
    </Segment>

    
    <Segment style={{ paddingTop: '4em'}} vertical>
    <Container>
    <Grid centered >
        <Grid.Row>
            <Header as='h3' className="intro-section">
            Easier, More Secure and Bye Bye Passwords
            </Header>
        </Grid.Row>
        <p style={{ fontSize: '1.33em' }}>
          Good Bye Passwords - Hello Fast, Easy, Secure Login
        </p>
      </Grid>
    </Container>
   

      <Grid columns='equal' stackable>
        <Grid.Row>
          <Grid.Column>
          <Image src={phone} />
          </Grid.Column>
          <Grid.Column>
            <Grid.Row>
            <List>
              <List.Item as='li' className="list-item">
              <Header as='h5' className="list-header">
                  Easier, More Secure and Bye Bye Passwords
              </Header>
                <p className="list-content">Input your email just once on the fast platform (web and mobile)</p>
              </List.Item>
              <List.Item as='li' className="list-item">
              <Header as='h5' className="list-header">
                 Verification
              </Header>
                <p className="list-content">Click the login button in your email verification and you can start using fast.</p>
              </List.Item>
              <List.Item as='li'className="list-item" > 
                <Header as='h5' className="list-header">
                  One-click Login the next time
                </Header>
                  <p className="list-content">with FAST. You can just login with the click of a button on your preferred site or mobile app

04</p>
              </List.Item>
            </List>
          </Grid.Row>

          <Button content='Get Started' className="list-button"/>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>

    <Segment style={{ padding: '4em 0em' }} >
      <div className="sticker-section">
        <Header as='h3' style={{ fontSize: '2em', textAlign:"center",paddingTop:"50px", color:"#fff"}}>
            Get free Stickers when you sign up <br/> and add your address
        </Header>
        <Button content='Sign Up now' style={
          { fontSize: '20px',
           marginTop:"30px", 
           backgroundColor:"#fff", 
           color:"#88D20F", 
           width:"300px", 
           alignSelf:"center"}
          }/>
      </div>
    </Segment>

    <Segment style={{ paddingTop: '4em',backgroundColor: "#FBFDF7"}} vertical>
      <Header as='h3' className="intro-section">
      We're not saying we are famous, but...
      </Header>
      <div className="customer-section"></div>
    </Segment>


    <Segment style={{ padding: '8em 0em'}} vertical>
      <Grid centered >
        <Grid.Row>
            <Header as='h3' className="intro-section">
              Our Partners like us, a lot!
            </Header>
        </Grid.Row>
        <p style={{ fontSize: '1.33em' }}>
           Fast helps your business change the metrics that matter
            </p>
      </Grid>

    <Container fluid style={{ padding: '4em 0em'}}>
      <Grid stackable columns={3}>
        <Grid.Row>
          <Grid.Column>
            <Card className="review-cards">
              <Card.Content>
              <div className="review-icons">
                <Rating icon='star' defaultRating={5} maxRating={5} />
                <Image src={companyone} className="review-icons" />
              </div>
                <Card.Header className="review-header">Fast Makes Logging into 24HUNDRED easy</Card.Header>
                <Card.Description className="review-desc">
                “Fast is an amazing product that has dramatically increase conversions, Product that has dramatically increase and dramatically increase”
               </Card.Description>
              <div className="review-profile">
              <Image src={profile} className="review-icons" />
              <p>Angus Julia<br/>CEO of Harris Farm</p>
              </div>
              </Card.Content>
            </Card>
            </Grid.Column>

            <Grid.Column>
            <Card className="review-cards">
              <Card.Content>
              <div className="review-icons">
                <Rating icon='star' defaultRating={5} maxRating={5} />
                <Image src={companytwo} className="review-icons" />
              </div>
                <Card.Header className="review-header">Order groceries online easy with fast login</Card.Header>
                <Card.Description className="review-desc">
                “Fast is an amazing product that has dramatically increase conversions, Product that has dramatically increase and dramatically increase”
               </Card.Description>
              <div className="review-profile">
              <Image src={profile} className="review-icons" />
              <p>Angus Julia<br/>CEO of Harris Farm</p>
              </div>
              </Card.Content>
            </Card>
            </Grid.Column>


            <Grid.Column>
            <Card className="review-cards">
              <Card.Content>
              <div className="review-icons">
                <Rating icon='star' defaultRating={5} maxRating={5} />  
                <Image src={companyone} className="review-icons" />
              </div>
                <Card.Header className="review-header">Fast Makes Logging into 24HUNDRED easy</Card.Header>
                <Card.Description className="review-desc">
                “Fast is an amazing product that has dramatically increase conversions, Product that has dramatically increase and dramatically increase”
               </Card.Description>
              <div className="review-profile">
              <Image src={profile} className="review-icons" />
              <p>Angus Julia<br/>CEO of Harris Farm</p>
              </div>
              </Card.Content>
            </Card>
            </Grid.Column>
          </Grid.Row>
        </Grid>
    </Container>
    </Segment>


    <Segment style={{ padding: '4em 0em',backgroundColor: "#FBFDF7"}}>
     <Container fluid>
     <Grid stackable centered columns={2}>
        <Grid.Row>
          <Grid.Column>
          <Header
        as='h1'
        content='Install Fast, have happy users.'
        style={{
          fontSize: '30px',
          marginBottom: 0,
          marginTop:'20px',
        }}
      />
      <p>Fast is nearly as easy to install as it is to use,<br/>and your customers will love it.</p>

      <div className="attached-button">
      <Segment attached>
          <Form>
            <Form.Field>
              <input type="email"
              placeholder='Enter your Email'/>
            </Form.Field>
          </Form>
          </Segment>
          <Button attached='bottom' className="signup-btn">
            <div className="signup-content"> 
              <p>Install Fast on my site</p>  
              <div className="image">
              <Image size='large' src={logo} className="btn-logo" />  
              </div>
            </div>
          </Button>
          <div className="install-btn">
            <Button floated="left" labelPosition='right' icon='right chevron' content='Install Fast in an app' />
          </div>
          </div> 
          </Grid.Column>
          <Grid.Column>
            <div className="integration-section">
           
            <div className="border-box">
            <Header
              as='h3'
              content='Developers'
              style={{
                textAlign:"center",
                fontSize: '20px',
                marginBottom: 0,
                marginTop:'-60px',
                backgroundColor:"#EAF7D4",
                color:"#2B4403",
                width:"150px",
                padding:"5px",
              }}
            />
            <p>Fast and easy install on these platforms</p>
            <Image src={integrations}/>
            </div>

            <div className="install-btn">
            <Button floated="left" labelPosition='right' icon='right chevron' content='API Docs' />
          </div>
            </div>
          </Grid.Column>
        </Grid.Row>
      </Grid> 
     </Container>
      
    </Segment>

    <Segment style={{ padding: '4em 0em' }} >
      <div className="download-section">
        <Header as='h3'>
        Our mobile app is coming to iOS<br/> and Android devices with all new <br/> amazing features.
        </Header>

        <div className="download-section-btn">
        <Image size='medium' src={ios} className="btn-logo" /> 
        <Image size='medium' src={android} className="btn-logo" /> 
        </div>
      </div>
    </Segment>

    <Segment vertical style={{ padding: '5em 0em',backgroundColor: "#FBFDF7" ,border:" 1px solid #88D20F" }}>
      <Container fluid className="footer">
        <Grid stackable>
          <Grid.Row>
          <Grid.Column width={3}>
          <Image size='medium' src={dark} style={{width:"100px"}}/>
          <List link>
                <List.Item as='a'>&copy;2019 FAST</List.Item>
                <List.Item as='a'>San Francisco, California</List.Item>
              </List> 
            </Grid.Column>
            <Grid.Column width={3}>
              <Header as='h3' content='Company' />
              <List link>
                <List.Item as='a'>Terms of Service</List.Item>
                <List.Item as='a'>Privacy Policy</List.Item>
                <List.Item as='a'>Careers</List.Item>
                <List.Item as='a'>News</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={3}>
              <Header as='h3' content='Connect'/>
              <List link>
                <List.Item as='a'>LinkedIn</List.Item>
                <List.Item as='a'>Twitter</List.Item>
                <List.Item as='a'>Github</List.Item>
                <List.Item as='a'>Dribble</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={7}>
              <p>
                Subscribe to our weekly newsletter to <br/> find out about our special offers
              </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
  </ResponsiveContainer>
)
export default App