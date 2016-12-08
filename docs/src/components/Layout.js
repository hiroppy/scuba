import React from 'react';
import queryString from 'query-string';
import GithubCorner from 'react-github-corner';
import Container from '../../../src';
import * as colors from '../../../src/styles/colors';
import Header from './Header';
import styles from './style';

const fetchColorHex = (name) => colors[name];

class Layout extends React.Component {
  constructor() { // eslint-disable-line react/sort-comp
    super();

    this.state = {
      theme          : 'sea',
      subColor       : 'light',
      background     : '#333',
      displaedSidebar: true
    };

    this.changeTheme = this.changeTheme.bind(this);
    this.changeSubColor = this.changeSubColor.bind(this);
    this.changeBackgroundColor = this.changeBackgroundColor.bind(this);
  }

  changeTheme(theme: string) {
    this.setState({ theme });
  }

  changeSubColor(subColor: string) {
    this.setState({ subColor });
  }

  changeBackgroundColor(background: string) {
    if (background.length === 0) this.setState({ background: '#333' });
    else this.setState({ background: `#${background}` });
  }

  componentWillMount() {
    const queries = queryString.parse(location.search);
    const res = {};

    Object.keys(queries).forEach((key) => {
      if(queries[key]) {
        if (parseInt(queries[key], 16).toString(16) === queries[key]) {
          res[key] = `#${queries[key]}`;
        }
        else {
          res[key] = queries[key];
        }
      }
    });

    this.setState({
      res,
      displaedSidebar: !(window.innerWidth <= 800)
    });
  }

  componentDidMount() {
    window.addEventListener('resize', (e) => {
      const innerWidth = e.currentTarget.innerWidth;

      if (this.state.displaedSidebar && innerWidth <= 800) {
        this.setState({ displaedSidebar: false });
      }
      else if (!this.state.displaedSidebar && innerWidth > 800) {
        this.setState({ displaedSidebar: true });
      }
    });
  }

  render() {
    const {
      theme,
      subColor,
      background,
      displaedSidebar
    } = this.state;

    const {
      main,
      sidebar
    } = this.props;

    const themeColor = fetchColorHex(theme);

    return (
      <div
        style={{ background }}
        className={styles.wrapper}
      >
        <Container
          style={{ background }}
          theme={theme}
          subColor={subColor}
          codeTheme="obsidian"
        >
          <div className={styles.githubCorner}>
            <GithubCorner
              href="https://github.com/abouthiroppy/scuba"
              bannerColor={themeColor}
            />
          </div>
          <Header
            theme={theme}
            themeHex={themeColor}
            subColor={subColor}
            subColorHex={fetchColorHex(subColor)}
            changeTheme={this.changeTheme}
            changeSubColor={this.changeSubColor}
            changeBackgroundColor={this.changeBackgroundColor}
          />
          {
            sidebar && displaedSidebar ? (
              <div>
                <div className={styles.sidebar}>{sidebar}</div>
                <div className={`${styles.main} ${styles.mainWithSidebar}`}>{main}</div>
              </div>
            ) : (
              <div className={styles.main}>{main}</div>
            )
          }
        </Container>
      </div>
    );
  }
}

export default Layout;
