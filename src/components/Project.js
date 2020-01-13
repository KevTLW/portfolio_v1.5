import React from 'react';
import Img from 'gatsby-image';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Icon from './Icon';
import styles from '../styles/project.module.css';

const Project = ({ delay, description, image, site, source, stack, title }) => (
  <li className={styles.container} data-sal='slide-up' data-sal-delay={delay} data-sal-duration={750}>
    <Img alt='' className={styles.image} fluid={image.childImageSharp.fluid} />
    <h1 className={styles.title}>{title}</h1>
    <p className={styles.description}>{description}</p>
    <ul className={styles.technologies}>
      {stack.map(technology => (
        <li className={styles.technology} key={technology}>
          <Icon icon={technology} />
        </li>
      ))}
    </ul>
    {source ? (
      <a aria-label={`Link to ${title}'s code`} className={styles.link} href={source} rel='noopener noreferrer' target='_blank'>
        <FontAwesomeIcon className={styles.repo} icon={faCode} />
        view code
      </a>
    ) : (
        <button className={styles.link} disabled>
          private source
      </button>
      )}
    {site ? (
      <a aria-label={`Link to ${title}'s view`} className={styles.link} href={site} rel='noopener noreferrer' target='_blank'>
        view project
        <FontAwesomeIcon className={styles.site} icon={faCode} />
      </a>
    ) : (
        <button className={styles.link} disabled>
          private view
      </button>
      )}
  </li>
);

export default Project;
