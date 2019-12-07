import React from "react";
import { Helmet } from "react-helmet";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";
// core components
import Header from "components/Header/Header";
import HeaderLinks from "components/Header/HeaderLinks";
import Footer from "components/Footer/Footer";

export default function Layout({ children }) {
  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });
  const classes = {
    block: "makeStyles-block-588",
    container: "makeStyles-container-585",
    icon: "makeStyles-icon-593",
    inlineBlock: "makeStyles-inlineBlock-589",
    left: "makeStyles-left-591",
    list: "makeStyles-list-590",
    main: "makeStyles-main-581",
    mainRaised: "makeStyles-mainRaised-582",
    mlAuto: "makeStyles-mlAuto-584",
    mrAuto: "makeStyles-mrAuto-583",
    right: "makeStyles-right-592",
    textCenter: "makeStyles-textCenter-587",
    title: "makeStyles-title-586"
  }
  return (
    <div>
      <Helmet>
        <link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Roboto+Slab:400,700|Material+Icons"/>
        <link href="https://use.fontawesome.com/releases/v5.0.10/css/all.css" rel="stylesheet"/>
        <title>Material Kit PRO React</title>
      </Helmet>
      <Header
        brand="Material Kit PRO React"
        links={<HeaderLinks dropdownHoverColor="info" />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 300,
          color: "info"
        }}
      />
      { children }
      <Footer
        content={
          <div>
            <div className={classes.left}>
              <List className={classes.list}>
                <ListItem className={classes.inlineBlock}>
                  <a
                    href="https://www.creative-tim.com/?ref=mkpr-about-us"
                    className={classes.block}
                    target="_blank"
                  >
                    Creative Tim
                  </a>
                </ListItem>
                <ListItem className={classes.inlineBlock}>
                  <a
                    href="https://www.creative-tim.com/presentation?ref=mkpr-about-us"
                    className={classes.block}
                    target="_blank"
                  >
                    About us
                  </a>
                </ListItem>
                <ListItem className={classes.inlineBlock}>
                  <a
                    href="//blog.creative-tim.com/"
                    className={classes.block}
                    target="_blank"
                  >
                    Blog
                  </a>
                </ListItem>
                <ListItem className={classes.inlineBlock}>
                  <a
                    href="https://www.creative-tim.com/license?ref=mkpr-about-us"
                    className={classes.block}
                    target="_blank"
                  >
                    Licenses
                  </a>
                </ListItem>
              </List>
            </div>
            <div className={classes.right}>
              &copy; {1900 + new Date().getYear()} , made with{" "}
              <Favorite className={classes.icon} /> by{" "}
              <a
                href="https://www.creative-tim.com?ref=mkpr-about-us"
                target="_blank"
              >
                Creative Tim
              </a>{" "}
              for a better web.
            </div>
          </div>
        }
      />
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}
