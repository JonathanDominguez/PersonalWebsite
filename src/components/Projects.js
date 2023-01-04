import React from 'react';
import '../Styles/Projects.css';

function Projects(props) {
    const projectTagsList = props.projectTags;
    const listItems = projectTagsList.map((tags) =>
        <p className='tag-titles'key={tags}>{tags}</p>
    );
    return (
        <div className="frame">
            <div className="grid-container">
                <div className="grid-item">
                    <div className="information-side">
                        
                        <p className="title-of-project">{props.projectTitle}</p>
                        <p className="project-from">{props.projectFrom}</p>
                        <p className="project-info">{props.projectInfo}</p>
                        <a className="project-link" href={props.linkToProject} target="_blank" rel="noopener noreferrer" download={props.fileName}>{props.typeOfProject}</a>
                    </div>
                    <div className="project-tags">
                        <p className='title'>Built With:</p>
                        <div>{listItems}</div>
                    </div>
                </div>
                <div className="grid-item">
                    <img className="image-project-one" src={props.srcImageOne} alt="gitHub" width="500em" height="700em"></img>
                    <img className="image-project-two" src={props.srcImageTwo} alt="gitHub" width="600em" height="400em"></img>
                </div>
            </div>
        </div>
    )
}
export default Projects