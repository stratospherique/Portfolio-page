import React from 'react';
import { connect } from 'react-redux';
import ProjectSlide from './ProjectSlide';
import mobileLink from '../assets/img/1mobile.png'

const PROJECTS = [
  {
    title: 'Bookstore cms',
    description: 'qqsdqdqsd qsdqsdqsda azeazetzresgsml,qmlf sqdf',
    previews: [
      mobileLink
    ],
    technologies: [
      'html',
      'css',
      'react'
    ],
    repoLink: 'link',
    demoLink: 'link'
  }
]

const ProjectsList = ({ currentIndex }) => (
  <ProjectSlide project={PROJECTS[currentIndex]} />
)

const mapStateToProps = (state) => ({
  currentIndex: state.currentSlide
})

export default connect(mapStateToProps, null)(ProjectsList);