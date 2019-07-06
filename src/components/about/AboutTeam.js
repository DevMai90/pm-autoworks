import React from 'react';
import AboutFounders from './AboutFounders';

const AboutTeam = () => {
  const founders = [
    {
      name: 'Peter Bon',
      title: 'Founder',
      about:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus modi temporibus beatae expedita autem quis non nostrum culpa, minima magni deleniti obcaecati enim ipsa voluptate aliquid quibusdam ad atque commodi, accusamus officiis sequi? Assumenda corporis provident totam ad laboriosam voluptates perferendis nesciunt exercitationem, velit accusamus, animi, repellat architecto et hic?',
      avatar: 'peter.jpg'
    },
    {
      name: 'Ricky Hogan',
      title: 'Founder',
      about:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus modi temporibus beatae expedita autem quis non nostrum culpa, minima magni deleniti obcaecati enim ipsa voluptate aliquid quibusdam ad atque commodi, accusamus officiis sequi? Assumenda corporis provident totam ad laboriosam voluptates perferendis nesciunt exercitationem, velit accusamus, animi, repellat architecto et hic?',
      avatar: 'ricky.jpg'
    },
    {
      name: 'Anthony Heng',
      title: 'Founder',
      about:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus modi temporibus beatae expedita autem quis non nostrum culpa, minima magni deleniti obcaecati enim ipsa voluptate aliquid quibusdam ad atque commodi, accusamus officiis sequi? Assumenda corporis provident totam ad laboriosam voluptates perferendis nesciunt exercitationem, velit accusamus, animi, repellat architecto et hic?',
      avatar: 'anthony.jpg'
    }
  ];

  const foundersDisplay = founders.map((founder, index) => {
    const { name, title, about, avatar } = founder;

    return (
      <AboutFounders
        founderName={name}
        title={title}
        about={about}
        avatar={avatar}
        key={index}
      />
    );
  });
  return (
    <section id="team">
      <div className="row my-3">
        <div className="col-md-12 mx-auto">
          <h3>Meet The Team</h3>
          <p>
            PM Autoworks was founded by family members sharing the same passion
            and supported by friends. Meet our founders.
          </p>
        </div>
      </div>
      <div className="row">{foundersDisplay}</div>
    </section>
  );
};

export default AboutTeam;
