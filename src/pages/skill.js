
import React from 'react';
import { Progress } from 'reactstrap';
import Navbar from '../component/Navbar';

import './skill.css'

const skills = [
  { name: "HTML5", image: "https://www.w3.org/html/logo/downloads/HTML5_Logo_512.png" },
  { name: "CSS3", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png" },
  { name: "Java", image: "https://www.oracle.com/a/ocom/img/cb71-java-logo.png" },
  { name: "JavaScript", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1920px-Unofficial_JavaScript_logo_2.svg.png" },
  { name: "PHP", image: "https://www.php.net/images/logos/php-logo.svg" },

  { name: "REST APIs", image: "https://www.restapitutorial.com/media/RESTfulTutorial.png" },
  { name: "MySQL", image: "https://www.mysql.com/common/logos/logo-mysql-170x115.png" },
  { name: "SQL", image: "https://upload.wikimedia.org/wikipedia/commons/8/87/Sql_data_base_with_logo.png" },
  { name: "MongoDB", image: "https://webassets.mongodb.com/_com_assets/cms/MongoDB_Logo_FullColorBlack_RGB-4td3yuxzjs.png" },
  { name: "Spring Boot", image: "https://spring.io/images/projects/spring-edf462fec682b9d48cf628eaf9e19521.svg" },
  { name: "Hibernate", image: "https://hibernate.org/images/hibernate-logo.svg" },
  { name: "ReactJs", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png" },
  { name: "Bootstrap", image: "https://getbootstrap.com/docs/5.0/assets/brand/bootstrap-logo-shadow.png" },
  { name: "Node.js", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1280px-Node.js_logo.svg.png" },
  { name: "Git", image: "https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png" },
  { name: "Postman", image: "https://www.postman.com/downloads/social/postman-social-share.png" },

  { name: "Visual Studio", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Visual_Studio_Icon_2019.svg/1200px-Visual_Studio_Icon_2019.svg.png" },
  { name: "Google Colab", image: "https://colab.research.google.com/img/colab_favicon_256px.png" },
  { name: "Android Studio", image: "https://developer.android.com/studio/images/studio-icon-preview.svg" },
];
const Skill = () => {
  return (
    <> 
  <div className="container mt-5">
    <div className="card p-5 m-2">
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-5 g-3">
        {skills.map((skill, index) => (
          <div key={index} className="col">
            <div className="card h-100 d-flex align-items-center">
              <img src={skill.image} className="card-img-top img-fluid mx-auto" alt={skill.name} style={{ maxWidth: '100px' }} />
              <div className="card-body text-center">
                <h5 className="card-title">{skill.name}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
      </div>
    </div>
    </>
  );
};
  
export default Skill;