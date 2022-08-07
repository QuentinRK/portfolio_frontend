import React from 'react'
import '../styles/sectionHeader.scss'

const SectionHeader = ({ title }) => {
    return (
        <div className="section-title">
        <h2>{title}</h2>
        </div>
    )
}

export default SectionHeader
