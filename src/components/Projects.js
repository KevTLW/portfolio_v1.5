import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Project from './Project';
import styles from '../styles/projects.module.css';

const Projects = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(sort: { fields: frontmatter___image___modifiedTime }) {
        nodes {
          excerpt(pruneLength: 500)
          frontmatter {
            title
            site
            source
            stack
            image {
              childImageSharp {
                fluid(maxWidth: 300) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  `);

  const projects = data.allMarkdownRemark.nodes;

  return (
    <section className={styles.container}>
      <h2 className={styles.title}>projects</h2>
      <ul className={styles.items}>
        {projects.map((project, delay) => (
          <Project
            delay={delay * 100}
            description={project.excerpt}
            image={project.frontmatter.image}
            key={delay}
            title={project.frontmatter.title}
            site={project.frontmatter.site}
            source={project.frontmatter.source}
            stack={project.frontmatter.stack}
          />
        ))}
      </ul>
    </section>
  );
}

export default Projects;
