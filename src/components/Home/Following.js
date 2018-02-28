import React from 'react';
import agent from '../../agent';

const Tags = props => {
  const tags = props.tags;
  //alert(tags[0]) TAGS IS THE PROFILE IDS

  let profile = agent.Profile.getProfile(tags[0])

  let profileJSON = profile.then(function(result) {


    const json = JSON.stringify(result);
            return (
      
                <div className="articles-toggle">
                  <img src={json.image} className="user-img" alt={json.username} height="100"/>
                  <h5>{json.firstname} {json.lastname} | @{json.username}</h5>
                  </div>
                  )


  })




  if (tags) {
    return (

      <div className="tag-list">
        {
          tags.map(tag => {
            const handleClick = ev => {
              ev.preventDefault();
              props.onClickTag(tag, page => agent.Articles.byTag(tag, page), agent.Articles.byTag(tag));
            };

            return (
              <a
                href=""
                className="tag-default tag-pill"
                key={tag}
                onClick={handleClick}>
                {tag}
              </a>
            );
          })
        }
      </div>
    );

  }
  else {
    return (
      <div>Loading Tags...</div>
    );
  }

};

export default Tags;
