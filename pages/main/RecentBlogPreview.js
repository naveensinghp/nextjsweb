import React from "react";

function RecentBlogPreview(props) {
  const title = props.title;
  const createdDate = props.createdDate
  const blogHint = props.blogHint;
  return (
    // <article>
    //   <h2>{title}</h2>
    //   <p>{desc}</p>
    //   <a href="/">Read More</a>
    // </article>
    <div className="card-container">
          <a className="card" href="#">
              <span>
                <h3 style={{letterSpacing:'0.3px'}}>
                {title} <br/>
                  <span style={{fontSize: '12px',color:'#142841'}}>{createdDate}</span> <br/>
                  <span style={{fontSize: '14px',color:'#142841',letterSpacing:'0.3px'}}>
                    {blogHint}
                    </span>
                </h3>
              </span> 
          </a>
      </div>
  );
}

export default RecentBlogPreview;
