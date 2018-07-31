
const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');
const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

const CWD = process.cwd();

const siteConfig = require(`${CWD}/siteConfig.js`);

function imgUrl(img) {
  return siteConfig.baseUrl + 'img/' + img;
}

function docUrl(doc, language) {
  return siteConfig.baseUrl + 'docs/' + (language ? language + '/' : '') + doc;
}

function pageUrl(page, language) {
  return siteConfig.baseUrl + (language ? language + '/' : '') + page;
}

function githubUrl() {
  return siteConfig.githubUrl;
}


class Button extends React.Component {
  render() {
    return (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={this.props.href} target={this.props.target}>
          {this.props.children}
        </a>
      </div>
    );
  }
}

Button.defaultProps = {
  target: '_self',
};

const SplashContainer = props => (
  <div className="homeContainer">
    <div className="homeSplashFade" style={{marginTop: '5rem'}}>
      <div className="wrapper homeWrapper">{props.children}</div>
    </div>
  </div>
);

const Logo = props => (
  <div className="" style={{width: '500px', alignItems: 'center', margin: 'auto'}}>
    <img src={props.img_src} />
  </div>
);

const ProjectTitle = props => (
  <h2 className="projectTitle" style={{maxWidth:'1024px', margin: 'auto'}}>
    <small style={{color: 'black', fontSize: '2.0rem'}}>{siteConfig.projectDescription}</small>
  </h2>
);

const PromoSection = props => (
  <div className="section promoSection">
    <div className="promoRow">
      <div className="pluginRowBlock">{props.children}</div>
    </div>
  </div>
);

class HomeSplash extends React.Component {
  render() {
    let language = this.props.language || '';
    return (
      <SplashContainer>
        <Logo img_src={imgUrl('pulsar.svg')} />
        <div className="inner">
          <ProjectTitle />
          <PromoSection>
            <Button href={docUrl('standalone', language)}>Read the docs</Button>
            <Button href={githubUrl()}>GitHub</Button>
          </PromoSection>
        </div>
      </SplashContainer>
    );
  }
}

const Block = props => (
  <Container
    padding={['bottom']}
    id={props.id}
    background={props.background}>
    <GridBlock align="center" contents={props.children} layout={props.layout} />
  </Container>
);


const features_lang = language => {
  return {
    row1: [
      {
        content: 'Easily deploy lightweight compute logic using developer-friendly APIs without needing to run your own stream processing engine',
        title: `[Pulsar Functions](${docUrl('functions-overview', language)})`,
      },
      {
        content: 'Pulsar has run in production at Yahoo scale for over 3 years, with millions of messages per second across millions of topics',
        title: `[Proven in production](${docUrl('concepts-architecture', language)})`,
      },
      {
        content: 'Seamlessly expand capacity to hundreds of nodes',
        title: `[Horizontally scalable](${docUrl('concepts-architecture', language)})`,
      }
    ],
    row2: [
      {
        content: 'Designed for low publish latency (< 5ms) at scale with strong durabilty guarantees',
        title: `[Low latency with durability](${docUrl('concepts-architecture', language)})`,
      },
      {
        content: 'Designed for configurable replication between data centers across multiple geographic regions',
        title: `[Geo-replication](${docUrl('administration-geo', language)})`,
      },
      {
        content: 'Built from the ground up as a multi-tenant system. Supports Isolation, Authentication, Authorization and Quotas',
        title: `[Multi-tenancy](${docUrl('concepts-architecture', language)})`,
      }
    ],
    row3: [
      {
        content: `Persistent message storage based on Apache BookKeeper. Provides IO-level isolation between write and read operations`,
        title: `[Persistent storage](${docUrl('concepts-architecture', language)})`,
      },
      {
        content: 'Flexible messaging models with high-level APIs for Java, C++, Python and GO',
        title: `[Client libraries](${docUrl('client-libraries', language)})`,
      },
      {
        content: 'REST Admin API for provisioning, administration, tools and monitoring. Deploy on bare metal or Kubernetes.',
        title: `[Operability](${docUrl('admin-api-overview', language)})`,
      }
    ]
  };
};

const KeyFeautresGrid = props => (
  <Container
    padding={['bottom']}
    id={props.id}
    background={props.background}>
    <GridBlock align="center" contents={props.features.row1} layout="threeColumn" />
    <GridBlock align="center" contents={props.features.row2} layout="threeColumn" />
    <GridBlock align="center" contents={props.features.row3} layout="threeColumn" />
  </Container>
);



const ApacheBlock = prop => (
  <Container>
    <div className="Block" style={{textAlign: 'center'}}>
      <div className="" style={{alignItems: 'center', margin: 'auto'}}>
        <img src={imgUrl('apache_incubator.png')} />
      </div>
      <p>
        Apache Pulsar is an effort undergoing incubation at The <a href="http://www.apache.org">Apache Software Foundation (ASF)</a> 
        sponsored by the Apache Incubator PMC. Incubation is required of all newly accepted projects 
        until a further review indicates that the infrastructure, communications, and decision making 
        process have stabilized in a manner consistent with other successful ASF projects. 
        While incubation status is not necessarily a reflection of the completeness or stability of the code, 
        it does indicate that the project has yet to be fully endorsed by the ASF.
        Apache Pulsar (incubating) is available under the <a href="https://www.apache.org/licenses">Apache License, version 2.0</a>.
      </p>
    </div>
  </Container>
);

class Index extends React.Component {
  render() {
    let language = this.props.language || '';
    let features = features_lang(language);

    return (
      <div>
        <HomeSplash language={language} />
        <div className="mainContainer">
          <KeyFeautresGrid features={features} id={'key-features'} />
          <ApacheBlock />
        </div>
      </div>
    );
  }
}

module.exports = Index;
